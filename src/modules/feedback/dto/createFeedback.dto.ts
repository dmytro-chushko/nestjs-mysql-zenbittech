import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
