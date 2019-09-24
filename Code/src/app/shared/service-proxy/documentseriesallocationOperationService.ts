import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentSeriesAllocationModel } from '../model/DocumentSeriesAllocationModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class DocumentSeriesAllocationOperationService {

    constructor(private http: HttpClient) { }
    private base_url = "http://localhost:35464/api/DocumentSeriesAllocation";

    GetDocumentSeriesAllocationModels(): Observable<DocumentSeriesAllocationModel[]> {
        let abc: DocumentSeriesAllocationModel[] = [];
        const url = `${this.base_url}/GetDocumentSeriesAllocationModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SaveDocumentSeriesAllocation(input: DocumentSeriesAllocationModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveDocumentSeriesAllocation`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpdateDocumentSeriesAllocation`;
            return this.http.post(url, input, httpOptions);
        }
    }

    DeleteDocumentSeriesAllocation(id : number) : Observable<boolean>{
        debugger
        let abc : DocumentSeriesAllocationModel[] = [];
        const url = `${this.base_url}/DeleteDocumentSeriesAllocation?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetDocumentSeriesAllocationModel(id : number) : Observable<DocumentSeriesAllocationModel>{
        debugger
        let abc : DocumentSeriesAllocationModel;
        const url = `${this.base_url}/GetDocumentSeriesAllocationModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    OnSeriesNo() : Observable<DocumentSeriesAllocationModel>{
        debugger
        let abc : DocumentSeriesAllocationModel;
        const url = `${this.base_url}/countno`;
        return this.http.post(url,httpOptions).pipe((response:any)=>{
            debugger
            return abc = response;
        });
    }
}