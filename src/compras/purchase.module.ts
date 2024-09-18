import { forwardRef, Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierModule } from 'src/proveedores/supplier.module';
import { ImportCostsModule } from 'src/costos-de-importacion/import-costs.module';
import { ShipmentReceivementModule } from 'src/envios-recepciones/shipment-receivement.module';
import { Compra } from './entities/compra.entity';
import { CostosDeCompra } from './entities/costos-de-compra.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compra, CostosDeCompra]),
    forwardRef(() => SupplierModule),
    forwardRef(() => ImportCostsModule),
    forwardRef(() => ShipmentReceivementModule),
  ],
  exports: [TypeOrmModule],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
