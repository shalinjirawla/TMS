import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {PrintingStationaryOperationComponent}  from './printing-stationary-operation.component';

const router:Routes=[{
    path:'',
    component:PrintingStationaryOperationComponent,
    data:{
        title:'Printing Stationary Operation'
    },
}];

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports :[RouterModule],
})
export class PrintingStationaryOperationRoutingModule{}