import { Injectable } from '@nestjs/common';
import { CreatePaymentProcessIntegrationDto } from './dto/create-payment-process-integration.dto';
import { UpdatePaymentProcessIntegrationDto } from './dto/update-payment-process-integration.dto';

@Injectable()
export class PaymentProcessIntegrationService {
  create(createPaymentProcessIntegrationDto: CreatePaymentProcessIntegrationDto) {
    return 'This action adds a new paymentProcessIntegration';
  }

  findAll() {
    return `This action returns all paymentProcessIntegration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentProcessIntegration`;
  }

  update(id: number, updatePaymentProcessIntegrationDto: UpdatePaymentProcessIntegrationDto) {
    return `This action updates a #${id} paymentProcessIntegration`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentProcessIntegration`;
  }
}
