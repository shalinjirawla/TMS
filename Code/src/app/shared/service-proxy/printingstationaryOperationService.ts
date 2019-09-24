import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrintingStationaryModel } from '../model/PrintingStationaryModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class PrintingStationaryOperationService {

    constructor(private http: HttpClient) { }
    private base_url = "http://localhost:35464/api/PrintingStationary";

    GetPrintingStationaryModels(): Observable<PrintingStationaryModel[]> {
        let abc: PrintingStationaryModel[] = [];
        const url = `${this.base_url}/GetPrintingStationaryModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SavePrintingStationary(input: PrintingStationaryModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SavePrintingStationary`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpdatePrintingStationary`;
            return this.http.post(url, input, httpOptions);
        }
    }

    DeletePrintingStationary(id : number) : Observable<boolean>{
        debugger
        let abc : PrintingStationaryModel[] = [];
        const url = `${this.base_url}/DeletePrintingStationary?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetPrintingStationaryModel(id : number) : Observable<PrintingStationaryModel>{
        debugger
        let abc : PrintingStationaryModel;
        const url = `${this.base_url}/GetPrintingStationaryModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    OnSeriesNo() : Observable<PrintingStationaryModel>{
        debugger
        let abc : PrintingStationaryModel;
        const url = `${this.base_url}/countno`;
        return this.http.post(url,httpOptions).pipe((response:any)=>{
            debugger
            return abc = response;
        });
    }
}