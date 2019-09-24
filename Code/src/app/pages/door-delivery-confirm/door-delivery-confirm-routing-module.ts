import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {DoorDeliveryConfirmComponent} from './door-delivery-confirm.component'

const routes:Routes=[{
    path:'',
    component:DoorDeliveryConfirmComponent,
    data:{
        title:"Document Alloctions"
    },
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class DoorDeliveryConfirmRoutingModule{}