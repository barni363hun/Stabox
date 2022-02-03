import { IsString, IsPhoneNumber, IsNotEmpty } from 'class-validator';

export class userUpdateDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;
}
