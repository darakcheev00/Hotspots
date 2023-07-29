import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Collector } from './newRecordCollector.js';
import { DatabaseService } from './database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const databaseService = app.get(DatabaseService)

  const collector = new Collector(databaseService);
  await collector.collectRecords();

}
bootstrap();
