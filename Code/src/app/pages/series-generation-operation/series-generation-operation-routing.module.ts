import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {SeriesGenerationOperationComponent}  from './series-generation-operation.component';

const router:Routes=[{
    path:'',
    component:SeriesGenerationOperationComponent,
    data:{
        title:'Series Generation Operation'
    },
}];

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports :[RouterModule],
})
export class SeriesGenerationOperationRoutingModule{}