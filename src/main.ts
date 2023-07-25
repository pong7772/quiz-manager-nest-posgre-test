import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this will remove any properties that are not in the DTO
      forbidNonWhitelisted: true, // this will throw an error if a property that is not in the DTO is sent
      transform: true, // this will transform the data to the correct type (e.g. string to number)
    }),
  );
  await app.listen(3000);
}
bootstrap();
