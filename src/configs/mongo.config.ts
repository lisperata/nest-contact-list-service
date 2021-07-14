import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  const LOGIN = configService.get('MONGO_LOGIN');
  const PASSWORD = configService.get('MONGO_PASSWORD');
  const HOST = configService.get('MONGO_HOST');
  const PORT = configService.get('MONGO_PORT');
  const AUTH_DB = configService.get('MONGO_AUTHDB');

  return `mongodb://${LOGIN}:${PASSWORD}@${HOST}:${PORT}/${AUTH_DB}`;
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
