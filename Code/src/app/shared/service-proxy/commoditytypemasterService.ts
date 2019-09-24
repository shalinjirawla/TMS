
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CommodityTypeModel} from '../model/CommodityTypemodel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class CommodityTypemasterService{
    private base_url="http://localhost:35464/api/CommodityType";
    constructor(private http:HttpClient){}

    SaveCommodityType(input:CommodityTypeModel):Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SaveCommodityType`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateCommodityType`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetCommodityTypes() : Observable<CommodityTypeModel[]>{
        debugger
        let abc : CommodityTypeModel[] = [];
        const url = `${this.base_url}/GetCommodityTypes`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteCommodityType(id : number) : Observable<boolean>{
        let abc : CommodityTypeModel[] = [];
        const url = `${this.base_url}/DeleteCommodityType?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetCommodityType(id : number) : Observable<CommodityTypeModel>{
        let abc : CommodityTypeModel;
        const url = `${this.base_url}/GetCommodityType?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}