import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {ContractModel} from '../model/ContractModel';
import { CrossingModel } from '../model/CrossingModel';

const  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class ContractMasterService{
    private  base_url="http://localhost:35464/api/Contract";
    constructor(private http:HttpClient){}

    SaveContract(input : CrossingModel) :  Observable<any>{
        if(input.id==0){
            const url= `${this.base_url}/SaveContract`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateContract`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetContracts():Observable<ContractModel[]>{
        let abc:ContractModel[]=[];
        const url=`${this.base_url}/GetContracts`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    DeleteContract(id:number):Observable<boolean>{
        let  abc:CrossingModel[]=[];
        const url=`${this.base_url}/DeleteContract?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetContract(id:number):Observable<ContractModel>{
        let abc:ContractModel;
        const url=`${this.base_url}/GetContract?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }
}