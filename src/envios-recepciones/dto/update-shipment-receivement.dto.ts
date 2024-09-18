import { PartialType } from '@nestjs/mapped-types';
import { CreateShipmentReceivementDto } from './create-shipment-receivement.dto';

export class UpdateShipmentReceivementDto extends PartialType(CreateShipmentReceivementDto) {}
