import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {DriverModel} from '../model/DriverMasterModule';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class DriverMasterService{
    private base_url="http://localhost:35464/api/Driver";
    constructor(private http:HttpClient){}

    SaveDriver(input:DriverModel):Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SaveDriver`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateDriver`;
            return this.http.post(url,input,httpOptions);
        }
    }

    
    GetDriverModels() : Observable<DriverModel[]>{
        let abc : DriverModel[] = [];
        const url = `${this.base_url}/GetDriverModels`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteDriver(id : number) : Observable<boolean>{
        debugger
        let abc : DriverModel[] = [];
        const url = `${this.base_url}/DeleteDriver?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetDriverModel(id : number) : Observable<DriverModel>{
        let abc : DriverModel;
        const url = `${this.base_url}/GetDriverModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}