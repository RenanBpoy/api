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
import { ComponentsService } from './components.service'
import { CreateComponentDto } from './dto/create-component.dto'
import { UpdateComponentDto } from './dto/update-component.dto'

@ApiTags('Components')
@Controller('components')
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create' })
  create(@Body() createComponentDto: CreateComponentDto) {
    return this.componentsService.create(createComponentDto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all' })
  findAll() {
    return this.componentsService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  findOne(@Param('id') id: string) {
    return this.componentsService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update by id' })
  update(
    @Param('id') id: string,
    @Body() updateComponentDto: UpdateComponentDto
  ) {
    return this.componentsService.update(id, updateComponentDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete by id' })
  remove(@Param('id') id: string) {
    return this.componentsService.remove(id)
  }
}
