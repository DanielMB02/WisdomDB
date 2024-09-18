import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentProcessIntegrationDto } from './create-payment-process-integration.dto';

export class UpdatePaymentProcessIntegrationDto extends PartialType(CreatePaymentProcessIntegrationDto) {}
