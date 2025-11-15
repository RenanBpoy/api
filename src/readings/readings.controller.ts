import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ReadingsService } from './readings.service'
import { CreateReadingDto } from './dto/create-reading.dto'
import { UpdateReadingDto } from './dto/update-reading.dto'

@ApiTags('Readings')
@Controller('readings')
export class ReadingsController {
  constructor(private readonly readingsService: ReadingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create' })
  create(@Body() createReadingDto: CreateReadingDto) {
    return this.readingsService.create(createReadingDto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all' })
  findAll() {
    return this.readingsService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  findOne(@Param('id') id: string) {
    return this.readingsService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update by id' })
  update(@Param('id') id: string, @Body() updateReadingDto: UpdateReadingDto) {
    return this.readingsService.update(id, updateReadingDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete by id' })
  remove(@Param('id') id: string) {
    return this.readingsService.remove(id)
  }
}
