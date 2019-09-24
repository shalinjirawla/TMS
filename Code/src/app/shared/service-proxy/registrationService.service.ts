import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { RegistrationModel } from 'app/shared/model/RegistrationModel';
import { Observable } from 'rxjs/Observable';
import { RegularClientModel } from '../model/RegularClientModel';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class RegistrationService {
  private base_url = "http://localhost:35464/api/UserMaster";
  constructor(private http: HttpClient) { }

  SaveRegistrationDetails(input: RegistrationModel): Observable<any> {
    if (input.Id == 0) {
      const url = `${this.base_url}/SaveUserMaster`;
      return this.http.post(url, input, httpOptions);
    } else {
      const url = `${this.base_url}/UpdateUserDetails`;
      return this.http.post(url, input, httpOptions);
    }
  }
  UserList():Observable<RegistrationModel>{
  
    let abc: RegistrationModel[] = [];
    const url = `${this.base_url}/GetAllUserDetails`;
    return this.http.get(url,httpOptions).pipe((responce:any)=>{
      return abc=responce;
    })
  }
 DeleteUserDetails(id:number):Observable<boolean>{
   let results:RegistrationModel[]=[];
   const url=`${this.base_url}/Deleteuser?id=${id}`;
   return this.http.delete(url,httpOptions).pipe((responce:any)=>{
     return results=responce;
   })
 }
 GetUserDetail(id:number):Observable<RegistrationModel>{
   let result:RegistrationModel[]=[];
   const url=`${this.base_url}/GetUserMasterDetails?id=${id}`;
   return this.http.get(url,httpOptions).pipe((responce:any)=>{
     return result=responce;
   });
 }

}
