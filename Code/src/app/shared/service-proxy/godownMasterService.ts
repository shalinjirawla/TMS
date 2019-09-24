import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { GodownModel } from "../model/GodownModel";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GodownMasterService {
    private base_url = "http://localhost:35464/api/Godown";
    
    constructor(private http: HttpClient) { }

    SaveGodown(input: GodownModel): Observable<any> {
        
        if (input.id == 0) {
            const url = `${this.base_url}/SaveGodown`;
            return this.http.post(url, input, httpOptions);
        } else {
            const url = `${this.base_url}/UpdateGodown`;
            return this.http.post(url, input, httpOptions);
        }
    }

    GetGodowns(): Observable<GodownModel[]> {
        let abc: GodownModel[] = [];
        const url = `${this.base_url}/GetGodowns`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    DeleteGodown(id: number): Observable<boolean> {
        let abc: GodownModel[] = [];
        const url = `${this.base_url}/DeleteGodown?id=${id}`;
        return this.http.delete(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    GetGodown(id: number): Observable<GodownModel> {
        let abc: GodownModel;
        const url = `${this.base_url}/GetGodown?id=${id}`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }
}