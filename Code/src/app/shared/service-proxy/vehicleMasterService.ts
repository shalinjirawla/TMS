import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {VehicleMasterModel} from '../model/VehicleMasterModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class VehicleMasterService{
    private  base_url="http://localhost:35464/api/Vehicle";
    constructor (private http:HttpClient){}

    SaveVehicleMaster(input:VehicleMasterModel):Observable<any>{
        debugger
        if(input.id == 0){
            const url = `${this.base_url}/SaveVehicleMaster`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateVehicle`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetVehicleMasters() : Observable<VehicleMasterModel[]>{
        let abc : VehicleMasterModel[] = [];
        const url = `${this.base_url}/GetVehicleMasters`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetVehicleModel(id:number):Observable<VehicleMasterModel>{
        let abc: VehicleMasterModel;
        const url=`${this.base_url}/GetVehicleModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        })
    }

    DeleteVehicle(id:number):Observable<boolean>{
        let abc :VehicleMasterModel[]=[];
        const url=`${this.base_url}/DeleteVehicle?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        })
    }
}