import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const port = process.env.PORT || 8001
  await app.listen(port);
}
bootstrap();


// App Config

// Middlewares

// DB Config

// API Endpoints

// Listener