import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {DocumentAllocationsMasterComponent} from './document-allocations-master.component'

const routes:Routes=[{
    path:'',
    component:DocumentAllocationsMasterComponent,
    data:{
        title:"Document Alloctions"
    },
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class DocumentAllocationsMasterRoutingModule{}