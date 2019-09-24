import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {VehicleTypeModel} from '../model/VehicleTypeModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class VehicleTypeMasterService{
    private base_url="http://localhost:35464/api/VehicleType";
    constructor (private http:HttpClient){}

    SaveVehicleType(input:VehicleTypeModel):Observable<any>{
        debugger
        if(input.id == 0){
            const url = `${this.base_url}/SaveVehicleType`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateVehicleType`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetVehicleTypeModels() : Observable<VehicleTypeModel[]>{
        let abc : VehicleTypeModel[] = [];
        const url = `${this.base_url}/GetVehicleTypeModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            debugger
            return abc = response;
        });
    }

    DeleteVehicleType(id : number) : Observable<boolean>{
        let abc : VehicleTypeModel[] = [];
        const url = `${this.base_url}/DeleteVehicleType?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetVehicleType(id : number) : Observable<VehicleTypeModel>{
        debugger
        let abc : VehicleTypeModel;
        const url = `${this.base_url}/GetVehicleType?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}