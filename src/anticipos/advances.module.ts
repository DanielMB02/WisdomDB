import { forwardRef, Module } from '@nestjs/common';
import { AdvancesService } from './advances.service';
import { AdvancesController } from './advances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleModule } from 'src/ventas/sale.module';
import { Anticipo } from './entities/anticipo.entity';
import { ControlDeAnticipo } from './entities/control-de-anticipo.entity';
import { CompensacionDeAnticipos } from './entities/compensacion-de-anticipo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Anticipo, ControlDeAnticipo, CompensacionDeAnticipos]),
    forwardRef(() => SaleModule),
  ],
  exports: [TypeOrmModule],
  controllers: [AdvancesController],
  providers: [AdvancesService],
})
export class AdvancesModule {}
