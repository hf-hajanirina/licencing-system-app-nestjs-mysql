import { IsOptional, IsString } from 'class-validator';

// for using class validator, enable ValidationPipe in main app
// yarn add class-validator class-transformer

export class UserDto {
  @IsOptional()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  pwd: string;
}
