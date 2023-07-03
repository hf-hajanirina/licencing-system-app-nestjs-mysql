import { IsNotEmpty, MinLength } from 'class-validator';

// for using class validator, enable ValidationPipe in main app
// yarn add class-validator class-transformer

export class UpdateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  email: string;

  @MinLength(12)
  pwd: string;
}
