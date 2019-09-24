import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { CityModel } from "../model/CityModel";
import { GoddownOwnerDetailsModel } from "../model/GoddownOwnerDetailsModel";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GoddownOwnerDetailService {
  private base_url = "http://localhost:35464/api/GoddownOwnerDetails";
  constructor(private http:HttpClient) { }

  SaveGoddownOwnerDetails(input : GoddownOwnerDetailsModel) : Observable<any>{
    
    if(input.id == 0){
        const url = `${this.base_url}/SaveGoddownOwnerDetails`;
        return this.http.post(url,input,httpOptions);
    }else{
        const url = `${this.base_url}/UpdateGoddownOwnerDetails`;
        return this.http.post(url,input,httpOptions);
    }
}

GetGoddownOwnerDetails() : Observable<GoddownOwnerDetailsModel[]>{
  let abc : GoddownOwnerDetailsModel[] = [];
  const url = `${this.base_url}/GetGoddownOwnerDetails`;
  return this.http.get(url,httpOptions).pipe((response:any)=>{
      return abc = response;
  });
}
GetGoddownOwnerDetail(id:number):Observable<GoddownOwnerDetailsModel>{
let abc=GoddownOwnerDetailsModel;
const url =`${this.base_url}/GetGoddownOwnerDetail?id=${id}`;
return this.http.get(url,httpOptions).pipe((response:any)=>{
return abc=response;
});
}
DeleteGoddownOwnerDetails(id:number):Observable<boolean>{
    let abc:GoddownOwnerDetailsModel[]=[];
    const url=`${this.base_url}/DeleteGoddownOwnerDetails?id=${id}`;
    return this.http.delete(url,httpOptions).pipe((response:any)=>{
        return abc=response;
    })

}
 
}
