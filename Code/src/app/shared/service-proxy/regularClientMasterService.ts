import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { RegularClientModel } from "../model/RegularClientModel";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegularClientMasterService{
    private base_url = "http://localhost:35464/api/RegularClient";
    constructor(private http:HttpClient) {}

    SaveRegularClient(input : RegularClientModel) : Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SaveRegularClient`;
            return this.http.post(url,input,httpOptions);
        }else{
            debugger
            const url = `${this.base_url}/UpdateRegularClient`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetRegularClients() : Observable<RegularClientModel[]>{
        let abc : RegularClientModel[] = [];
        const url = `${this.base_url}/GetRegularClients`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteRegularClient(id : number) : Observable<boolean>{
        let abc : RegularClientModel[] = [];
        const url = `${this.base_url}/DeleteRegularClient?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetRegularClient(id : number) : Observable<RegularClientModel>{
        let abc : RegularClientModel;
        const url = `${this.base_url}/GetRegularClient?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
    Getcliencode(name:string):Observable<any>{
        var clientcode:any;
        const url=`${this.base_url}/GetClientcodeDetails?name=${name}`;
        return this.http.get(url,httpOptions).pipe((responce:any)=>{
            return clientcode=responce;
        })
    }
}