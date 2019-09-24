import {NgModule} from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';
import {CostCentreComponent} from './cost-centre.component';

const routes:Routes=[
    {
        path:'',
        component:CostCentreComponent,
        data:{
            title:'Contract Master'
        },
    }
];

@NgModule ({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class CostCentreRoutingModule{}