import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {VendorTypeModel} from '../model/VendorTypeModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class VendorTypeMasterService{
    private base_url="http://localhost:35464/api/VendorType";
    constructor(private http:HttpClient){}

    SaveVendorType(input:VendorTypeModel):Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SaveVendorType`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateVendorType`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetVendorTypes() : Observable<VendorTypeModel[]>{
        let abc : VendorTypeModel[] = [];
        const url = `${this.base_url}/GetVendorTypes`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteVendorType(id : number) : Observable<boolean>{
        let abc : VendorTypeModel[] = [];
        const url = `${this.base_url}/DeleteVendorType?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetTypeModel(id : number) : Observable<VendorTypeModel>{
        debugger
        let abc : VendorTypeModel;
        const url = `${this.base_url}/GetTypeModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}