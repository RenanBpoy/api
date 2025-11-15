import { IsNumber } from 'class-validator';

export class ValidateTemperatureDto {
  @IsNumber()
  value: number;
}
