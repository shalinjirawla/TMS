import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import { CostCentrModel } from '../model/CostCentreModel';

const  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class CostCentreService{
    private  base_url="http://localhost:35464/api/CostCentre";
    constructor(private http:HttpClient){}

    SaveCostCentre(input : CostCentrModel) :  Observable<any>{
        if(input.id==0){
            const url= `${this.base_url}/SaveCostCentre`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateCostCentre`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetCostCentreModels():Observable<CostCentrModel[]>{
        let abc:CostCentrModel[]=[];
        const url=`${this.base_url}/GetCostCentreModels`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    DeleteCOstCentre(id:number):Observable<boolean>{
        let  abc:CostCentrModel[]=[];
        const url=`${this.base_url}/DeleteCOstCentre?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetCostCentreModel(id:number):Observable<CostCentrModel>{
        let abc:CostCentrModel;
        const url=`${this.base_url}/GetCostCentreModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }
}