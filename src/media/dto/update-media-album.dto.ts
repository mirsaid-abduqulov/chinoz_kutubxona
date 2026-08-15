import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMediaAlbumDto } from './create-media-album.dto';

export class UpdateMediaAlbumDto extends PartialType(OmitType(CreateMediaAlbumDto, ['type'] as const)) {}
