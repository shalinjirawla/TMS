import {NgModule} from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';
import {CrossingMasterComponent} from './crossing-master.component';

const routes:Routes=[
    {
        path:'',
        component:CrossingMasterComponent,
        data:{
            title:'Crossing Master'
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class CrossingMasterRouterModule{}