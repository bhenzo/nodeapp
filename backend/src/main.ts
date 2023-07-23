import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const isDev = process.env.NODE_ENV?.trim() == "dev";
const port = isDev ? 3007 : 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  console.log(`NestJS Port: ${port}`)
  await app.listen(port);
}
bootstrap();
