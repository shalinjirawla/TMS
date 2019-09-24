
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CommodityModel} from '../model/Commoditymodel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class CommoditymasterService{
    private base_url="http://localhost:35464/api/Commodity";
    constructor(private http:HttpClient){}

    SaveCommodity(input:CommodityModel):Observable<any>{
        debugger
        if(input.id == 0){
            const url = `${this.base_url}/SaveCommodity`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateCommodity`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetCommodities() : Observable<CommodityModel[]>{
        let abc : CommodityModel[] = [];
        const url = `${this.base_url}/GetCommodities`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteCommodity(id : number) : Observable<boolean>{
        let abc : CommodityModel[] = [];
        const url = `${this.base_url}/DeleteCommodity?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetCommodity(id : number) : Observable<CommodityModel>{
        let abc : CommodityModel;
        const url = `${this.base_url}/GetCommodity?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    
    // GetCommodityType(id:number):Observable<CommodityModel[]>{
    //     let abc:CommodityModel[];
    //     const url=`${this.base_url}/GetCommodityType?id=${id}`;
    //     return this.http.get(url,httpOptions).pipe((Response:any)=>{
    //         return abc=Response;
    //     });
    // }
}