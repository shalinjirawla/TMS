import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {  PackingModel } from '../model/PackingModel';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class PackingMasterServiceService {

  constructor(private http:HttpClient) { }
  private base_url = "http://localhost:35464/api/Packing";
   GetPackings():Observable<PackingModel[]>{
    let abc:PackingModel[]=[];
    const url=`${this.base_url}/GetPackings`;
    return this.http.get(url,httpOptions).pipe((response:any)=>{
      return abc=response;
    })

   }
}
