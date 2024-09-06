import { Injectable } from '@nestjs/common';
import { CreateCustomsDocumentationDto } from './dto/create-customs-documentation.dto';
import { UpdateCustomsDocumentationDto } from './dto/update-customs-documentation.dto';

@Injectable()
export class CustomsDocumentationService {
  create(createCustomsDocumentationDto: CreateCustomsDocumentationDto) {
    return 'This action adds a new customsDocumentation';
  }

  findAll() {
    return `This action returns all customsDocumentation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customsDocumentation`;
  }

  update(id: number, updateCustomsDocumentationDto: UpdateCustomsDocumentationDto) {
    return `This action updates a #${id} customsDocumentation`;
  }

  remove(id: number) {
    return `This action removes a #${id} customsDocumentation`;
  }
}
