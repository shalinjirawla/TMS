import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel } from '../model/AccountModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountMasterService {

    constructor(private http: HttpClient) {
    }
    private base_url = "http://localhost:35464/api/Account";

    SaveAccount(input : AccountModel) : Observable<any>{
        debugger
        if(input.id == 0){
            const url = `${this.base_url}/SaveAccount`;
            return this.http.post(url,input,httpOptions);
        }else{
            const url = `${this.base_url}/UpdateAccount`;
            return this.http.post(url,input,httpOptions);
        }
    }

    GetAccountModels(): Observable<AccountModel[]> {
        let abc: AccountModel[] = [];
        const url = `${this.base_url}/GetAccountModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }

    DeleteAccount(id: number): Observable<boolean> {
        let abc: AccountModel[] = [];
        const url = `${this.base_url}/DeleteAccount?id=${id}`;
        return this.http.delete(url, httpOptions).pipe((response: any) => {
            return abc = response;
        })
    }

    // GetAccountModel(id: number): Observable<AccountModel> {
    //     let abc: AccountModel;
    //     const url = `${this.base_url}/GetAccountModel?id=${id}`;
    //     return this.http.get(url, httpOptions).pipe((response: any) => {
    //         return abc = response;
    //     })
    // }

    GetAccountModel(id : number) : Observable<AccountModel>{
        debugger
        let abc : AccountModel;
        const url = `${this.base_url}/GetAccountModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

}