import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 정의하지 않은 값은 들어오지 못하게
      forbidNonWhitelisted: true, // 이 옵션은 whitelist와 함께 사용되며, DTO에 정의되지 않은 속성이 요청에 포함되어 있을 경우 예외를 발생시킵니다4. 즉, 허용되지 않은 속성이 있으면 요청 자체가 거부됩니다.
      transformOptions: {
        // 이 옵션은 들어오는 데이터를 자동으로 원하는 타입으로 변환합니다2. 예를 들어, 쿼리 파라미터로 문자열 "123"이 들어왔을 때 DTO에서 해당 필드가 number 타입으로 정의되어 있다면, 자동으로 숫자 123으로 변환됩니다.
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
