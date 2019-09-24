import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LateReportReasonModel} from '../model/LateReportReasonModel';
// import { LateReportReasonModel } from '../model/LateReportReasonModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class LateReportReasonMasterService{
    private base_url="http://localhost:35464/api/LateReportReason";
    constructor(private http:HttpClient){}

    SavelateReportReason(input : LateReportReasonModel) : Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SavelateReportReason`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateLateReportReason`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetReportReasonModels() : Observable<LateReportReasonModel[]>{
        let abc : LateReportReasonModel[] = [];
        const url = `${this.base_url}/GetReportReasonModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteLateReportReason(id : number) : Observable<boolean>{
        let abc : LateReportReasonModel[] = [];
        const url = `${this.base_url}/DeleteLateReportReason?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetReportReasonModel(id : number) : Observable<LateReportReasonModel>{
        let abc : LateReportReasonModel;
        const url = `${this.base_url}/GetReportReasonModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}