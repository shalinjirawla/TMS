import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {VehicleTypeMasterComponent} from './vehicle-type-master.component';

const router:Routes=[{
    path:'',
    component:VehicleTypeMasterComponent,
    data:{
        title:'Vehicle Type Master'
    },
}]

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class VehicleTypeMasterRoutingModule{}