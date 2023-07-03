import { DATABASE_PROVIDER } from 'src/app.constant';
import { Device } from 'src/device/device.entity';
import { License } from 'src/license/license.entity';
import { User } from 'src/user/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER.DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nestjs-licencing-system-app',
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [Device, License, User],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
