import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cluster } from './cluster.model';

@Injectable()
export class ClusterService{

    constructor(@InjectModel('Cluster') private readonly clusterModel: Model<Cluster>){};


    async getAllClusters(){
        return await this.clusterModel.find().exec();
    }

    async getSingleCluster(id: string){
        const cluster = await this.findCluster(id);
        return {
            id: cluster.id,
            lon: cluster.lon,
            lat: cluster.lat,
            radius: cluster.radius,
            type: cluster.type
        }
    }
    
    // helper functions
    async findCluster(id:string){
        let cluster;
        try{
            cluster = await this.clusterModel.findById(id).exec();
        } catch (error){
            throw new NotFoundException(`cluster with id: ${id} not found`);
        }
        
        if (!cluster){
            throw new NotFoundException('cluster is null');
        }   
        return cluster;
    }


    //TODO: find clusters within range
    async getLocalClusters(type: string, lon: number, lat: number){
        

    }
}