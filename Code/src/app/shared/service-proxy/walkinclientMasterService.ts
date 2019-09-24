import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpHeaderResponse} from '@angular/common/http';

import {Observable} from 'rxjs/observable';
import {WalkInClientModel} from '../model/WalkInClientModel';

const httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class WalkInClientMasterService{
    private base_url="http://localhost:35464/api/WalkinClient";
    constructor(private http:HttpClient){}

    SaveWalkInClient(input:WalkInClientModel):Observable<any>{
        if(input.id==0){
            const url=`${this.base_url}/SaveWalkInClient`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateWalkInClient`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetWalkInClients() : Observable<WalkInClientModel[]>{
        let abc : WalkInClientModel[] = [];
        const url = `${this.base_url}/GetWalkInClients`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
    DeleteWalkInClient(id : number) : Observable<boolean>{
        let abc : WalkInClientModel[] = [];
        const url = `${this.base_url}/DeleteWalkInClient?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetWalkinClient(id : number) : Observable<WalkInClientModel>{
        let abc : WalkInClientModel;
        const url = `${this.base_url}/GetWalkinClient?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}