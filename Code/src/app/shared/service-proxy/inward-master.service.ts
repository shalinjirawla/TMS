import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { InwardModel } from '../model/InwardModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InwardMasterService {
  private base_url = "http://localhost:35464/api/Inward";
  constructor(private http: HttpClient) { }

  SaveInward(input: InwardModel): Observable<any> {
    debugger
    if (input.id == 0) {
      const url = `${this.base_url}/SaveInward`;
      return this.http.post(url, input, httpOptions);
    } else {
      const url = `${this.base_url}/UpdateInward`;
      return this.http.post(url, input, httpOptions);
    }
  }

  GetInwardModels(): Observable<InwardModel[]> {
    let abc: InwardModel[] = [];
    const url = `${this.base_url}/GetInwardModels`;
    return this.http.get(url, httpOptions).pipe((response: any) => {
      return abc = response;
    });
  }

  DeleteInward(id : number) : Observable<boolean>{
    debugger
    let abc : InwardModel[] = [];
    const url = `${this.base_url}/DeleteInward?id=${id}`;
    return this.http.delete(url,httpOptions).pipe((response:any)=>{
        return abc = response;
    });
}

GetInwardMaster(id : number) : Observable<InwardModel>{
    debugger
    let abc : InwardModel;
    const url = `${this.base_url}/GetInwardMaster?id=${id}`;
    return this.http.get(url,httpOptions).pipe((response:any)=>{
        return abc = response;
    });
}

}
