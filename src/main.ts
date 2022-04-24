import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
  });
  await app.listen(3030);
}
bootstrap();
