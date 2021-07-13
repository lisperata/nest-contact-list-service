import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AddContactToListDto } from './dto/add-contact-to-list.dto';
import { CreateListDto } from './dto/create-list.dto';
import { ListModel } from './list.model';

@Injectable()
export class ListService {
  public constructor(
    @InjectModel(ListModel)
    private readonly listModel: ModelType<ListModel>,
  ) {}

  public async create(dto: CreateListDto): Promise<DocumentType<ListModel>> {
    return this.listModel.create(dto);
  }

  public async getContactsByListId(
    id: string,
  ): Promise<Array<DocumentType<ListModel>>> {
    return this.listModel.find({ _id: id }).select('contacts');
  }

  public async getAll(): Promise<Array<DocumentType<ListModel>>> {
    return this.listModel.find();
  }

  public async addContactToList(
    dto: AddContactToListDto,
  ): Promise<DocumentType<ListModel> | null> {
    const { listId, contactId } = dto;

    return this.listModel.findByIdAndUpdate(
      { _id: listId },
      {
        $addToSet: { contacts: contactId },
      },
      { new: true, useFindAndModify: false },
    );
  }
}
