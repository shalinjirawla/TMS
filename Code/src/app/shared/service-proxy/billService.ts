import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {BillModel} from '../model/BillModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BillService{
    private base_url = "http://localhost:35464/api/Bill";
    constructor(private http:HttpClient) {}

    SaveBill(input : BillModel) : Observable<any>{
     
        if(input.id == 0){
            const url = `${this.base_url}/SaveBill`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateBill`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetBillModels() : Observable<BillModel[]>{
        let abc : BillModel[] = [];
        const url = `${this.base_url}/GetBillModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteBill(id : number) : Observable<boolean>{
        let abc : BillModel[] = [];
        const url = `${this.base_url}/DeleteBill?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetBillRepo(id : number) : Observable<BillModel>{
        let abc : BillModel;
        const url = `${this.base_url}/GetBillRepo?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
    // GetStateWiseCity(id:number):Observable<CityModel[]>{
    //     let abc : CityModel[];
    //     const url = `${this.base_url}/GetStateWiseCity?id=${id}`;
    //     return this.http.get(url,httpOptions).pipe((response:any)=>{
    //         return abc = response;
    //     });
    // }
    
}