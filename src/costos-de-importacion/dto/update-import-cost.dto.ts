import { PartialType } from '@nestjs/mapped-types';
import { CreateImportCostDto } from './create-import-cost.dto';

export class UpdateImportCostDto extends PartialType(CreateImportCostDto) {}
