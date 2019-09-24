import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {OutwardModel} from '../model/OutwardModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class OutwardMasterService {
    private base_url="http://localhost:35464/api/Outward";
    constructor(private http:HttpClient){}

    SaveOutward(input:OutwardModel):Observable<any>{
        debugger
        if(input.id == 0){
            const url = `${this.base_url}/SaveOutward`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateOutward`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetOutwardModels() : Observable<OutwardModel[]>{
        let abc : OutwardModel[] = [];
        const url = `${this.base_url}/GetOutwardModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteOutward(id : number) : Observable<boolean>{
        debugger
        let abc : OutwardModel[] = [];
        const url = `${this.base_url}/DeleteOutward?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetOutwardModel(id : number) : Observable<OutwardModel>{
        debugger
        let abc : OutwardModel;
        const url = `${this.base_url}/GetOutwardModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}