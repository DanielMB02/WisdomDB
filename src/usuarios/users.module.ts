import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleModule } from 'src/ventas/sale.module';
import { StoreModule } from 'src/almacenes/store.module';
import { ZoneModule } from 'src/zonas/zone.module';
import { CommissionsModule } from 'src/comisiones/commissions.module';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    forwardRef(() => SaleModule),
    forwardRef(() => StoreModule),
    forwardRef(() => ZoneModule),
    forwardRef(() => CommissionsModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
