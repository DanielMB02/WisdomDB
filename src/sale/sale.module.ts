import { forwardRef, Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { AdvancesModule } from 'src/advances/advances.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sale]),
    forwardRef(() => AdvancesModule),
  ],
  exports: [TypeOrmModule],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
