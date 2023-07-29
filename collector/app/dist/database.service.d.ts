import { Model } from 'mongoose';
import { Location } from './location.model';
export declare class DatabaseService {
    private readonly locationModel;
    constructor(locationModel: Model<Location>);
    addLocationRecord(date: string, lon: number, lat: number, type: string): Promise<Location>;
}
