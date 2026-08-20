import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CacheMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.path.startsWith('/media/')) {
      res.setHeader(
        'Cache-Control',
        'public, max-age=31536000, immutable'
      );
      res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
    }
    else if (req.path.startsWith('/api/')) {
      res.setHeader(
        'Cache-Control',
        'public, max-age=300'
      );
      res.setHeader('Expires', new Date(Date.now() + 300000).toUTCString());
    }
    else if (req.path.includes('/docs') || req.path.includes('/swagger')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
 
    next();
  }
}