import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BranchModel } from "../model/BranchModel";
import { BookingModel } from "../model/BookingModel";

BranchModel
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()

export class BookingMasterService {
    private base_url = "http://localhost:35464/api/Booking";
    constructor(private http: HttpClient) { }

    GetBookings(): Observable<BookingModel[]> {
        let abc: BookingModel[] = [];
        const url = `${this.base_url}/GetBookings`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SaveBookings(input: BookingModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveBooking`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpadateBooking`;
            return this.http.post(url, input, httpOptions);

        }
    }

    DeleteBooking(id: number): Observable<boolean> {
        let abc: BookingModel[] = [];
        const url = `${this.base_url}/DeleteBooking?id=${id}`;
        return this.http.delete(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }
    GetBooking(id: number): Observable<BookingModel> {

        let abc: BookingModel;
        const url = `${this.base_url}/GetBooking?id=${id}`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }
    GetDashboardDetails(): Observable<BookingModel[]> {
        let dashboard: BookingModel[] = [];
        const url =`${this.base_url}/GetDashBoardbooking`;
        return this.http.get(url,httpOptions).pipe((responce:any)=>{
            return dashboard=responce;
        })
    }

}