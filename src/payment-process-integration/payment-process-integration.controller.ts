import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentProcessIntegrationService } from './payment-process-integration.service';
import { CreatePaymentProcessIntegrationDto } from './dto/create-payment-process-integration.dto';
import { UpdatePaymentProcessIntegrationDto } from './dto/update-payment-process-integration.dto';

@Controller('payment-process-integration')
export class PaymentProcessIntegrationController {
  constructor(private readonly paymentProcessIntegrationService: PaymentProcessIntegrationService) {}

  @Post()
  create(@Body() createPaymentProcessIntegrationDto: CreatePaymentProcessIntegrationDto) {
    return this.paymentProcessIntegrationService.create(createPaymentProcessIntegrationDto);
  }

  @Get()
  findAll() {
    return this.paymentProcessIntegrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentProcessIntegrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentProcessIntegrationDto: UpdatePaymentProcessIntegrationDto) {
    return this.paymentProcessIntegrationService.update(+id, updatePaymentProcessIntegrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentProcessIntegrationService.remove(+id);
  }
}
