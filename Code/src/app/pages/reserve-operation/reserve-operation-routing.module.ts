import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ReserveOperationComponent} from './reserve-operation.component';

const router:Routes=[{
    path:'',
    component:ReserveOperationComponent,
    data:{
        title:'Reserve Operation'
    }
}];
@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class ReserveOperationRoutingModule{} 
