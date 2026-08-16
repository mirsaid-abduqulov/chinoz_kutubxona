import { BadRequestException } from '@nestjs/common';
import { FileType } from '../../core/database/generated';
import { memoryStorage } from 'multer';

// Use memoryStorage because we want to stream it in saveFile
export const multerStorage = memoryStorage();

export const imageFileFilter = (req: any, file: any, cb: any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
    return cb(new BadRequestException('Only image files are allowed!'), false);
  }
  cb(null, true);
};

export const documentFileFilter = (req: any, file: any, cb: any) => {
  if (!file.originalname.match(/\.(xls|xlsx|doc|docx|jpg|jpeg|png|webp|zip|rar|pdf|ppt|pptx)$/)) {
    return cb(new BadRequestException('Unsupported file type!'), false);
  }
  cb(null, true);
};

export const imageLimits = {
  fileSize: 5 * 1024 * 1024, // 5MB
};

export const documentLimits = {
  fileSize: 50 * 1024 * 1024, // 50MB
};

export function detectFileType(mimetype: string, filename: string): FileType {
  const ext = filename.split('.').pop()?.toLowerCase();

  if (mimetype.startsWith('image/') || ['jpg', 'jpeg', 'png', 'webp'].includes(ext as string)) {
    return FileType.IMAGE;
  }
  if (ext === 'pdf' || mimetype === 'application/pdf') {
    return FileType.PDF;
  }
  if (mimetype.includes('excel') || mimetype.includes('spreadsheet') || ['xls', 'xlsx'].includes(ext as string)) {
    return FileType.EXCEL;
  }
  if (mimetype.includes('word') || ['doc', 'docx'].includes(ext as string)) {
    return FileType.WORD;
  }
  return FileType.OTHER;
}

export const bookLimits = {
  fileSize: 100 * 1024 * 1024, // 100MB
};

export const mediaItemLimits = {
  fileSize: parseInt(process.env.MAX_VIDEO_FILE_SIZE_MB || '200') * 1024 * 1024,
};

export const mediaItemFileFilter = (req: any, file: any, cb: any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|webp|mp4|avi|mkv|mov|webm)$/i)) {
    return cb(new BadRequestException('Unsupported media type!'), false);
  }

  const isVideo = file.mimetype.startsWith('video/') || file.originalname.match(/\.(mp4|avi|mkv|mov|webm)$/i);
  const size = parseInt(req.headers['content-length'] || '0');

  if (!isVideo && size > 50 * 1024 * 1024) {
    return cb(new BadRequestException('Non-video files must be under 50MB!'), false);
  }

  cb(null, true);
};
