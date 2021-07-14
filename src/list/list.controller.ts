import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { DocumentType } from '@typegoose/typegoose/lib/types';

import { ListService } from './list.service';
import { ListModel } from './list.model';
import { AddContactToListDto } from './dto/add-contact-to-list.dto';
import { FindContactsOfList } from './dto/find-contacts-of-list.dto';
import { LIST_NOT_FOUND } from './list.constant';

@Controller()
export class ListController {
  constructor(private readonly listService: ListService) {}
  @Post('list')
  async addList(@Body() dto: CreateListDto): Promise<DocumentType<ListModel>> {
    return this.listService.create(dto);
  }

  @Get('lists')
  async getAllLists(): Promise<DocumentType<ListModel>[]> {
    return this.listService.getAll();
  }

  @HttpCode(200)
  @Post('lists')
  async getContactsByList(
    @Body() dto: FindContactsOfList,
  ): Promise<DocumentType<ListModel>[]> {
    const { listId } = dto;
    return this.listService.getContactsByListId(listId);
  }

  @Patch('list')
  async patchContact(
    @Body() dto: AddContactToListDto,
  ): Promise<DocumentType<ListModel>> {
    const contact = await this.listService.addContactToList(dto);
    if (!contact) {
      throw new HttpException(LIST_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return contact;
  }
}
