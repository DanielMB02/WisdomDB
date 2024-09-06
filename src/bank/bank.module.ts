import { forwardRef, Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankControl } from './entities/bank-control.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BankControl]),
  ],
  exports: [TypeOrmModule],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}
