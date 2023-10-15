import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize, QueryTypes } from 'sequelize'
import { createClient } from '@supabase/supabase-js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(3030);
}

bootstrap();
