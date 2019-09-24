import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {DepartmentMasterComponent} from './department-master.component';

const routes:Routes=[
    {
        path:'',
        component:DepartmentMasterComponent,
        data:{
            title:'Packing Type Master',
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class DepartmentMasterRoutingModule{}