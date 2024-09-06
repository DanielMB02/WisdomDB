import { forwardRef, Global, Module } from '@nestjs/common';
import { ReturnsService } from './returns.service';
import { ReturnsController } from './returns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnEntity } from './entities/return.entity';
import { ClientModule } from 'src/client/client.module';
import { ProductModule } from 'src/product/product.module';
import { Product } from 'src/product/entities/product.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([ReturnEntity]),
    forwardRef(() => ClientModule),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ReturnsController],
  providers: [ReturnsService],
})
export class ReturnsModule {}
