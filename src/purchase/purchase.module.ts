import { forwardRef, Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { PurchaseCost } from './entities/purchase-costs.entity';
import { SupplierModule } from 'src/supplier/supplier.module';
import { ImportCostsModule } from 'src/import-costs/import-costs.module';
import { ShipmentReceivementModule } from 'src/shipment-receivement/shipment-receivement.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Purchase, PurchaseCost]),
    forwardRef(() => SupplierModule),
    forwardRef(() => ImportCostsModule),
    forwardRef(() => ShipmentReceivementModule),
  ],
  exports: [TypeOrmModule],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
