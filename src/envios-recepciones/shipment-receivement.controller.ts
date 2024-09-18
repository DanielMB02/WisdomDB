import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShipmentReceivementService } from './shipment-receivement.service';
import { CreateShipmentReceivementDto } from './dto/create-shipment-receivement.dto';
import { UpdateShipmentReceivementDto } from './dto/update-shipment-receivement.dto';

@Controller('shipment-receivement')
export class ShipmentReceivementController {
  constructor(private readonly shipmentReceivementService: ShipmentReceivementService) {}

  @Post()
  create(@Body() createShipmentReceivementDto: CreateShipmentReceivementDto) {
    return this.shipmentReceivementService.create(createShipmentReceivementDto);
  }

  @Get()
  findAll() {
    return this.shipmentReceivementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shipmentReceivementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShipmentReceivementDto: UpdateShipmentReceivementDto) {
    return this.shipmentReceivementService.update(+id, updateShipmentReceivementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipmentReceivementService.remove(+id);
  }
}
