import { forwardRef, Module } from '@nestjs/common';
import { CustomsDocumentationService } from './customs-documentation.service';
import { CustomsDocumentationController } from './customs-documentation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomsDocumentation } from './entities/customs-documentation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomsDocumentation]),
  ],
  exports: [TypeOrmModule],
  controllers: [CustomsDocumentationController],
  providers: [CustomsDocumentationService],
})
export class CustomsDocumentationModule {}
