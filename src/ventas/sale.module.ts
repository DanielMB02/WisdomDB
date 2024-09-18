import { forwardRef, Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvancesModule } from 'src/anticipos/advances.module';
import { Venta } from './entities/venta.entity';
import { ProductModule } from 'src/productos/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Venta]),
    forwardRef(() => AdvancesModule),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
