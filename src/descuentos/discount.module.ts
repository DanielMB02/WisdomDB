import { forwardRef, Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from 'src/clientes/client.module';
import { CategoryModule } from 'src/categorias/category.module';
import { ProductModule } from 'src/productos/product.module';
import { Descuento } from './entities/descuento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Descuento]),
    forwardRef(() => ClientModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
