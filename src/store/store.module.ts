import { forwardRef, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store } from './entities/store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { ClientModule } from 'src/client/client.module';
import { UsersModule } from 'src/users/users.module';
import { PurchaseModule } from 'src/purchase/purchase.module';
import { StoreTransference } from './entities/store-transference.entity';
import { ProductMovement } from './entities/product-movement.entity';
import { Inventory } from './entities/inventory.entity';
import { InventoryAdjustment } from './entities/inventory-adjustments.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Store,
      StoreTransference,
      ProductMovement,
      Inventory,
      InventoryAdjustment,
    ]),
    forwardRef(() => ProductModule),
    forwardRef(() => ClientModule),
    forwardRef(() => UsersModule),
    forwardRef(() => PurchaseModule),
  ],
  exports: [TypeOrmModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
