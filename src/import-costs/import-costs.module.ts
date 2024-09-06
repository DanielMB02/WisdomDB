import { forwardRef, Module } from '@nestjs/common';
import { ImportCostsService } from './import-costs.service';
import { ImportCostsController } from './import-costs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from 'src/purchase/purchase.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImportCostsModule]),
    forwardRef(() => PurchaseModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ImportCostsController],
  providers: [ImportCostsService],
})
export class ImportCostsModule {}
