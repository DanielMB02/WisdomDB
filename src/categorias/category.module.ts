import { forwardRef, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/productos/product.module';
import { Categoria } from './entities/categoria.entity';
import { Tipo } from './entities/tipo.entity';
import { Tono } from './entities/tono.entity';
import { DiscountModule } from 'src/descuentos/discount.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Categoria, Tipo, Tono]),
    forwardRef(() => ProductModule),
    forwardRef(() => DiscountModule),
  ],
  exports: [TypeOrmModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
