import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {InwardMasterComponent} from './inward-master.component';

const routes:Routes=[{
    path:'',
    component:InwardMasterComponent,
    data:{
        title:'Inward Master'
    },
}]

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports :[RouterModule],
})
export class  InwardMasterRoutingModule {}