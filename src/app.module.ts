import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMongoConfig } from './configs/mongo.config';
import { ContactModule } from './contact/contact.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [ConfigModule.forRoot(), 
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }), ContactModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
