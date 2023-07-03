import { DataSource } from 'typeorm';
import { DATABASE_PROVIDER } from 'src/app.constant';
import { Device } from './device.entity';

export const deviceProviders = [
  {
    provide: DATABASE_PROVIDER.DEVICE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Device),
    inject: [DATABASE_PROVIDER.DATA_SOURCE],
  },
];
