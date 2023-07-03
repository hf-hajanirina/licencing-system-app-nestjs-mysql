import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { DatabaseModule } from 'src/database/database.module';
import { deviceProviders } from './device.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [DeviceController],
  providers: [DeviceService, ...deviceProviders],
})
export class DeviceModule {}
