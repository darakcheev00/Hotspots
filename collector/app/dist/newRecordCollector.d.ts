import { DatabaseService } from './database.service';
export declare class Collector {
    private readonly databaseService;
    p1: number[];
    p2: number[];
    apiURL: string;
    constructor(databaseService: DatabaseService);
    makeURL(): string;
    callAPI(): Promise<any>;
    collectRecords(): Promise<void>;
    convertUnixTimestampToISO(timestamp: any): string;
}
