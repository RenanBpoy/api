import { Injectable } from '@nestjs/common'
import { CreateReadingDto } from './dto/create-reading.dto'
import { UpdateReadingDto } from './dto/update-reading.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ReadingsService {
  constructor(private prisma: PrismaService) {}

  create(createReadingDto: CreateReadingDto) {
    return this.prisma.reading.create({ data: createReadingDto })
  }

  findAll() {
    return this.prisma.reading.findMany()
  }

  findOne(id: string) {
    return this.prisma.reading.findUnique({ where: { id } })
  }

  update(id: string, updateReadingDto: UpdateReadingDto) {
    return this.prisma.reading.update({
      where: { id },
      data: updateReadingDto
    })
  }

  remove(id: string) {
    return this.prisma.reading.delete({ where: { id } })
  }
}
