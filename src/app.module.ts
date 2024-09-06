import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { ZoneModule } from './zone/zone.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { SaleModule } from './sale/sale.module';
import { PurchaseModule } from './purchase/purchase.module';
import { StoreModule } from './store/store.module';
import { BankModule } from './bank/bank.module';
import { ShipmentReceivementModule } from './shipment-receivement/shipment-receivement.module';
import { ImportCostsModule } from './import-costs/import-costs.module';
import { CustomsDocumentationModule } from './customs-documentation/customs-documentation.module';
import { PaymentProcessIntegrationModule } from './payment-process-integration/payment-process-integration.module';
import { CategoryModule } from './category/category.module';
import { DiscountModule } from './discount/discount.module';
import { AdvancesModule } from './advances/advances.module';
import { BillingsModule } from './billings/billings.module';
import { CommissionsModule } from './commissions/commissions.module';
import { ReturnsModule } from './returns/returns.module';

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
        database: 'WisdomDB',
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
