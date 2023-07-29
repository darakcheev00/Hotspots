import * as mongoose from 'mongoose';
export declare const LocationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    date: string;
    type: string;
    lon: number;
    lat: number;
}, mongoose.Document<unknown, {}, {
    date: string;
    type: string;
    lon: number;
    lat: number;
}> & {
    date: string;
    type: string;
    lon: number;
    lat: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Location extends mongoose.Document {
    id: string;
    date: string;
    lon: number;
    lat: number;
    type: string;
}
