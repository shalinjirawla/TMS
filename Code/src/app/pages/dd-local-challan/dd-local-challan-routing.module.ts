import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {DdLocalChallanComponent} from './dd-local-challan.component';

const router:Routes=[{
    path:'',
    component:DdLocalChallanComponent,
    data:{
        title:'DD Local Challan',
    },
}]

@NgModule ({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class DdLocalChallanRoutingModule{}