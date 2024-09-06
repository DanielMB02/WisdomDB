import { forwardRef, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './entities/client.entity';
import { CommercialClient } from './entities/commercial-client.entity';
import { ConstructionClient } from './entities/construction-company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleModule } from 'src/sale/sale.module';
import { AdvancesModule } from 'src/advances/advances.module';
import { DiscountModule } from 'src/discount/discount.module';
import { ZoneModule } from 'src/zone/zone.module';
import { StoreModule } from 'src/store/store.module';
import { ReturnsModule } from 'src/returns/returns.module';
import { BillingsModule } from 'src/billings/billings.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client, CommercialClient, ConstructionClient]),
    forwardRef(() => SaleModule),
    forwardRef(() => AdvancesModule),
    forwardRef(() => DiscountModule),
    forwardRef(() => ZoneModule),
    forwardRef(() => StoreModule),
    forwardRef(() => ReturnsModule),
    forwardRef(() => BillingsModule),    
  ],
  exports: [TypeOrmModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
