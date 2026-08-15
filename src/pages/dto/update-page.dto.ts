import { OmitType, PartialType } from '@nestjs/swagger';
import { CreatePageDto } from './create-page.dto';

export class UpdatePageDto extends OmitType(PartialType(CreatePageDto), ['slug'] as const) {}
