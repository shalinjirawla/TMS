import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from  '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {CrossingModel} from '../model/CrossingModel';

const HttpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()

export class crossingMasterService{
    private base_url="http://localhost:35464/api/Crossing";
    constructor(private  http:HttpClient){}

    SaveCrossing(input:CrossingModel):Observable<any>{
        if(input.id==0){
            const url=`${this.base_url}/SaveCrossing`;
            return this.http.post(url,input,HttpOptions);
        }else{
            const url=`${this.base_url}/UpdateCrossing`;    
            return this.http.post(url,input,HttpOptions);
        }
    }
    GetCrossings():Observable<CrossingModel[]>{
        let abc:CrossingModel[]=[];
        const url=`${this.base_url}/GetCrossings`;
        return this.http.get(url,HttpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    DeleteCrossing(id:number):Observable<boolean>{
        debugger
        let abc:CrossingModel[]=[];
        const url=`${this.base_url}/DeleteCrossing?id=${id}`;
        return this.http.delete(url,HttpOptions).pipe((Response:any)=>{
            return abc=Response;
        });
    }

    GetCrossing(id:number):Observable<CrossingModel>{
        let abc:CrossingModel;
        const url=`${this.base_url}/GetCrossing?id=${id}`;
        return this.http.get(url,HttpOptions).pipe((Response:any)=>{
            return abc= Response;
        })
    }
}
