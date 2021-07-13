import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactController } from './contact.controller';
import { ContactModel } from './contact.model';
import { ContactService } from './contact.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ContactModel,
        schemaOptions: {
          collection: 'Contact',
        },
      },
    ]),
  ],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
