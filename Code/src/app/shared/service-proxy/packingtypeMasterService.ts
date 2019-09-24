
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PackingTypeModel} from '../model/PackingTypeModel';

const httpOptions ={
    headers: new HttpHeaders ({'Content-Type':'application/json'})
};

@Injectable()
export class PackingTypemasterService{
    private base_url="http://localhost:35464/api/PackingType";
    constructor(private http:HttpClient){}

    SavePackingType(input:PackingTypeModel):Observable<any>{
        if(input.id == 0){
            const url = `${this.base_url}/SavePackingType`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdatePackingType`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetPackingTypes() : Observable<PackingTypeModel[]>{
        let abc : PackingTypeModel[] = [];
        const url = `${this.base_url}/GetPackingTypes`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    DeletePackingType(id : number) : Observable<boolean>{
        let abc : PackingTypeModel[] = [];
        const url = `${this.base_url}/DeletepackingType?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetpackingType(id : number) : Observable<PackingTypeModel>{
        let abc : PackingTypeModel;
        const url = `${this.base_url}/GetPackingType?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}