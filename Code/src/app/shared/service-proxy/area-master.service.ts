import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaModel } from '../model/AreaModel';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AreaMasterService {

  constructor(private http: HttpClient) {
  }
  private base_url = "http://localhost:35464/api/Area/";

  SaveArea(input: AreaModel): Observable<any> {
    if(input.id==0){
    
      let abc: AreaModel[] = [];
      const url = `${this.base_url}/SaveArea`;
      return this.http.post(url,input, httpOptions).pipe((response: any) => {
        return abc = response;
      })
    }
    else{
   
      let abc: AreaModel[] = [];
      const url = `${this.base_url}/UpdateArea`;
      return this.http.post(url,input, httpOptions).pipe((response: any) => {
        return abc = response;
      })
    }
    
  }

  GetAreas():Observable<AreaModel[]>{
    let abc:AreaModel[]=[];
    const url=`${this.base_url}/GetAreas`;
    return this.http.get(url,httpOptions).pipe((response:any)=>{
      return abc=response;
    })
  }
  DeleteAreas(id:number):Observable<boolean>{
    let abc:AreaModel[]=[];
    const url=`${this.base_url}/DeleteArea?id=${id}`;
    return this.http.delete(url,httpOptions).pipe((response:any)=>{
    return abc=response;
    })
  }
  GetArea(id:number):Observable<AreaModel>{
    let abc:AreaModel[]=[];
    const url=`${this.base_url}/GetArea?id=${id}`;
    return this.http.get(url,httpOptions).pipe((response:any)=>{
      return abc=response;
    })
  }

}
