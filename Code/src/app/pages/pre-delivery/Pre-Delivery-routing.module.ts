import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {PreDeliveryComponent} from './pre-delivery.component';

const router:Routes=[{
    path:'',
    component:PreDeliveryComponent,
    data:{
        title:'Pre Delivery'
    }
}]

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})

export class PreDeliveryRoutingModule{}