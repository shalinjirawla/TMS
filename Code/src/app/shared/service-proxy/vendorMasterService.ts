import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {VendorModel} from '../model/VendorModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class VendorMasterService{
    private base_url="http://localhost:35464/api/Vendor";
    constructor(private http:HttpClient){}

    SaveVender(input:VendorModel):Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SaveVender`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateVendor`;
            return this.http.post(url,input,httpOptions);
        }
    }

    vendorModels() : Observable<VendorModel[]>{
        let abc : VendorModel[] = [];
        const url = `${this.base_url}/GetVendorModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteVendor(id : number) : Observable<boolean>{
        let abc : VendorModel[] = [];
        const url = `${this.base_url}/DeleteVendor?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetVendorModel(id : number) : Observable<VendorModel>{
        let abc : VendorModel;
        const url = `${this.base_url}/GetVendorModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

}