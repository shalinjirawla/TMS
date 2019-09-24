import {NgModule} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import {FreightMasterComponent} from './freight-master.component';
//import { FreightMasterComponent } from '../freight-master/freight-master.component';

const routes:Routes=[
    {
        path:'',
        component:FreightMasterComponent,
        data:{
            title:'Freight Master'
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class FreightMasterRouterModule {}