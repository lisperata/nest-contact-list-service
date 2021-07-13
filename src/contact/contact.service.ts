import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { NewContactInPatchType } from './contact.interfaces';
import { ContactModel } from './contact.model';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  public constructor(
    @InjectModel(ContactModel)
    private readonly contactModel: ModelType<ContactModel>,
  ) {}

  public async create(
    dto: CreateContactDto,
  ): Promise<DocumentType<ContactModel>> {
    return this.contactModel.create(dto);
  }

  public async getAll(): Promise<Array<DocumentType<ContactModel>>> {
    return this.contactModel.find();
  }

  public async patch(
    dto: UpdateContactDto,
  ): Promise<DocumentType<ContactModel> | null> {
    const { _id, name, email } = dto;

    const newContact: NewContactInPatchType = {};
    name ? (newContact.name = name) : '';
    email ? (newContact.email = email) : '';

    return this.contactModel
      .findOneAndUpdate(
        { _id },
        { $set: { ...newContact } },
        { new: true, useFindAndModify: false },
      )
      .exec();
  }
}
