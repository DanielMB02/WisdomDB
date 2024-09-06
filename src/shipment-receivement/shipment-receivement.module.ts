import { forwardRef, Module } from '@nestjs/common';
import { ShipmentReceivementService } from './shipment-receivement.service';
import { ShipmentReceivementController } from './shipment-receivement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entities/shipment-receivement.entity';
import { PurchaseModule } from 'src/purchase/purchase.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shipment]),
    forwardRef(() => PurchaseModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ShipmentReceivementController],
  providers: [ShipmentReceivementService],
})
export class ShipmentReceivementModule {}
