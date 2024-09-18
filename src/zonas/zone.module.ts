import { forwardRef, Global, Module } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from 'src/clientes/client.module';
import { UsersModule } from 'src/usuarios/users.module';
import { Zona } from './entities/zona.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Zona]),
    forwardRef(() => ClientModule),
    forwardRef(() => UsersModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
