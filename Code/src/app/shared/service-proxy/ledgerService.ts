import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {LedgerModel} from '../model/LedgerModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LedgerService{
    private base_url = "http://localhost:35464/api/Ledger";
    constructor(private http:HttpClient) {}

    SaveLedger(input : LedgerModel) : Observable<any>{
     
        if(input.id == 0){
            const url = `${this.base_url}/SaveLedger`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateLedger`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetLedgerModels() : Observable<LedgerModel[]>{
        let abc : LedgerModel[] = [];
        const url = `${this.base_url}/GetLedgerModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteLedger(id : number) : Observable<boolean>{
        let abc : LedgerModel[] = [];
        const url = `${this.base_url}/DeleteLedger?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetLedgerModel(id : number) : Observable<LedgerModel>{
        let abc : LedgerModel;
        const url = `${this.base_url}/GetLedgerModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
    
}