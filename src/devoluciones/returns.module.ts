import { forwardRef, Global, Module } from '@nestjs/common';
import { ReturnsService } from './returns.service';
import { ReturnsController } from './returns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from 'src/clientes/client.module';
import { ProductModule } from 'src/productos/product.module';
import { Devolucion } from './entities/devolucion.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Devolucion]),
    forwardRef(() => ClientModule),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ReturnsController],
  providers: [ReturnsService],
})
export class ReturnsModule {}
