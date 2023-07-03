import { DataSource } from 'typeorm';
import { DATABASE_PROVIDER } from 'src/app.constant';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: DATABASE_PROVIDER.USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATABASE_PROVIDER.DATA_SOURCE],
  },
];
