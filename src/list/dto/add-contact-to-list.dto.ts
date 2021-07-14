import { IsUUID } from 'class-validator';

export class AddContactToListDto {
  @IsUUID()
  contactId: string;
  
  @IsUUID()
  listId: string;
}
