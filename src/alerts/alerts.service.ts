import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateAlertDto } from './dto/create-alert.dto'
import { UpdateAlertDto } from './dto/update-alert.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AlertsService {
  constructor(private prisma: PrismaService) {}

  create(createAlertDto: CreateAlertDto) {
    return this.prisma.alert.create({
      data: createAlertDto
    })
  }

  findAll() {
    return this.prisma.alert.findMany()
  }

  async findOne(id: string) {
    const alert = await this.prisma.alert.findUnique({
      where: { id }
    })

    if (!alert) {
      throw new NotFoundException('Alert not found')
    }

    return alert
  }

  async update(id: string, updateAlertDto: UpdateAlertDto) {
    const alert = await this.prisma.alert.findUnique({
      where: { id }
    })

    if (!alert) {
      throw new NotFoundException('Alert not found')
    }

    return this.prisma.alert.update({
      where: { id },
      data: updateAlertDto,
      include: { component: true }
    })
  }

  async remove(id: string) {
    const alert = await this.prisma.alert.findUnique({
      where: { id }
    })

    if (!alert) {
      throw new NotFoundException('Alert not found')
    }

    return this.prisma.alert.delete({
      where: { id }
    })
  }
}
