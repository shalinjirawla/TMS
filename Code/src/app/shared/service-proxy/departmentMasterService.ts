
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DepartmentModel} from '../model/DepartmentModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class DepartmentmasterService{
    private base_url="http://localhost:35464/api/Department";
    constructor(private http:HttpClient){}

    SaveDepartment(input:DepartmentModel):Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SaveDepartment`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateDepartment`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetDepartments() : Observable<DepartmentModel[]>{
        let abc : DepartmentModel[] = [];
        const url = `${this.base_url}/GetDepartments`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeleteDepartment(id : number) : Observable<boolean>{
        let abc : DepartmentModel[] = [];
        const url = `${this.base_url}/DeleteDepartment?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetDepartment(id : number) : Observable<DepartmentModel>{
        let abc : DepartmentModel;
        const url = `${this.base_url}/GetDepartment?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}