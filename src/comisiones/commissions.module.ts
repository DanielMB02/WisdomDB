import { forwardRef, Module } from '@nestjs/common';
import { CommissionsService } from './commissions.service';
import { CommissionsController } from './commissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/usuarios/users.module';
import { ProductModule } from 'src/productos/product.module';
import { AsignacionDeComision } from './entities/comision.entity';
import { ComisionPorProducto } from './entities/comision-por-producto.entity';
import { ObjetivoDeVentas } from './entities/objetivo-de-ventas.entity';
import { ComisionDeUsuario } from './entities/comision-de-usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AsignacionDeComision,
      ComisionPorProducto,
      ObjetivoDeVentas,
      ComisionDeUsuario,
    ]),
    forwardRef(() => UsersModule),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule],
  controllers: [CommissionsController],
  providers: [CommissionsService],
})
export class CommissionsModule {}
