import { DataSource } from 'typeorm';
import { DATABASE_PROVIDER } from 'src/app.constant';
import { License } from './license.entity';

export const licenseProviders = [
  {
    provide: DATABASE_PROVIDER.LICENSE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(License),
    inject: [DATABASE_PROVIDER.DATA_SOURCE],
  },
];
