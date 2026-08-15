import { PartialType } from '@nestjs/swagger';
import { CreateUsefulLinkDto } from './create-useful-link.dto';

export class UpdateUsefulLinkDto extends PartialType(CreateUsefulLinkDto) {}
