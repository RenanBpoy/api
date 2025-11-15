import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { AlertsService } from './alerts.service'
import { CreateAlertDto } from './dto/create-alert.dto'
import { UpdateAlertDto } from './dto/update-alert.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Alerts')
@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Post()
  @ApiOperation({ summary: 'Create' })
  create(@Body() createAlertDto: CreateAlertDto) {
    return this.alertsService.create(createAlertDto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all' })
  findAll() {
    return this.alertsService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  findOne(@Param('id') id: string) {
    return this.alertsService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update by id' })
  update(@Param('id') id: string, @Body() updateAlertDto: UpdateAlertDto) {
    return this.alertsService.update(id, updateAlertDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete by id' })
  remove(@Param('id') id: string) {
    return this.alertsService.remove(id)
  }
}
