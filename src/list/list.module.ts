import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ListModel } from './list.model';
import { ListService } from './list.service';
import { ListController } from './list.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ListModel,
        schemaOptions: {
          collection: 'List',
        },
      },
    ]),
  ],
  providers: [ListService],
  controllers: [ListController],
})
export class ListModule {}
