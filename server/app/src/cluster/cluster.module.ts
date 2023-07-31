import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClusterController } from './cluster.controller';
import { ClusterService } from './cluster.service';
import { ClusterSchema } from './cluster.model';

@Module({
    imports:[MongooseModule.forFeature([{name: 'Cluster', schema: ClusterSchema}])],
    controllers:[ClusterController],
    providers:[ClusterService]
})
export class ClusterModule{};