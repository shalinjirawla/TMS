import {NgModule} from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';
import { ConsignmentOperationComponent } from './consignment-operation.component';

const routes:Routes=[
    {
        path:'',
        component:ConsignmentOperationComponent,
        data:{
            title:'Contract Master'
        },
    }
];

@NgModule ({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ConsignmentOperationRoutingModule{}