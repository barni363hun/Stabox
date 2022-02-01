import { IsDateString } from 'class-validator';

export class exchangeDateDTO {
  @IsDateString()
  startDate: Date;
  @IsDateString()
  endDate: Date;
}
