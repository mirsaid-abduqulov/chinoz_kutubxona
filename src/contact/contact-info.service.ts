import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { StorageService } from '../common/storage/storage.service';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { SocialLink } from 'src/common/interfaces/socila_link';
import { Prisma } from 'src/core/database/generated';

const ALLOWED_PLATFORMS = [
  'telegram',
  'facebook',
  'instagram',
  'youtube',
  'tiktok',
  'linkedin',
  'whatsapp',
  'twitter',
];

@Injectable()
export class ContactInfoService {
  private readonly logger = new Logger(ContactInfoService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) { }

  async getInfo() {
    let contactInfo = await this.prisma.contactInfo.findFirst();

    if (!contactInfo) {
      // Default qiymat bilan init
      contactInfo = await this.prisma.contactInfo.create({
        data: {
          address_latin: '',
          address_cyril: '',
          address_ru: '',
          phone: '',
          email: '',
          social_links: [],
        },
      });
    }

    return contactInfo;
  }

  async updateInfo(dto: UpdateContactInfoDto) {
    const contactInfo = await this.getInfo();

    return this.prisma.contactInfo.update({
      where: { id: contactInfo.id },
      data: dto,
    });
  }

  /**
   * Yangi social link qo'shish
   */
  async addSocialLink(dto: CreateSocialLinkDto, iconFile?: Express.Multer.File) {
    if (!iconFile) {
      throw new BadRequestException('Icon rasmi majburiy');
    }

    if (!ALLOWED_PLATFORMS.includes(dto.platform)) {
      throw new BadRequestException(
        `Platform ${dto.platform} qo'llab-quvvatlanmaydi. Ruxsat etilgan: ${ALLOWED_PLATFORMS.join(', ')}`,
      );
    }

    const contactInfo = await this.getInfo();

    // Platform allaqachon mavjudmi tekshir
    const existingPlatform = (contactInfo.social_links as unknown as SocialLink[])?.find(
      (link) => link.platform === dto.platform,
    );
    if (existingPlatform) {
      throw new ConflictException(
        `${dto.platform} ijtimoiy tarmoq allaqachon qo'shilgan`,
      );
    }

    // Icon rasmini saqlash
    let iconUrl: string;
    try {
      const saved = await this.storageService.saveFile(iconFile, 'social_icons');
      iconUrl = saved.url;
    } catch (error) {
      throw new BadRequestException('Icon rasmini saqlashda xato: ' + error.message);
    }

    // Social link qo'shish (JSON array'ga qo'shish)
    try {
      const currentLinks = (contactInfo.social_links as unknown as SocialLink[]) || [];
      const newLink = {
        platform: dto.platform.toLowerCase(),
        url: dto.url.trim(),
        icon_url: iconUrl,
      };

      const updatedLinks = [...currentLinks, newLink];

      return this.prisma.contactInfo.update({
        where: { id: contactInfo.id },
        data: { social_links: updatedLinks as unknown as Prisma.InputJsonValue },
      });
    } catch (error) {
      // Xatolik bo'lsa, icon'ni o'chir
      await this.storageService.deleteFile(iconUrl);
      this.logger.error(`Social link qo'shishda xato: ${error.message}`);
      throw new BadRequestException('Social link qo\'shishda xato yuz berdi');
    }
  }

  /**
   * Social link'ni yangilash
   */
  async updateSocialLink(
    platform: string,
    dto: UpdateSocialLinkDto,
    newIconFile?: Express.Multer.File,
  ) {
    platform = platform.toLowerCase();

    if (!ALLOWED_PLATFORMS.includes(platform)) {
      throw new BadRequestException(`Platform ${platform} topilmadi`);
    }

    const contactInfo = await this.getInfo();
    const links = (contactInfo.social_links as unknown as SocialLink[]) || [];
    const linkIndex = links.findIndex((link) => link.platform === platform);

    if (linkIndex === -1) {
      throw new NotFoundException(`${platform} ijtimoiy tarmoq qo'shilmagan`);
    }

    const oldLink = links[linkIndex];
    let newIconUrl = oldLink.icon_url;

    // Yangi icon kelsa, eskisini o'chirib yangisini saqlash
    if (newIconFile) {
      try {
        const saved = await this.storageService.saveFile(newIconFile, 'social_icons');
        newIconUrl = saved.url;
      } catch (error) {
        throw new BadRequestException('Icon rasmini saqlashda xato: ' + error.message);
      }
    }

    try {
      // Social link'ni yangilash
      links[linkIndex] = {
        platform,
        url: dto.url?.trim() || oldLink.url,
        icon_url: newIconUrl,
      };

      const updated = await this.prisma.contactInfo.update({
        where: { id: contactInfo.id },
        data: { social_links: links as unknown as Prisma.InputJsonValue },
      });

      // Eski icon o'chirish (yangi kelgan bo'lsa)
      if (newIconFile && oldLink.icon_url) {
        await this.storageService.deleteFile(oldLink.icon_url);
      }

      return updated;
    } catch (error) {
      // Yangi icon saqlandi lekin DB yangilash muvaffaqiyatsiz bo'lsa, uni o'chir
      if (newIconFile) {
        await this.storageService.deleteFile(newIconUrl);
      }
      this.logger.error(`Social link yangilashda xato: ${error.message}`);
      throw new BadRequestException('Social link yangilashda xato yuz berdi');
    }
  }

  /**
   * Social link'ni o'chirish
   */
  async removeSocialLink(platform: string) {
    platform = platform.toLowerCase();

    if (!ALLOWED_PLATFORMS.includes(platform)) {
      throw new BadRequestException(`Platform ${platform} topilmadi`);
    }

    const contactInfo = await this.getInfo();
    const links = (contactInfo.social_links as unknown as SocialLink[]) || [];
    const linkIndex = links.findIndex((link) => link.platform === platform);

    if (linkIndex === -1) {
      throw new NotFoundException(`${platform} ijtimoiy tarmoq qo'shilmagan`);
    }

    const linkToRemove = links[linkIndex];

    try {
      // Social link'ni o'chirish
      const updatedLinks = links.filter((_, idx) => idx !== linkIndex);
      await this.prisma.contactInfo.update({
        where: { id: contactInfo.id },
        data: { social_links: updatedLinks as unknown as Prisma.InputJsonValue },
      });

      // Icon'ni storage'dan o'chirish
      if (linkToRemove.icon_url) {
        await this.storageService.deleteFile(linkToRemove.icon_url);
      }

      return { success: true, message: 'Social link o\'chirildi' };
    } catch (error) {
      this.logger.error(`Social link o'chirishda xato: ${error.message}`);
      throw new BadRequestException('Social link o\'chirishda xato yuz berdi');
    }
  }

  /**
   * Barcha social link'larni olish
   */
  async getSocialLinks() {
    const contactInfo = await this.getInfo();
    return (contactInfo.social_links as unknown as SocialLink[]) || [];
  }

  /**
   * Bitta social link'ni olish
   */
  async getSocialLink(platform: string) {
    platform = platform.toLowerCase();

    const contactInfo = await this.getInfo();
    const links = (contactInfo.social_links as unknown as SocialLink[]) || [];
    const link = links.find((l) => l.platform === platform);

    if (!link) {
      throw new NotFoundException(`${platform} ijtimoiy tarmoq qo'shilmagan`);
    }

    return link;
  }
}