import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { SpottingController } from './spotting.controller';
import { SpottingService } from './spotting.service';

@Module({
    imports: [MongooseModule.forFeature([{ name:'Spotting', schema: SpottingSchema}])],
    controllers: [SpottingController],
    providers: [SpottingService]
})
export class SpottingModule{}