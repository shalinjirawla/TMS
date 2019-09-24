import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {VehicleModel} from '../model/VehicleModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class VehiclemodelMasterService{
    private base_url="http://localhost:35464/api/VehicleModel";
    constructor(private http:HttpClient){}

    SaveVehicleModel(input:VehicleModel):Observable<any>{
        debugger
        if(input.id==0){
            const url=`${this.base_url}/SaveVehicleModel`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateVehicleModel`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetVehicleModels():Observable<VehicleModel[]>{
        let abc : VehicleModel[]=[];
        const url = `${this.base_url}/GetVehicleModels`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }
    DeleteVehicleModel(id : number) : Observable<boolean>{
        let abc : VehicleModel[] = [];
        const url = `${this.base_url}/DeleteVehicleModel?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetVehicleModel(id : number) : Observable<VehicleModel>{
        debugger
        let abc : VehicleModel;
        const url = `${this.base_url}/GetVehicleModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}