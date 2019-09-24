import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReceiptModel } from "../model/ReceiptModel";
// import {  } from "../model/";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReceiptMasterService {
    private base_url = "http://localhost:35464/api/Receipt";
    constructor(private http: HttpClient) { }

    SaveReceipt(input: ReceiptModel): Observable<any> {

        if (input.id == 0) {
            const url = `${this.base_url}/SaveReceipt`;
            return this.http.post(url, input, httpOptions);
        } else {
            const url = `${this.base_url}/UpdateReceipt`;
            return this.http.post(url, input, httpOptions);
        }
    }

    GetReceiptModels(): Observable<ReceiptModel[]> {
        let abc: ReceiptModel[] = [];
        const url = `${this.base_url}/GetReceiptModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    DeleteReceipt(id : number) : Observable<boolean>{
        let abc : ReceiptModel[] = [];
        const url = `${this.base_url}/DeleteReceipt?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetReceiptModel(id : number) : Observable<ReceiptModel>{
        let abc : ReceiptModel;
        const url = `${this.base_url}/GetReceiptModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }
}