import { forwardRef, Module } from '@nestjs/common';
import { PaymentProcessIntegrationService } from './payment-process-integration.service';
import { PaymentProcessIntegrationController } from './payment-process-integration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentProcessIntegration } from './entities/payment-process-integration.entity';
import { SupplierModule } from 'src/supplier/supplier.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentProcessIntegration]),
    forwardRef(() => SupplierModule),
  ],
  exports: [TypeOrmModule],
  controllers: [PaymentProcessIntegrationController],
  providers: [PaymentProcessIntegrationService],
})
export class PaymentProcessIntegrationModule {}
