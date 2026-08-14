import {
  Injectable,
  CanActivate,
  ExecutionContext,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class UploadTimeoutGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    
    // Set timeout to 60 seconds (60000 ms)
    request.setTimeout(60000, () => {
      throw new RequestTimeoutException('File upload timeout exceeded 60s');
    });

    return true;
  }
}
