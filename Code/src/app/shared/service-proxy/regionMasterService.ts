import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RegionModel } from "../model/RegionModel";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegionMasterService {
    private base_url = "http://localhost:35464/api/Region";
    constructor(private http: HttpClient) { }

    SaveRegion(input: RegionModel): Observable<any> {
     
        if (input.id == 0) {
            const url = `${this.base_url}/SaveRegion`;
            return this.http.post(url, input, httpOptions);
        } else {
            const url = `${this.base_url}/UpdateRegion`;
            return this.http.post(url, input, httpOptions);
        }
    }

    GetRegions(): Observable<RegionModel[]> {
        let abc: RegionModel[] = [];
        const url = `${this.base_url}/GetRegions`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    DeleteRegion(id: number): Observable<boolean> {
        let abc: boolean;
        const url = `${this.base_url}/DeleteRegion?id=${id}`;
        return this.http.delete(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    GetRegion(id: number): Observable<RegionModel> {
        let abc: RegionModel;
        const url = `${this.base_url}/GetRegion?id=${id}`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }
}