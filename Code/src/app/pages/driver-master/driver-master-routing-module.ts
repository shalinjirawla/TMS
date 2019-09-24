import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {DriverMasterComponent} from './driver-master.component';

const routes:Routes=[{
    path:'',
    component:DriverMasterComponent,
    data:{
        title:'Driver Master',
    },
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class DriverMasterRoutingModule{}