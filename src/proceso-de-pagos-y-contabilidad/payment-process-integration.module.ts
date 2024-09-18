import { forwardRef, Module } from '@nestjs/common';
import { PaymentProcessIntegrationService } from './payment-process-integration.service';
import { PaymentProcessIntegrationController } from './payment-process-integration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierModule } from 'src/proveedores/supplier.module';
import { IntegracionDeProcesosDePago } from './entities/proceso-de-pagos-y-contabilidad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([IntegracionDeProcesosDePago]),
    forwardRef(() => SupplierModule),
  ],
  exports: [TypeOrmModule],
  controllers: [PaymentProcessIntegrationController],
  providers: [PaymentProcessIntegrationService],
})
export class PaymentProcessIntegrationModule {}
