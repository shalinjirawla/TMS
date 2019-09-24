import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TruckUnloadingComponent} from './truck-unloading.component'

const router:Routes=[
    {
        path:'',
        component:TruckUnloadingComponent,
        data:{
            title:'Truck Arrival'
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class  TruckUnloadingRoutingModule{}