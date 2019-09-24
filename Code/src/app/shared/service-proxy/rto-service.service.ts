import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RTOModel } from '../model/RTOModel';
const httpOptions={
  headers:new HttpHeaders({'Content-type':'application/json'})
}
@Injectable()
export class RtoServiceService {

  constructor(private http:HttpClient) { }
  private base_url="http://localhost:35464/api/RTO";
  
  GetRTOs():Observable<RTOModel[]>{
   let abc:RTOModel[]=[];
   const url=`${this.base_url}/GetRTOs`;
    return this.http.get(url,httpOptions).pipe((response:any)=>{
      return abc=response;
    });
  }
  SaveRTO(input:RTOModel):Observable<any>{
      if(input.id==0){
        const url=`${this.base_url}/SaveRTO`;
        return this.http.post(url,input,httpOptions);
      }
      else{
        const url=`${this.base_url}/UpdateRTO`;
        return this.http.post(url,input,httpOptions);
      }
  }

  DeleteRTO(id:number):Observable<boolean>{
    let abc:RTOModel[]=[];
    const url=`${this.base_url}/DeleteRTO?id=${id}`;
    return this.http.delete(url,httpOptions).pipe((response:any)=>{
      return abc=response;
    })
  }

  GetRTO(id:number):Observable<RTOModel>{

    let abc:RTOModel;
    const url=`${this.base_url}/GetRTO?id=${id}`;
    return this.http.get(url,httpOptions).pipe((response:any)=>{
      return abc=response;
    })
  }

}
