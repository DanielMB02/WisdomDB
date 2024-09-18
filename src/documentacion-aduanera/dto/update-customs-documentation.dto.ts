import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomsDocumentationDto } from './create-customs-documentation.dto';

export class UpdateCustomsDocumentationDto extends PartialType(CreateCustomsDocumentationDto) {}
