import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TruckUnloadingModel } from '../model/TruckUnloadingModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class TruckUnloadingService {

    constructor(private http: HttpClient) { }
    private base_url = "http://localhost:35464/api/TruckUnloading";

    GetTruckUnloadingModels(): Observable<TruckUnloadingModel[]> {
        let abc: TruckUnloadingModel[] = [];
        const url = `${this.base_url}/GetTruckUnloadingModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SaveTruckUnloading(input: TruckUnloadingModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveTruckUnloading`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpdateTruckUnloading`;
            return this.http.post(url, input, httpOptions);
        }
    }

    DeleteTruckUnloading(id : number) : Observable<boolean>{
        let abc : TruckUnloadingModel[] = [];
        const url = `${this.base_url}/DeleteTruckUnloading?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetTruckUnloadingModel(id : number) : Observable<TruckUnloadingModel>{
        let abc : TruckUnloadingModel;
        const url = `${this.base_url}/GetTruckUnloadingModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

}