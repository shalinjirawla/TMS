import {NgModule} from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';
import {ContractMasterComponent} from './contract-master.component';

const routes:Routes=[
    {
        path:'',
        component:ContractMasterComponent,
        data:{
            title:'Contract Master'
        },
    }
];

@NgModule ({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ContractMasterRouterModule{}