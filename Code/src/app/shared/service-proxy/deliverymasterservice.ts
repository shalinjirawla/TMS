import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { DeliveryModel } from '../model/DeliveryModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DeliveryMasterService {
  private base_url = "http://localhost:35464/api/Delivery";
  constructor(private http: HttpClient) { }

  SaveDelivery(input: DeliveryModel): Observable<any> {
    debugger
    if (input.id == 0) {
      const url = `${this.base_url}/SaveDelivery`;
      return this.http.post(url, input, httpOptions);
    } else {
      const url = `${this.base_url}/UpdateDelivery`;
      return this.http.post(url, input, httpOptions);
    }
  }

  GetDeliveryModels(): Observable<DeliveryModel[]> {
    let abc: DeliveryModel[] = [];
    const url = `${this.base_url}/GetDeliveryModels`;
    return this.http.get(url, httpOptions).pipe((response: any) => {
      return abc = response;
    });
  }

  DeleteDelivery(id: number): Observable<boolean> {
    debugger
    let abc: DeliveryModel[] = [];
    const url = `${this.base_url}/DeleteDelivery?id=${id}`;
    return this.http.delete(url, httpOptions).pipe((Response: any) => {
      return abc = Response;
    });
  }

  GetDeliveryModel(id: number): Observable<DeliveryModel> {
    let abc: DeliveryModel;
    const url = `${this.base_url}/GetDeliveryModel?id=${id}`;
    return this.http.get(url, httpOptions).pipe((Response: any) => {
      return abc = Response;
    });
  }

}
