import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TruckArrivalComponent} from './truck-arrival.component';

const router:Routes=[
    {
        path:'',
        component:TruckArrivalComponent,
        data:{
            title:'Truck Arrival'
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class  TruckArrivalRoutingModule{}