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
  if (!file.originalname.match(/\.(pdf|xls|xlsx|doc|docx|jpg|jpeg|png|webp|zip|rar)$/)) {
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
  
  if (mimetype.startsWith('image/') || (ext && ['jpg', 'jpeg', 'png', 'webp'].includes(ext))) {
    return FileType.IMAGE;
  }
  if (mimetype === 'application/pdf' || ext === 'pdf') {
    return FileType.PDF;
  }
  if (
    mimetype.includes('excel') ||
    mimetype.includes('spreadsheet') ||
    ['xls', 'xlsx'].includes(ext as string)
  ) {
    return FileType.EXCEL;
  }
  if (
    mimetype.includes('word') ||
    (ext && ['doc', 'docx'].includes(ext))
  ) {
    return FileType.WORD;
  }
  return FileType.OTHER;
}
