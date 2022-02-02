import { IsString, IsEmail } from 'class-validator';

export class userMinDto {
  @IsEmail()
  email: string;
  @IsString()
  username: string;
}
