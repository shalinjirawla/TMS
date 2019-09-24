import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { ConsignmentModel } from '../model/ConsignmentModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConsignmentOperationService{
    private base_url="http://localhost:35464/api/Consignment";
    constructor(private http:HttpClient){}

    SaveConsignment(input : ConsignmentModel) :  Observable<any>{
        if(input.id==0){
            const url= `${this.base_url}/SaveConsignment`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url=`${this.base_url}/UpdateConsignment`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetConsignmentModels():Observable<ConsignmentModel[]>{
        let abc:ConsignmentModel[]=[];
        const url=`${this.base_url}/GetConsignmentModels`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    DeleteConsignment(id:number) : Observable<boolean>{
        let abc:ConsignmentModel[]=[];
        const url=`${this.base_url}/DeleteConsignment?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetConsignmentModel(id:number):Observable<ConsignmentModel>{
        let abc:ConsignmentModel;
        const url=`${this.base_url}/GetConsignmentModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((Response:any)=>{
            return abc= Response;
        });
    }
}


// Injectable()
// export class ConsignmentOperationService {
//     private base_url = "http://localhost:35464/api/Consignment";
//     constructor(private http: HttpClient) { }

//     SaveConsignment(input: ConsignmentModel): Observable<any> {
//         if (input.id == 0) {
//             const url = `${this.base_url}/SaveConsignment`;
//             return this.http.post(url, input, httpOptions);
//         } else {
//             const url = `${this.base_url}/UpdateContract`;
//             return this.http.post(url, input, httpOptions);
//         }
//     }

//     GetConsignmentModels(): Observable<ConsignmentModel[]> {
//         let abc: ConsignmentModel[] = [];
//         const url = `${this.base_url}/GetConsignmentModels`;
//         return this.http.get(url, httpOptions).pipe((Response: any) => {
//             return abc = Response;
//         });
//     }
// }