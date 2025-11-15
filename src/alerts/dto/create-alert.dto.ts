import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateAlertDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '99efc3b2-3ea5-4e41-8343-d237238cf5f1',
    description: 'ID of the component'
  })
  componentId: string

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'temperature > 30',
    description: 'Condition to trigger the alert'
  })
  condition?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Temperature is above 30 degrees',
    description: 'Message to display when the alert is triggered'
  })
  message: string

  @ApiProperty({
    example: false,
    description: 'Whether the alert is resolved or not'
  })
  resolvedAt?: Date | null
}
