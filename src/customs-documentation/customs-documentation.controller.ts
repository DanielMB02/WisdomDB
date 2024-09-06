import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomsDocumentationService } from './customs-documentation.service';
import { CreateCustomsDocumentationDto } from './dto/create-customs-documentation.dto';
import { UpdateCustomsDocumentationDto } from './dto/update-customs-documentation.dto';

@Controller('customs-documentation')
export class CustomsDocumentationController {
  constructor(private readonly customsDocumentationService: CustomsDocumentationService) {}

  @Post()
  create(@Body() createCustomsDocumentationDto: CreateCustomsDocumentationDto) {
    return this.customsDocumentationService.create(createCustomsDocumentationDto);
  }

  @Get()
  findAll() {
    return this.customsDocumentationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customsDocumentationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomsDocumentationDto: UpdateCustomsDocumentationDto) {
    return this.customsDocumentationService.update(+id, updateCustomsDocumentationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customsDocumentationService.remove(+id);
  }
}
