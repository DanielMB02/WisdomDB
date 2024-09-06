import { forwardRef, Module } from '@nestjs/common';
import { BillingsService } from './billings.service';
import { BillingsController } from './billings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingNote } from './entities/billing-note.entity';
import { CustomerAccountStatus } from './entities/customer-account-status.entity';
import { PaymentAdjustment } from './entities/pay-adjustment.entity';
import { TransferSales } from './entities/transfer-sales.entity';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BillingNote,
      CustomerAccountStatus,
      PaymentAdjustment,
      TransferSales,
    ]),
    forwardRef(() => ClientModule),
  ],
  exports: [TypeOrmModule],
  controllers: [BillingsController],
  providers: [BillingsService],
})
export class BillingsModule {}
