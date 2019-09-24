import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AccountingVouchersComponent} from './accounting-vouchers.component';

const router:Routes=[{
    path:'',
    component:AccountingVouchersComponent,
    data:{
        title:'Accounting Vouchers',
    }
}]

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})

export  class AccountingVouchersRoutingModule{}