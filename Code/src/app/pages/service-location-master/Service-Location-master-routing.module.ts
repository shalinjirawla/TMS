import {NgModule} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import {ServiceLocationMasterComponent} from './service-location-master.component'

const routes:Routes=[{
    path:'',
    component:ServiceLocationMasterComponent,
    data:{
        title:'Service Location Master'
    },
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ServiceLocationMasterRoutingModule {}