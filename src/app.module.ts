import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './usuarios/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './clientes/client.module';
import { ZoneModule } from './zonas/zone.module';
import { ProductModule } from './productos/product.module';
import { SupplierModule } from './proveedores/supplier.module';
import { SaleModule } from './ventas/sale.module';
import { PurchaseModule } from './compras/purchase.module';
import { StoreModule } from './almacenes/store.module';
import { BankModule } from './bancos/bank.module';
import { ShipmentReceivementModule } from './envios-recepciones/shipment-receivement.module';
import { ImportCostsModule } from './costos-de-importacion/import-costs.module';
import { CustomsDocumentationModule } from './documentacion-aduanera/customs-documentation.module';
import { PaymentProcessIntegrationModule } from './proceso-de-pagos-y-contabilidad/payment-process-integration.module';
import { CategoryModule } from './categorias/category.module';
import { DiscountModule } from './descuentos/discount.module';
import { AdvancesModule } from './anticipos/advances.module';
import { BillingsModule } from './cobranzas/billings.module';
import { CommissionsModule } from './comisiones/commissions.module';
import { ReturnsModule } from './devoluciones/returns.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'WisdomBD',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true
      }),
    UsersModule,
    ClientModule,
    ZoneModule,
    ProductModule,
    SupplierModule,
    SaleModule,
    PurchaseModule,
    StoreModule,
    BankModule,
    ShipmentReceivementModule,
    ImportCostsModule,
    CustomsDocumentationModule,
    PaymentProcessIntegrationModule,
    CategoryModule,
    DiscountModule,
    AdvancesModule,
    BillingsModule,
    ReturnsModule,
    CommissionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
