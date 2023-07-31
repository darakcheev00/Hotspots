import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Spotting } from "./spotting.model";


@Injectable()
export class SpottingService{

    constructor(@InjectModel('Spotting') private readonly spottingModel: Model<Spotting>){};

    async getAllSpottings(){
        return await this.spottingModel.find().exec();
    }

    async getAllSpottingsByType(type:string){
        let query;
        if (type !== ''){
            query = {type: type}
        }
        return await this.spottingModel.find(query).exec();
    }

    async getSingleSpotting(id: string){
        return await this.findSpotting(id);
    }

    async getLocalSpottings(type: string, lon: number, lat: number){

    }

    // helper functions
    async findSpotting(id: string){
        let spotting;
        try{
            spotting = this.spottingModel.findById(id).exec();
        } catch (error){
            throw new NotFoundException(`spotting with id ${id} not found`);
        }

        if (!spotting){
            throw new NotFoundException('spotting is null');
        }
        return spotting;
    }



}