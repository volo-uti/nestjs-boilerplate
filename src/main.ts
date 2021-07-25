import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as requestIp from 'request-ip';
import { AppModule } from './app.module';

/**
 * Nest App 생성
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Client IP 파싱을 위한 미들웨어 설정
  app.use(requestIp.mw());

  // Swagger 설정
  const options = new DocumentBuilder()
    .setTitle('Acelo Edge API Service')
    .setDescription('Api API')
    .setVersion('1.0.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // Google App Engine 에서 기본 8080 을 바라봄
  await app.listen(8080);
}
bootstrap();
