import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class userDto {
  @IsEmail()
  email: string;
  @IsString()
  username: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsPhoneNumber()
  phoneNumber: string;
}
