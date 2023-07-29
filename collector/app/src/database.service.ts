import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location, LocationSchema } from './location.model';

@Injectable()
export class DatabaseService {

  constructor(@InjectModel('Location') private readonly locationModel: Model<Location>){};

	async addLocationRecord(date: string, lon: number, lat: number, type: string): Promise<Location>{
		const newLocation = new this.locationModel({
			date,
			lon,
			lat,
			type
		});

       	return newLocation.save();
	}
}

