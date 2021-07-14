import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ObjectId } from 'mongodb';
import * as MUUID from 'uuid-mongodb';

import { IListModel } from './list.interfaces';

export class ListModel extends TimeStamps implements IListModel {
  @prop({
    type: String,
    default: (): string => MUUID.v4().toString(),
  })
  _id: ObjectId;

  @prop({ unique: true })
  name: string;

  @prop({ type: () => [String] })
  contacts?: Array<string>;
}
