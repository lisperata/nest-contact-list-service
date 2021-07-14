import { IsString, IsUUID } from 'class-validator';

export class UpdateContactDto {
  @IsUUID()
  _id: string;

  @IsString()
  name?: string;

  @IsString()
  email?: string;
}
