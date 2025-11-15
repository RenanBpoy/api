import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsJSON } from 'class-validator'

export class CreateReadingDto {
  @IsString()
  @ApiProperty({
    example: '99efc3b2-3ea5-4e41-8343-d237238cf5f1',
    description: 'ID of the component'
  })
  componentId: string

  @IsString()
  @IsJSON()
  @ApiProperty({
    example: '{"temperature": 22.5, "humidity": 60}',
    description: 'JSON string containing the reading data'
  })
  data: string
}
