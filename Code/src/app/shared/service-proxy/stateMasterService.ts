import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { StateModel } from "../model/StateModel";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StateMasterService{
    private base_url = "http://localhost:35464/api";
    constructor(private http:HttpClient) {}

    SaveStates(input : StateModel) : Observable<any>{
        if(input.id == 0 ){
            const url = `${this.base_url}/States/saveData`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/States/updateData`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetStates() : Observable<StateModel[]>{
        let abc : StateModel[] = [];
        const url = `${this.base_url}/States/getStates`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteState(id : number) : Observable<boolean>{
        let abc : StateModel[] = [];
        const url = `${this.base_url}/States/deleteState?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    getState(id : number) : Observable<StateModel>{
        let abc : StateModel;
        const url = `${this.base_url}/States/getState?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            debugger
            return abc = response;
        });
    }
}