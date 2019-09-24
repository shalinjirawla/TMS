import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {UploadPackingSlipModel} from '../model/UploadPackingSlipModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class UploadPackingSlipService{
    private base_url="http://localhost:35464/api/UploadPackingSlip";
    constructor(private http:HttpClient){}

    SaveUploadPackingSlip(input:UploadPackingSlipModel):Observable<any>{
        debugger
        if(input.id == 0){
            const url = `${this.base_url}/SaveUploadPackingSlip`;
            return this.http.post(url,input,httpOptions);
        }else{
            debugger
            const url = `${this.base_url}/UpdateUploadPackingSlip`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetUploadPackingSlipModels() : Observable<UploadPackingSlipModel[]>{
        let abc : UploadPackingSlipModel[] = [];
        const url = `${this.base_url}/GetUploadPackingSlipModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteUploadPackingSlip(id : number) : Observable<boolean>{
        let abc : UploadPackingSlipModel[] = [];
        const url = `${this.base_url}/DeleteUploadPackingSlip?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetUploadPackingSlipModel(id : number) : Observable<UploadPackingSlipModel>{
        debugger
        let abc : UploadPackingSlipModel;
        const url = `${this.base_url}/GetUploadPackingSlipModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}