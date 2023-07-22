import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const isEnv = process.env.NODE_ENV === "development";
const path = isEnv ? join(__dirname, "../../", "frontend/build") : join(__dirname, "public");

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: path
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
