import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      //도커 컨테이너 이름이랑 같아야함
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      /**
       * 엔티티 기반 동기화
       * 프로덕션에서는 사용 하지 않아야함
       * 무조건 마이그 파일 만들어서 해야함
       */
      synchronize: true,
      entities: [Product],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
