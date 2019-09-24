import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeriesGenerationModel } from '../model/SeriesGenerationModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class SeriesGenerationOperationService {

    constructor(private http: HttpClient) { }
    private base_url = "http://localhost:35464/api/SeriesGeneration";

    GetSeriesGenerationModels(): Observable<SeriesGenerationModel[]> {
        let abc: SeriesGenerationModel[] = [];
        const url = `${this.base_url}/GetSeriesGenerationModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SaveSeriesGeneration(input: SeriesGenerationModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveSeriesGeneration`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpdateSeriesGeneration`;
            return this.http.post(url, input, httpOptions);
        }
    }

    DeleteSeriesGeneration(id : number) : Observable<boolean>{
        debugger
        let abc : SeriesGenerationModel[] = [];
        const url = `${this.base_url}/DeleteSeriesGeneration?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetSeriesGenerationModel(id : number) : Observable<SeriesGenerationModel>{
        debugger
        let abc : SeriesGenerationModel;
        const url = `${this.base_url}/GetSeriesGenerationModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    OnSeriesNo() : Observable<SeriesGenerationModel>{
        debugger
        let abc : SeriesGenerationModel;
        const url = `${this.base_url}/countno`;
        return this.http.post(url,httpOptions).pipe((response:any)=>{
            debugger
            return abc = response;
        });
    }
}