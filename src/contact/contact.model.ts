import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId } from 'mongodb';
import * as MUUID from 'uuid-mongodb';

import { IContactModel, MessageType } from './contact.interfaces';

export class ContactModel extends TimeStamps implements IContactModel {
  @prop({
    type: String,
    default: (): string => MUUID.v4().toString(),
  })
  _id: ObjectId;

  @prop()
  name: string;

  @prop()
  email: string;

  @prop({ type: () => [MessageType] })
  messages?: Array<MessageType>;
}
