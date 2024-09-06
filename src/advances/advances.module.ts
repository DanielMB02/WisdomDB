import { forwardRef, Module } from '@nestjs/common';
import { AdvancesService } from './advances.service';
import { AdvancesController } from './advances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advance } from './entities/advance.entity';
import { AdvanceControl } from './entities/advance-control.entity';
import { AdvanceCompensation } from './entities/advance-compensation.entity';
import { SaleModule } from 'src/sale/sale.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Advance, AdvanceControl, AdvanceCompensation]),
    forwardRef(() => SaleModule),
  ],
  exports: [TypeOrmModule],
  controllers: [AdvancesController],
  providers: [AdvancesService],
})
export class AdvancesModule {}
