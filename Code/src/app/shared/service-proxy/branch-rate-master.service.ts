import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BranchRateModel } from '../model/BranchRateModel';
import { connect } from 'net';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class BranchRateMasterService {

  constructor(private http: HttpClient) { }
  private base_url = "http://localhost:35464/api/BranchRate";

  SaveBranchRateMasterDetails(input: BranchRateModel): Observable<any> {
    if (input.Id==null || input.Id == 0 || input.Id==undefined)  {
      let abc: BranchRateModel[] = [];
      const url = `${this.base_url}/SaveBranchRateDetails`;
      return this.http.post(url, input, httpOptions).pipe((responce: any) => {
        return abc = responce;
      })
    } else {
      let abc: BranchRateModel[] = [];
      const url = `${this.base_url}/UpdateBranchRateDetails?id=${input.Id}`;
      return this.http.post(url, input, httpOptions).pipe((responce: any) => {
        return abc = responce;
      })
    }

  }
  GetBranchRateDetails(): Observable<BranchRateModel[]> {
    let abc: BranchRateModel[] = [];
    const url = `${this.base_url}/GetBranchRateDetails`;
    return this.http.get(url, httpOptions).pipe((responce: any) => {
      return abc = responce;
    })
  }
  GetEditDetail(id: any): Observable<BranchRateModel> {
    let abc: BranchRateModel[];
    const url = `${this.base_url}/GetBranchRateDetail?id=${id}`;
    return this.http.get(url, httpOptions).pipe((responce: any) => {
      return abc = responce;
    })
  }
  DeleteBranchRateDetails(id:any):Observable<any>{
    let abc:BranchRateModel[];
    const url=`${this.base_url}/DeleteBranchRateDetail?id=${id}`;
    return this.http.delete(url,httpOptions).pipe((responce:any)=>{
      return abc=responce;
    })
  }
}
