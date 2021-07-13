import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId } from 'mongodb';

export interface IContactModel {
  _id: ObjectId;
  name: string;
  email: string;
}

export interface IList {
  uuid: ObjectId;
  name: string;
}

export type NewContactInPatchType = {
  name?: string;
  email?: string;
};

export class MessageType {
  title: string;
  text: string;
}
