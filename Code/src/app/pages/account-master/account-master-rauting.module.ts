import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AccountMasterComponent} from './account-master.component';


const router:Routes=[{
    path:'',
    component:AccountMasterComponent,
    data:{
        title:'Account Master'
    }
}];
@NgModule({
    imports:[RouterModule.forChild(router)],
    exports :[RouterModule],
})
export class AccountMasterRautingModule{}