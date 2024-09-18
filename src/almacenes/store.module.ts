import { forwardRef, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from 'src/clientes/client.module';
import { UsersModule } from 'src/usuarios/users.module';
import { PurchaseModule } from 'src/compras/purchase.module';
import { Almacen } from './entities/almacen.entity';
import { TransferenciaDeAlmacen } from './entities/transferencia-de-almacen.entity';
import { MovimientoDeProductos } from './entities/movimiento-de-productos.entity';
import { Inventario } from './entities/inventario.entity';
import { AjusteDeInventario } from './entities/ajuste-de-inventarios.entity';
import { ProductModule } from 'src/productos/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Almacen,
      TransferenciaDeAlmacen,
      MovimientoDeProductos,
      Inventario,
      AjusteDeInventario,
    ]),
    forwardRef(() => ProductModule),
    forwardRef(() => ClientModule),
    forwardRef(() => UsersModule),
    forwardRef(() => PurchaseModule),
  ],
  exports: [TypeOrmModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
