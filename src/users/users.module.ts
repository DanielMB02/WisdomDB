import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SaleModule } from 'src/sale/sale.module';
import { StoreModule } from 'src/store/store.module';
import { ZoneModule } from 'src/zone/zone.module';
import { CommissionsModule } from 'src/commissions/commissions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
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
