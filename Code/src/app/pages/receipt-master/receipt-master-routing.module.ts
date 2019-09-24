import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ReceiptMasterComponent} from './receipt-master.component';

const router:Routes=[{
    path:'',
    component:ReceiptMasterComponent,
    data:{
        title:'Receipt Master'
    }
}]

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})

export class ReceiptMasterRoutingModule{}