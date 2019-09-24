import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {GodownDeliveryComponent} from './godown-delivery.component'

const router:Routes=[{
    path:'',
    component:GodownDeliveryComponent,
    data:{
        title:'Delivery Master',
    },
}]

@NgModule ({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class GodownDeliveryRoutingModule{}