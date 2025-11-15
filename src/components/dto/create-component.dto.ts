import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateComponentDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Button',
    description: 'Name of the component'
  })
  name: string
}
