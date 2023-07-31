import * as mongoose from 'mongoose';

export const ClusterSchema = new mongoose.Schema({
    lon: {type: Number, require: true},
    lat: {type: Number, require: true},
    radius: {type: Number, require: true},
    type: {type: String, require: true},
});

export interface Cluster extends mongoose.Document{
    id: string,
    lon: number,
    lat: number,
    radius: number,
    type: string
};