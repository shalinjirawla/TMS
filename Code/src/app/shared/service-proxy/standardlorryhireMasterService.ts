import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StandardLorryHireModel } from '../model/StandardLorryHireModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class StandardLorryHireService {
    private base_url = "http://localhost:35464/api/StandardLorryHire";
    constructor(private http: HttpClient) { }

    SaveStandardLorryHire(input: StandardLorryHireModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveStandardLorryHire`;
            return this.http.post(url, input, httpOptions);
        } else {
            const url = `${this.base_url}/UpdateStandardLorryHire`;
            return this.http.post(url, input, httpOptions);
        }
    }

    GetStandardLorryHires():Observable<StandardLorryHireModel[]>{
        let abc:StandardLorryHireModel[]=[];
        const url=`${this.base_url}/GetStandardLorryHires`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    DeleteStandardLorryHire(id:number):Observable<boolean>{
        let abc:StandardLorryHireModel[]=[];
        const url=`${this.base_url}/DeleteStandardLorryHire?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetStandardLorryHire(id:number):Observable<StandardLorryHireModel>{
        debugger
        let abc:StandardLorryHireModel;
        const url=`${this.base_url}/GetStandardLorryHire?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }
}