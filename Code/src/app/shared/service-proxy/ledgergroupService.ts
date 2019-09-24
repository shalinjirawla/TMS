import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/observable';
import {LedgerGroupModel} from '../model/LedgerGroupModel';

const httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class LedgerGroupService {
    private base_url="http://localhost:35464/api/LedgerGroupFinance";
    constructor(private http:HttpClient){}

    SaveLedgerGroupFinance(input:LedgerGroupModel):Observable<any>{
        if(input.id==0){
            const url=`${this.base_url}/SaveLedgerGroupFinance`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateLedgerGroupFinance`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetLedgerGroupFinanceModels():Observable<LedgerGroupModel[]>{
        debugger
        let abc : LedgerGroupModel[]=[];
        const url =`${this.base_url}/GetLedgerGroupFinanceModels`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc = Response;
        });
    }

    DeleteLedgerGroupFinance(id:number) : Observable<boolean>{
        debugger
        let abc:LedgerGroupModel[]=[];
        const url=`${this.base_url}/DeleteLedgerGroupFinance?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetLedgerGroupFinanceModel(id:number):Observable<LedgerGroupModel>{
        let abc:LedgerGroupModel;
        const url=`${this.base_url}/GetLedgerGroupFinanceModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc= Response;
        });
    }
    
}