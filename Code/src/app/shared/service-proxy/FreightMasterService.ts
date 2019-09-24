import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {FreightModel} from '../model/FreightModel';

const httpOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class freightMasterService{
    private base_url="http://localhost:35464/api/Freight";
    constructor(private http:HttpClient){}

    SaveFreight(input : FreightModel) :  Observable<any>{
        if(input.id==0){
            const url= `${this.base_url}/SaveFreight`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateFreight`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetFreights():Observable<FreightModel[]>{
        let abc:FreightModel[]=[];
        const url=`${this.base_url}/GetFreights`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    DeleteFreight(id:number) : Observable<boolean>{
        debugger
        let abc:FreightModel[]=[];
        const url=`${this.base_url}/DeleteFreight?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetFreight(id:number):Observable<FreightModel>{
        let abc:FreightModel;
        const url=`${this.base_url}/GetFreight?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc= Response;
        });
    }
}