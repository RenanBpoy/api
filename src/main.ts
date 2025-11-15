import 'dotenv/config'

import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { apiReference } from '@scalar/nestjs-api-reference'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The IoT API description')
    .setVersion('1.0')
    .addTag('IoT')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)

  app.use(
    '/docs',
    apiReference({
      theme: 'kepler',
      content: documentFactory()
    })
  )

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
