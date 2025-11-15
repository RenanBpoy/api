import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ComponentsModule } from './components/components.module'
import { PrismaModule } from './prisma/prisma.module'
import { ReadingsModule } from './readings/readings.module'
import { AlertsModule } from './alerts/alerts.module'

@Module({
  imports: [ComponentsModule, PrismaModule, ReadingsModule, AlertsModule],
  providers: [AppService]
})
export class AppModule {}
