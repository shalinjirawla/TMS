import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
// import {FreightModel} from '../model/FreightModel';
import { serviceLocationModel } from '../model/ServiceLocationModel';

const httpOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ServiceLocationMaster{
    private base_url="http://localhost:35464/api/ServiceLocation";
    constructor(private http:HttpClient){}

    SaveServiceLocation(input : serviceLocationModel) :  Observable<any>{
        if(input.Id==0){
            const url= `${this.base_url}/SaveServiceLocation`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateServiceLocation`;
            return this.http.post(url,input,httpOptions);
        }
    }
    GetServiceLocations():Observable<serviceLocationModel[]>{
        let abc:serviceLocationModel[]=[];
        const url=`${this.base_url}/GetServiceLocations`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    DeleteServiceLocation(id:number):Observable<boolean>{
        let abc:serviceLocationModel[]=[];
        const url=`${this.base_url}/DeleteServiceLocation?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetServiceLocation(id:number):Observable<serviceLocationModel>{
        debugger
        let abc:serviceLocationModel;
        const url=`${this.base_url}/GetServiceLocation?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }
}