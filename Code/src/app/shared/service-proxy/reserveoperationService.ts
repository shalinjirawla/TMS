import { NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReserveModel } from '../model/ReserveModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class ReserveOperationService {
    constructor(private http: HttpClient) { }
    private base_url = "http://localhost:35464/api/Reserve";

    GetReserveBookingModels(): Observable<ReserveModel[]> {
        let abc: ReserveModel[] = [];
        const url = `${this.base_url}/GetReserveBookingModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SaveReserveBooking(input: ReserveModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveReserveBooking`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpdateReserveBooking`;
            return this.http.post(url, input, httpOptions);
        }
    }

    DeleteReserveBooking(id: number): Observable<boolean> {
        let abc: ReserveModel[] = [];
        const url = `${this.base_url}/DeleteReserveBooking?id=${id}`;
        return this.http.delete(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }

    GetReserveBookingModel(id: number): Observable<ReserveModel> {

        let abc: ReserveModel;
        const url = `${this.base_url}/GetReserveBookingModel?id=${id}`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }

}