import {NgModule} from '@angular/core';
import {Routes,RouterModule,} from '@angular/router';
import {StandardLorryHireMasterComponent} from './standard-lorry-hire-master.component';

const routes:Routes=[{
    path:'',
    component:StandardLorryHireMasterComponent,
    data:{
        title:'Standard Lorry Hire Master',
    },
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class StandardLorryHireMasterRoutingModule{}