import { forwardRef, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CategoryModule } from 'src/category/category.module';
import { SupplierModule } from 'src/supplier/supplier.module';
import { StoreModule } from 'src/store/store.module';
import { DiscountModule } from 'src/discount/discount.module';
import { ReturnsModule } from 'src/returns/returns.module';
import { CommissionsModule } from 'src/commissions/commissions.module';
import { ReturnEntity } from 'src/returns/entities/return.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ReturnEntity]),
    forwardRef(() => CategoryModule),
    forwardRef(() => SupplierModule),
    forwardRef(() => StoreModule),
    forwardRef(() => DiscountModule),
    forwardRef(() => ReturnsModule),
    forwardRef(() => StoreModule),
    forwardRef(() => CommissionsModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
