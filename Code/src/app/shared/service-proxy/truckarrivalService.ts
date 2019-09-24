import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TruckArrivalModel } from '../model/TruckArrivalModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class TruckArrivalService {

    constructor(private http: HttpClient) { }
    private base_url = "http://localhost:35464/api/TruckArrival";

    GetTruckArrivalModels(): Observable<TruckArrivalModel[]> {
        let abc: TruckArrivalModel[] = [];
        const url = `${this.base_url}/GetTruckArrivalModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SaveTruckArrival(input: TruckArrivalModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveTruckArrival`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpdateTruckArrival`;
            return this.http.post(url, input, httpOptions);
        }
    }

    DeleteTruckArrival(id : number) : Observable<boolean>{
        debugger
        let abc : TruckArrivalModel[] = [];
        const url = `${this.base_url}/DeleteTruckArrival?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetTruckArrivalModel(id : number) : Observable<TruckArrivalModel>{
        debugger
        let abc : TruckArrivalModel;
        const url = `${this.base_url}/GetTruckArrivalModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    // OnSeriesNo() : Observable<TruckArrivalModel>{
    //     debugger
    //     let abc : TruckArrivalModel;
    //     const url = `${this.base_url}/countno`;
    //     return this.http.post(url,httpOptions).pipe((response:any)=>{
    //         debugger
    //         return abc = response;
    //     });
    // }
}