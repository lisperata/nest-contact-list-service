import { IsUUID } from 'class-validator';

export class FindContactsOfList {
  @IsUUID()
  listId: string;
}
