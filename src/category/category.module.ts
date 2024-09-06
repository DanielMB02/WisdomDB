import { forwardRef, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ProductModule } from 'src/product/product.module';
import { Discount } from 'src/discount/entities/discount.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    forwardRef(() => ProductModule),
    forwardRef(() => Discount),
  ],
  exports: [TypeOrmModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
