import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {DeliveryMasterComponent} from './delivery-master.component';

const router:Routes=[{
    path:'',
    component:DeliveryMasterComponent,
    data:{
        title:'Delivery Master',
    },
}]

@NgModule ({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class DeliveryMasterRoutingModule{}