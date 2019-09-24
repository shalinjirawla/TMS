import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { accountingVouchersModel } from '../model/AccountingVouchersModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountingVouchersService {

    constructor(private http: HttpClient) {
    }
    private base_url = "http://localhost:35464/api/Requirement";

    SaveRequirement(input: accountingVouchersModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveRequirement`;
            return this.http.post(url, input, httpOptions);
        } else {
            const url = `${this.base_url}/UpdateRequirement`;
            return this.http.post(url, input, httpOptions);
        }
    }

    GetRequirementModels(): Observable<accountingVouchersModel[]> {
        let abc: accountingVouchersModel[] = [];
        const url = `${this.base_url}/GetRequirementModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }

    DeleteRequirement(id: number): Observable<boolean> {
        let abc: accountingVouchersModel[] = [];
        const url = `${this.base_url}/DeleteRequirement?id=${id}`;
        return this.http.delete(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }

    GetRequirement(id: number): Observable<accountingVouchersModel> {
        let abc: accountingVouchersModel;
        const url = `${this.base_url}/GetRequirement?id=${id}`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

}