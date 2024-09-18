import { forwardRef, Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlDeBancos } from './entities/control-de-bancos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ControlDeBancos]),
  ],
  exports: [TypeOrmModule],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}
