import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {VendorTypeMasterComponent} from './vendor-type-master.component';

const Router:Routes=[{
    path:'',
    component:VendorTypeMasterComponent,
    data:{
        title:'Vender Type Master'
    },
}]

@NgModule({
    imports:[RouterModule.forChild(Router)],
    exports:[RouterModule],
})
export class VendorTypeMasterRoutingModule{}