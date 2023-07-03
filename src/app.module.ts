import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DeviceModule } from './device/device.module';
import { LicenseModule } from './license/license.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, DeviceModule, UserModule, LicenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
