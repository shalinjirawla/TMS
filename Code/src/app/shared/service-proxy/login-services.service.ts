import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from '../model/LoginModel';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoginServicesService {
  private base_url = "http://localhost:35464/api/UserMaster";
  constructor(private http: HttpClient) { }

  GetLoginProcess(UserName: string, Password: any): Observable<any> {
    let abc: any;
    const url = `${this.base_url}/GetUser?UserName=${UserName}&Password=${Password}`;
    return this.http.get(url, httpOption).pipe((responce):any => {
      return abc = responce;
    })
  }
  SaveUserMasterDetails(input:LoginModel):Observable<boolean>{
    let abc:any;
    const url=`${this.base_url}/SaveUserMaster`;
    return this.http.post(url,input,httpOption).pipe((responce):any=>{
      return abc=responce;
    })
  }
  GetUserDetails(id:number):Observable<LoginModel>{
  let abc:any;
  const url=`${this.base_url}/GetUserMasterDetails?id=${id}`;
  return this.http.get(url,httpOption).pipe((responce):any=>{
    return abc=responce;
    
  })

  }
s
}
