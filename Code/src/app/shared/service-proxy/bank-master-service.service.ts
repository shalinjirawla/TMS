import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BankMasterModel } from '../model/BankMasterModel';
const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class BankMasterServiceService {

  constructor(private http: HttpClient) { }
  private base_Url = "http://localhost:35464/api/BankMaster";

  SaveBankMasterDetails(input: BankMasterModel): Observable<any> {
    if ( input.id!=null  && input.id!=0) {
      let abc: BankMasterModel[] = [];
      const url = `${this.base_Url}/UpdateBankMasterDetails`;
      return this.http.post(url, input, httpOption).pipe((responce: any) => {
        return abc = responce;
      })
    } else{     
      let abc: BankMasterModel[] = [];
      const url = `${this.base_Url}/SaveBankMasterDetails`;
      return this.http.post(url, input, httpOption).pipe((responce: any) => {
        return abc = responce;
      })
    }
  }
  GetBankMasterDetails():Observable<BankMasterModel[]> {
    let abc: BankMasterModel[] = [];
    const url = `${this.base_Url}/GetBankMasterDetails`;
    return this.http.get(url, httpOption).pipe((responce: any) => {
      return abc = responce;
    })
  }
  GetEditBankMasterDetail(id:any):Observable<BankMasterModel>
  {
    let abc:BankMasterModel[]=[];
    const url=`${this.base_Url}/GetBankMasterDetail?id=${id}`;
    return this.http.get(url,httpOption).pipe((responce:any)=>{
      return abc=responce;
    })
  }
  DeleteBankMaster(id:number):Observable<boolean>{
    let abc:BankMasterModel[]=[];
    const url=`${this.base_Url}/DeleteBankMasterDetail?id=${id}`;
    return this.http.delete(url,httpOption).pipe((responce:any)=>{
      return abc=responce;
    })
  }
}
