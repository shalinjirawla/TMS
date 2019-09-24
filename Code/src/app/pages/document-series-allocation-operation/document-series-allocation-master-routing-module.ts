import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {DocumentSeriesAllocationOperationComponent} from './document-series-allocation-operation.component';
 
const router:Routes=[{
    path:'',
    component:DocumentSeriesAllocationOperationComponent,
    data:{
        title:"Document Series Allocation"
    },
}]

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule],
})
export class DocumentSeriesAllocationOperationRoutingModule{}