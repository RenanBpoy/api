import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateComponentDto } from './dto/create-component.dto'
import { UpdateComponentDto } from './dto/update-component.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ComponentsService {
  constructor(private prisma: PrismaService) {}

  async create(createComponentDto: CreateComponentDto) {
    return this.prisma.component.create({
      data: createComponentDto
    })
  }

  findAll() {
    return this.prisma.component.findMany({
      include: { readings: true }
    })
  }

  async findOne(id: string) {
    const component = await this.prisma.component.findUnique({
      where: { id },
      include: { readings: true }
    })

    if (!component) {
      throw new NotFoundException('Component not found')
    }

    return component
  }

  async update(id: string, updateComponentDto: UpdateComponentDto) {
    const component = await this.prisma.component.findUnique({
      where: { id }
    })

    if (!component) {
      throw new NotFoundException('Component not found')
    }

    return this.prisma.component.update({
      where: { id },
      data: updateComponentDto,
      include: { readings: true }
    })
  }

  async remove(id: string) {
    const component = await this.prisma.component.findUnique({
      where: { id }
    })

    if (!component) {
      throw new NotFoundException('Component not found')
    }

    return this.prisma.component.delete({
      where: { id }
    })
  }
}
