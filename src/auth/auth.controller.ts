import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles-auth-decorator';
import { UserRole } from '../core/database/generated';
import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import type { Request, Response } from 'express';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { JwtAuthGuard, JwtPayload } from '../common/guards/jwt-auth.guard';

@ApiTags('Auth (Avtorizatsiya)')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    const clientIp = this.extractIp(req);
    return this.authService.login(
      dto.phone_number,
      dto.password,
      res,
    );
  }

  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Logout' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(
    @Req() req: Request & { user: JwtPayload; clientIp: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(req.user.id, res, req.clientIp);
    return { message: 'Muvaffaqiyatli chiqildi' };
  }

  @ApiOperation({ summary: 'Refresh token' })
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refresh(@Body() dto: RefreshDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.refreshToken(dto.userId, dto.refreshToken, res);
  }

  private extractIp(req: Request): string {
    const realIp = req.headers['x-real-ip'] as string;
    if (realIp) return realIp.trim();

    const forwarded = req.headers['x-forwarded-for'] as string;
    if (forwarded) return forwarded.split(',')[0].trim();

    return (req.socket.remoteAddress || '').replace(/^::ffff:/, '');
  }
}
