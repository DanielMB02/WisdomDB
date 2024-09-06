import { Injectable } from '@nestjs/common';
import { CreateShipmentReceivementDto } from './dto/create-shipment-receivement.dto';
import { UpdateShipmentReceivementDto } from './dto/update-shipment-receivement.dto';

@Injectable()
export class ShipmentReceivementService {
  create(createShipmentReceivementDto: CreateShipmentReceivementDto) {
    return 'This action adds a new shipmentReceivement';
  }

  findAll() {
    return `This action returns all shipmentReceivement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shipmentReceivement`;
  }

  update(id: number, updateShipmentReceivementDto: UpdateShipmentReceivementDto) {
    return `This action updates a #${id} shipmentReceivement`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipmentReceivement`;
  }
}
