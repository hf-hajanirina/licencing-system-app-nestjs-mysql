import { Module } from '@nestjs/common';
import { LicenseController } from './license.controller';
import { LicenseService } from './license.service';
import { DatabaseModule } from 'src/database/database.module';
import { licenseProviders } from './license.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [LicenseController],
  providers: [LicenseService, ...licenseProviders],
})
export class LicenseModule {}
