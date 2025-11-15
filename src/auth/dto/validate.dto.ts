import { IsString, Length } from 'class-validator';

export class ValidateDto {
  @IsString()
  @Length(4, 4)
  password: string;
}
