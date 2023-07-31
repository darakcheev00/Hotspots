import * as mongoose from 'mongoose';

export const SpottingSchema = new mongoose.Schema({
    date: {type: String, required: true},
    lon: {type: Number, required: true},
    lat: {type: Number, required: true},
    type: {type: String, required: true},
});


export interface Spotting extends mongoose.Document{
    id: string,
    date: string,
    lon: number,
    lat: number,
    type: string
}


