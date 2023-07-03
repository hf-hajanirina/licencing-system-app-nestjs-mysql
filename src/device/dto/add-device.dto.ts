import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { User } from 'src/user/user.entity';

// for using class validator, enable ValidationPipe in main app
// yarn add class-validator class-transformer

export class AddDeviceDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  deviceName: string;

  @IsString()
  deviceOs: string;

  @IsString()
  @IsNotEmpty()
  ipAddress: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsBoolean()
  isActive: boolean;

  @IsDate()
  lastConnection: Date;

  @IsString()
  @IsNotEmpty()
  User: User;
}
