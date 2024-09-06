import { forwardRef, Module } from '@nestjs/common';
import { CommissionsService } from './commissions.service';
import { CommissionsController } from './commissions.controller';
import { CommissionAssignment } from './entities/commission.entity';
import { ProductCommission } from './entities/product-commision.entity';
import { SalesTarget } from './entities/sales-target.entity';
import { UserCommission } from './entities/user-commission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CommissionAssignment,
      ProductCommission,
      SalesTarget,
      UserCommission,
    ]),
    forwardRef(() => UsersModule),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule],
  controllers: [CommissionsController],
  providers: [CommissionsService],
})
export class CommissionsModule {}
