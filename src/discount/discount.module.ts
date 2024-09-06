import { forwardRef, Module } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discount } from './entities/discount.entity';
import { ClientModule } from 'src/client/client.module';
import { CategoryModule } from 'src/category/category.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Discount]),
    forwardRef(() => ClientModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
