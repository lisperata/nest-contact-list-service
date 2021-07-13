import { ObjectId } from 'mongodb';

export interface IListModel  {
  _id: ObjectId;
  name: string;
}
