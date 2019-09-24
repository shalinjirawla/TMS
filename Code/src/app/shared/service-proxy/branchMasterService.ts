import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { BranchModel } from "../model/BranchModel";

BranchModel
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BranchMasterService{
    private base_url = "http://localhost:35464/api/Branch";
    constructor(private http:HttpClient) {}

    SaveBranch(input : BranchModel) : Observable<any>{
       
        if(input.id == 0){
            const url = `${this.base_url}/SaveBranch`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateBranch`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetBranches() : Observable<BranchModel[]>{
        let abc : BranchModel[] = [];
        const url = `${this.base_url}/GetBranches`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteBranch(id : number) : Observable<boolean>{
        let abc : BranchModel[] = [];
        const url = `${this.base_url}/DeleteBranch?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetBranch(id : number) : Observable<BranchModel>{
        let abc : BranchModel;
        const url = `${this.base_url}/GetBranch?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}