import { Controller, Get, Param } from '@nestjs/common';
import { SpottingService } from './spotting.service';

@Controller('spotting')
export class SpottingController{

    constructor(private readonly spottingService: SpottingService){};

    @Get()
    async getAllSpottings(){
        const spottings = await this.spottingService.getAllSpottings();
        return spottings.map((s)=>({
                id:s.id,
                date: s.date,
                lon: s.lon,
                lat: s.lat,
                type: s.type            
        }));
    
    }

    @Get(':type')
    async getAllSpottingsByType(@Param('type') type:string){
        const spottings = await this.spottingService.getAllSpottingsByType(type);
        return spottings.map((s)=>({
                id:s.id,
                date: s.date,
                lon: s.lon,
                lat: s.lat,
                type: s.type            
        }));
    }


    @Get(':id')
    async getSingleSpotting(@Param('id') id: string){
        return await this.spottingService.getSingleSpotting(id);
    }

    
    @Get(':type/:lon/:lat')
    async getLocalSpottings(
        @Param('type') type: string,
        @Param('lon') lon: number,
        @Param('lat') lat: number
    ){
        // const spottings = await this.spottingService.getLocalSpottings(type,lon,lat);
        // return spottings.map((s)=>({
        //         id:s.id,
        //         date: s.date,
        //         lon: s.lon,
        //         lat: s.lat,
        //         type: s.type            
        // }));
    }


}