import { forwardRef, Module } from '@nestjs/common';
import { ShipmentReceivementService } from './shipment-receivement.service';
import { ShipmentReceivementController } from './shipment-receivement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from 'src/compras/purchase.module';
import { EnviosYRecepciones } from './entities/envios-recepciones.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EnviosYRecepciones]),
    forwardRef(() => PurchaseModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ShipmentReceivementController],
  providers: [ShipmentReceivementService],
})
export class ShipmentReceivementModule {}
