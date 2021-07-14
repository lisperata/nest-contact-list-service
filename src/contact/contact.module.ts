import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { ContactController } from './contact.controller';
import { ContactModel } from './contact.model';
import { ContactService } from './contact.service';

@Module({
  imports: [TypegooseModule.forFeature([ContactModel])],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
