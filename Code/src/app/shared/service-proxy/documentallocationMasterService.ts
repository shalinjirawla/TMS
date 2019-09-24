import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { DocumentAllocationModel } from '../model/DocumentAllocationModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DocumentAllocationMasterService {
    private base_url = "http://localhost:35464/api/DocumentAllocation";
    constructor(private http: HttpClient) { }

    SaveDocumentAllocation(input: DocumentAllocationModel): Observable<any> {
        debugger
        if (input.id == 0) {
            const url = `${this.base_url}/SaveDocumentAllocation`;
            return this.http.post(url, input, httpOptions);
        } else {
            const url = `${this.base_url}/UpdateDocumentAllocation`;
            return this.http.post(url, input, httpOptions);
        }
    }

    GetDocumentAllocations(): Observable<DocumentAllocationModel[]> {
        let abc: DocumentAllocationModel[] = [];
        const url = `${this.base_url}/GetDocumentAllocations`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    DeleteDocumentAllocation(id : number) : Observable<boolean>{
        debugger
        let abc : DocumentAllocationModel[] = [];
        const url = `${this.base_url}/DeleteDocumentAllocation?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetDocumentAllocation(id : number) : Observable<DocumentAllocationModel>{
        debugger
        let abc : DocumentAllocationModel;
        const url = `${this.base_url}/GetDocumentAllocation?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    
}