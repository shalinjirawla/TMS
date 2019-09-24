import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/observable';
import {LocalVehicleContractModel} from '../model/LocalVehicleContractModel';

const httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class LocalVelicleContractMasterService {
    private base_url="http://localhost:35464/api/LocalVehicleContract";
    constructor(private http:HttpClient){}

    SaveLocalVehicleContract(input:LocalVehicleContractModel):Observable<any>{
        if(input.id==0){
            const url=`${this.base_url}/SaveLocalVehicleContract`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateLocalVehicleContract`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetVehicleContractModels():Observable<LocalVehicleContractModel[]>{
        debugger
        let abc : LocalVehicleContractModel[]=[];
        const url =`${this.base_url}/GetVehicleContractModels`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc = Response;
        });
    }

    DeleteLocalVehicleContract(id:number) : Observable<boolean>{
        debugger
        let abc:LocalVehicleContractModel[]=[];
        const url=`${this.base_url}/DeleteLocalVehicleContract?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetVehicleContractModel(id:number):Observable<LocalVehicleContractModel>{
        let abc:LocalVehicleContractModel;
        const url=`${this.base_url}/GetVehicleContractModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc= Response;
        });
    }
    
}