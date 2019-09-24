import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LedgerComponent} from './ledger.component';

const router:Routes=[{
    path:'',
    component:LedgerComponent,
    data:{
        title:'Ledger'
    },
}]
@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class LedgerRoutingModule{}