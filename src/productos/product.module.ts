import { forwardRef, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/categorias/category.module';
import { SupplierModule } from 'src/proveedores/supplier.module';
import { StoreModule } from 'src/almacenes/store.module';
import { DiscountModule } from 'src/descuentos/discount.module';
import { ReturnsModule } from 'src/devoluciones/returns.module';
import { CommissionsModule } from 'src/comisiones/commissions.module';
import { Producto } from './entities/producto.entity';
import { Devolucion } from 'src/devoluciones/entities/devolucion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, Devolucion]),
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
