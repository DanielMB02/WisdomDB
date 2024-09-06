import { forwardRef, Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { PurchaseModule } from 'src/purchase/purchase.module';
import { ProductModule } from 'src/product/product.module';
import { ShipmentReceivementModule } from 'src/shipment-receivement/shipment-receivement.module';
import { PaymentProcessIntegrationModule } from 'src/payment-process-integration/payment-process-integration.module';
import { Transaction } from './entities/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Supplier, Transaction]),
    forwardRef(() => PurchaseModule),
    forwardRef(() => ShipmentReceivementModule),
    forwardRef(() => ProductModule),
    forwardRef(() => PaymentProcessIntegrationModule),
  ],
  exports: [TypeOrmModule],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
