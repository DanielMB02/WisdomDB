import { forwardRef, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleModule } from 'src/ventas/sale.module';
import { AdvancesModule } from 'src/anticipos/advances.module';
import { DiscountModule } from 'src/descuentos/discount.module';
import { ZoneModule } from 'src/zonas/zone.module';
import { StoreModule } from 'src/almacenes/store.module';
import { ReturnsModule } from 'src/devoluciones/returns.module';
import { BillingsModule } from 'src/cobranzas/billings.module';
import { ClienteFinal } from './entities/cliente-final.entity';
import { Cliente } from './entities/cliente.entity';
import { ClienteComercial } from './entities/cliente-comercial.entity';
import { ClienteConstructora } from './entities/cliente-constructora.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente, ClienteComercial, ClienteConstructora, ClienteFinal]),
    forwardRef(() => SaleModule),
    forwardRef(() => AdvancesModule),
    forwardRef(() => DiscountModule),
    forwardRef(() => ZoneModule),
    forwardRef(() => StoreModule),
    forwardRef(() => ReturnsModule),
    forwardRef(() => BillingsModule)
  ],
  exports: [TypeOrmModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
