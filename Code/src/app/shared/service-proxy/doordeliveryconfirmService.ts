import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOorDeliveryConfirmModel } from '../model/DoorDeliveryConfirmModel';
import { DoorDeliveryConfirmModule } from 'app/pages/door-delivery-confirm/door-delivery-confirm.module';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class DoorDeliveryConfirmService {

    constructor(private http: HttpClient) { }
    private base_url = "http://localhost:35464/api/DoorDeliveryConfirm";

    GetDoorDeliveryConfirmModels(): Observable<DOorDeliveryConfirmModel[]> {
        let abc: DOorDeliveryConfirmModel[] = [];
        const url = `${this.base_url}/GetDoorDeliveryConfirmModels`;
        return this.http.get(url, httpOptions).pipe((response: any) => {
            return abc = response;
        });
    }

    SaveDeliveryConfirm(input: DOorDeliveryConfirmModel): Observable<any> {
        if (input.id == 0) {
            const url = `${this.base_url}/SaveDeliveryConfirm`;
            return this.http.post(url, input, httpOptions);
        }
        else {
            const url = `${this.base_url}/UpdateDoorDeliveryConfirm`;
            return this.http.post(url, input, httpOptions);
        }
    }

    DeleteDoorDeliveryConfirm(id : number) : Observable<boolean>{
        debugger
        let abc : DOorDeliveryConfirmModel[] = [];
        const url = `${this.base_url}/DeleteDoorDeliveryConfirm?id=${id}`;
        return this.http.delete(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

    GetDoorDeliveryConfirmModel(id : number) : Observable<DoorDeliveryConfirmModule>{
        debugger
        let abc : DOorDeliveryConfirmModel;
        const url = `${this.base_url}/GetDoorDeliveryConfirmModel?id=${id}`;
        return this.http.get(url,httpOptions).pipe((response:any)=>{
            return abc = response;
        });
    }

}