import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {PreDeliveryModel} from '../model/PreDeliveryModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class PreDeliveryService {
    private base_url="http://localhost:35464/api/PreDelivery";
    constructor(private http:HttpClient){}

    SavePreDeliveryModel(input:PreDeliveryModel):Observable<any>{
        debugger
        if(input.id == 0){
            const url = `${this.base_url}/SavePreDeliveryModel`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdatePreDelivery`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetPreDeliveryModels() : Observable<PreDeliveryModel[]>{
        let abc : PreDeliveryModel[] = [];
        const url = `${this.base_url}/GetPreDeliveryModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeletePreDelivery(id : number) : Observable<boolean>{
        debugger
        let abc : PreDeliveryModel[] = [];
        const url = `${this.base_url}/DeletePreDelivery?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetPreDeliveryModel(id : number) : Observable<PreDeliveryModel>{
        debugger
        let abc : PreDeliveryModel;
        const url = `${this.base_url}/GetPreDeliveryModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}