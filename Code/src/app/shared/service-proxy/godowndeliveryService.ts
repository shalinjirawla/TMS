import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { GodownDeliveryModel } from '../model/GodownDeliveryModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GodownDeliveryService {
  private base_url = "http://localhost:35464/api/GodownDelivery";
  constructor(private http: HttpClient) { }

  SaveGodownDelivery(input: GodownDeliveryModel): Observable<any> {
    if (input.id == 0) {
      const url = `${this.base_url}/SaveGodownDelivery`;
      return this.http.post(url, input, httpOptions);
    } else {
      const url = `${this.base_url}/UpdateGodownDelivery`;
      return this.http.post(url, input, httpOptions);
    }
  }

  GetGodownDeliveryModels(): Observable<GodownDeliveryModel[]> {
    let abc: GodownDeliveryModel[] = [];
    const url = `${this.base_url}/GetGodownDeliveryModels`;
    return this.http.get(url, httpOptions).pipe((response: any) => {
      return abc = response;
    });
  }

  DeleteGodownDelivery(id: number): Observable<boolean> {
    let abc: GodownDeliveryModel[] = [];
    const url = `${this.base_url}/DeleteGodownDelivery?id=${id}`;
    return this.http.delete(url, httpOptions).pipe((Response: any) => {
      return abc = Response;
    });
  }

  GetGodownDeliveryModel(id: number): Observable<GodownDeliveryModel> {
    let abc: GodownDeliveryModel;
    const url = `${this.base_url}/GetGodownDeliveryModel?id=${id}`;
    return this.http.get(url, httpOptions).pipe((Response: any) => {
      return abc = Response;
    });
  }

}
