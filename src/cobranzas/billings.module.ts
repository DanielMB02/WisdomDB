import { forwardRef, Module } from '@nestjs/common';
import { BillingsService } from './billings.service';
import { BillingsController } from './billings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from 'src/clientes/client.module';
import { NotasDeCobranza } from './entities/nota-de-cobranzas.entity';
import { EstadoDeCuentaDeCliente } from './entities/estado-de-cuenta-de-cliente.entity';
import { AjusteDeCobros } from './entities/ajuste-de-cobros.entity';
import { VentasPorTransferencia } from './entities/ventas-por-transferencia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NotasDeCobranza,
      EstadoDeCuentaDeCliente,
      AjusteDeCobros,
      VentasPorTransferencia,
    ]),
    forwardRef(() => ClientModule),
  ],
  exports: [TypeOrmModule],
  controllers: [BillingsController],
  providers: [BillingsService],
})
export class BillingsModule {}
