import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {UploadPackingSlipOperationComponent} from './upload-packing-slip-operation.component';

const router:Routes=[{
    path:'',
    component:UploadPackingSlipOperationComponent,
    data:{
        title:'Upload Packing Slip Operation'
    }
}];

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class UploadPackingSlipOperationRoutingModule{}
