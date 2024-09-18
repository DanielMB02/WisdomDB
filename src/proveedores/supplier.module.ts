import { forwardRef, Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from 'src/compras/purchase.module';
import { ShipmentReceivementModule } from 'src/envios-recepciones/shipment-receivement.module';
import { PaymentProcessIntegrationModule } from 'src/proceso-de-pagos-y-contabilidad/payment-process-integration.module';
import { Proveedor } from './entities/proveedor.entity';
import { Transaccion } from './entities/transaccion.entity';
import { ProductModule } from 'src/productos/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proveedor, Transaccion]),
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
