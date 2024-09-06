import { forwardRef, Global, Module } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';
import { Zone } from './entities/zone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from 'src/client/client.module';
import { UsersModule } from 'src/users/users.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Zone]),
    forwardRef(() => ClientModule),
    forwardRef(() => UsersModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
