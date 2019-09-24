import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { VirtualGodownModel } from "../model/VirtualGodownModel";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VirtualGodownMasterService {
    private base_url = "http://localhost:35464/api/VirtualGodown";
    
    constructor(private http: HttpClient) { }

    SaveVirtualGodown(input: VirtualGodownModel): Observable<any> {
        
        if (input.id == 0) {
            const url = `${this.base_url}/SaveVirtualGodown`;
            return this.http.post(url, input, httpOptions);
        } else {
            const url = `${this.base_url}/UpdateVirtualGodown`;
            return this.http.post(url, input, httpOptions);
        }
    }

    GetVirtualGodowns(): Observable<VirtualGodownModel[]> {
        let abc: VirtualGodownModel[] = [];
        const url = `${this.base_url}/GetVirtualGodowns`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    DeleteVirtualGodown(id: number): Observable<boolean> {
        let abc: VirtualGodownModel[] = [];
        const url = `${this.base_url}/DeleteVirtualGodown?id=${id}`;
        return this.http.delete(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    GetVirtualGodown(id: number): Observable<VirtualGodownModel> {
        let abc: VirtualGodownModel;
        const url = `${this.base_url}/GetVirtualGodown?id=${id}`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }
}