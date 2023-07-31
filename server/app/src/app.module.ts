import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClusterModule } from './cluster/cluster.module';
import { SpottingModule } from './spotting/spotting.module';

@Module({
  imports: [ClusterModule, SpottingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
