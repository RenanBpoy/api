import { IsOptional, IsString, Length, IsNumber } from 'class-validator';

export class ValidateDto {
  @IsOptional()
  @IsString()
  @Length(4, 4)
  password?: string;

  @IsOptional()
  @IsNumber()
  temperature?: number;
}
