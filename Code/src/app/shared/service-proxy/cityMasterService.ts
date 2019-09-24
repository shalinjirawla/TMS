import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { CityModel } from "../model/CityModel";
import {BankMasterModel} from "../model/BankMasterModel";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CityMasterService{
    private base_url = "http://localhost:35464/api/City";
    constructor(private http:HttpClient) {}

    SaveCity(input : CityModel) : Observable<any>{
     
        if(input.id == 0){
            const url = `${this.base_url}/SaveCity`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateCity`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetCities() : Observable<CityModel[]>{
        let abc : CityModel[] = [];
        const url = `${this.base_url}/GetCities`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteCity(id : number) : Observable<boolean>{
        let abc : CityModel[] = [];
        const url = `${this.base_url}/DeleteCity?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetCity(id : number) : Observable<CityModel>{
        let abc : CityModel;
        const url = `${this.base_url}/GetCity?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
    GetStateWiseCity(id:number):Observable<CityModel[]>{
        let abc : CityModel[];
        const url = `${this.base_url}/GetStateWiseCity?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
    
}