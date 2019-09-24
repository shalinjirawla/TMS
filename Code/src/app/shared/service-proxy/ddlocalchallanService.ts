import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { DDLocalChallanModel } from '../model/DDLocalChallanModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DDLocalChallanService {
  private base_url = "http://localhost:35464/api/DDLocalChallan";
  constructor(private http: HttpClient) { }

  SaveDDLocalChallan(input: DDLocalChallanModel): Observable<any> {
    debugger
    if (input.id == 0) {
      const url = `${this.base_url}/SaveDDLocalChallan`;
      return this.http.post(url, input, httpOptions);
    } else {
      const url = `${this.base_url}/UpdateDDLocalChallan`;
      return this.http.post(url, input, httpOptions);
    }
  }

  GetDDLocalChallanModels(): Observable<DDLocalChallanModel[]> {
    let abc: DDLocalChallanModel[] = [];
    const url = `${this.base_url}/GetDDLocalChallanModels`;
    return this.http.get(url, httpOptions).pipe((response: any) => {
      return abc = response;
    });
  }

  DeleteDDLocalChallan(id: number): Observable<boolean> {
    debugger
    let abc: DDLocalChallanModel[] = [];
    const url = `${this.base_url}/DeleteDDLocalChallan?id=${id}`;
    return this.http.delete(url, httpOptions).pipe((Response: any) => {
      return abc = Response;
    });
  }

  GetDDLocalChallanModel(id: number): Observable<DDLocalChallanModel> {
    let abc: DDLocalChallanModel;
    const url = `${this.base_url}/GetDDLocalChallanModel?id=${id}`;
    return this.http.get(url, httpOptions).pipe((Response: any) => {
      return abc = Response;
    });
  }

}
