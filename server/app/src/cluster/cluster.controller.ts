import { Controller, Get, Post, Param } from '@nestjs/common';
import { ClusterService } from './cluster.service';


@Controller('clusters')
export class ClusterController{

    constructor(private readonly clusterService: ClusterService){};

    @Get()
    async getAllClusters(){
        const clusters = await this.clusterService.getAllClusters();
        return clusters.map((clus)=>({
            id: clus.id,
            lon: clus.lon,
            lat: clus.lat,
            radius: clus.radius,
            type: clus.type
        }));
    }

    @Get(':id')
    async getSingleCluster(@Param('id') clusterId: string){
        return await this.clusterService.getSingleCluster(clusterId);
    }

    @Get(':type/:lon/:lat')
    async getLocalClusters(
        @Param('type') type: string,
        @Param('lon') lon: number,
        @Param('lat') lat: number
    ){
        // const clusters = await this.clusterService.getLocalClusters(type,lon,lat);
        // return clusters.map((clus)=>({
        //     id: clus.id,
        //     lon: clus.lon,
        //     lat: clus.lat,
        //     radius: clus.radius,
        //     type: clus.type
        // }));
    }


}