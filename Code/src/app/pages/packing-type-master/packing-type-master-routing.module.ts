import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {PackingTypeMasterComponent} from './packing-type-master.component';

const routes:Routes=[
    {
        path:'',
        component:PackingTypeMasterComponent,
        data:{
            title:'Packing Type Master',
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class PackingTypeMasterRoutingModule{}