import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {VehicleMasterComponent } from './vehicle-model-master.component';

const Router:Routes=[{
    path:'',
    component:VehicleMasterComponent,
    data:{
        title:"Vehicle Type Master"
    },
}]

@NgModule({
    imports:[RouterModule.forChild(Router)],
    exports:[RouterModule],
})
export class VehicleModelMasterRoutingModule{}