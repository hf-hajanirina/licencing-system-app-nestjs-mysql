import { IsNotEmpty, IsString, MinLength } from 'class-validator';

// for using class validator, enable ValidationPipe in main app
// yarn add class-validator class-transformer

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(12)
  pwd: string;
}
