import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentType } from '@typegoose/typegoose/lib/types';
import { CONTACT_NOT_FOUND } from './contact.constants';
import { ContactModel } from './contact.model';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @UsePipes(new ValidationPipe)
  @Post()
  async addContact(
    @Body() dto: CreateContactDto,
  ): Promise<DocumentType<ContactModel>> {
    return this.contactService.create(dto);
  }

  @Get()
  async getAllContacts(): Promise<DocumentType<ContactModel>[]> {
    return this.contactService.getAll();
  }

  @Patch()
  async patchContact(
    @Body() dto: UpdateContactDto,
  ): Promise<DocumentType<ContactModel>> {
    const updatedDoc = await this.contactService.patch(dto);
    if (!updatedDoc) {
      throw new HttpException(CONTACT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return updatedDoc;
  }
}
