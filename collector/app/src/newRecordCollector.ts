import fetch from 'node-fetch';
import { json } from 'stream/consumers';
import { DatabaseService } from './database.service';

export class Collector{
    // p1 = [42.74681380133014, -81.70967190860165];
    p1 = [43.60778659122188, -79.51367187484132];
    // p2 = [44.71663527579326, -78.93324717924067];
    p2 = [43.75878627555936, -79.28734480483129];

    apiURL: string;

    constructor (private readonly databaseService: DatabaseService){
        this.apiURL = this.makeURL();
    };

    makeURL(){
        const baseURL = "https://www.waze.com/rtserver/web/TGeoRSS";
        const queryParams = {
            bottom: this.p1[0].toString(),
            left: this.p1[1].toString(),
            top: this.p2[0].toString(),
            right: this.p2[1].toString(),
        }
        const params = new URLSearchParams(queryParams).toString();

        const completeURL = `${baseURL}?${params}`;
        console.log("completeURL: ", completeURL);
        return completeURL;

    }

    async callAPI(){
        console.log("Calling Waze API");

        const headers = {
            "referer": "https://www.waze.com/livemap",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
        }

        try {
            const response = await fetch(this.apiURL, {
                    method: 'GET',
                    headers: headers,
                }
            );

            if (!response){
                throw new Error("Reponse not received. (null)");
            }

            const jsonData = await response.json();
            return jsonData;
            
        }catch (error){
            console.error("Error calling the API. ", error);
        }    

    }

    async collectRecords() {

        const timePresentMap = new Map();
        let count = 0;
        
        while(true){
            console.log(`Iteration #${++count} ==================================`);

            const data = await this.callAPI();
            const alerts = data['alerts'];

            const policeLocations = alerts.filter(x => x.type === 'POLICE'); 
            console.log(`Alerts: ${alerts.length}, Police sightings: ${policeLocations.length}`);
            // console.log(policeLocations)

            for (const alert of policeLocations){
                const id = alert.uuid;
                // console.log(`${alert.pubMillis}, ${id}`);
                if (id in timePresentMap){
                    timePresentMap[id] += 1;
                }else{
                    timePresentMap[id] = 1;

                    const date = this.convertUnixTimestampToISO(alert['pubMillis']);
                    const location = alert['location'];
                    const type = "police";
                   
                    console.log(date, location.x, location.y);
                    
                    // add location record to database
                    const res = await this.databaseService.addLocationRecord(date, location.x, location.y, type);
                    console.log(res);
                }

            }

            console.log(timePresentMap);

            await (() => new Promise(resolve => setTimeout(resolve,60000)))();

            //TODO: clear map every hour
        }
    }
    
    convertUnixTimestampToISO(timestamp){
        const date = new Date(timestamp);
        return date.toISOString();
    }

}
