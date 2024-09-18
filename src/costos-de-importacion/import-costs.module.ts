import { forwardRef, Module } from '@nestjs/common';
import { ImportCostsService } from './import-costs.service';
import { ImportCostsController } from './import-costs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from 'src/compras/purchase.module';
import { CostosDeImportacion } from './entities/costos-de-importacion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CostosDeImportacion]),
    forwardRef(() => PurchaseModule),
  ],
  exports: [TypeOrmModule],
  controllers: [ImportCostsController],
  providers: [ImportCostsService],
})
export class ImportCostsModule {}
