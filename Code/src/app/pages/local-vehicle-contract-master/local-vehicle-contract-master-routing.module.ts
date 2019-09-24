import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LocalVehicleContractMasterComponent} from './local-vehicle-contract-master.component';


const routes:Routes=[
    {
        path:'',
        component:LocalVehicleContractMasterComponent,
        data:{
            title:'Local Vehicle Contract Master'
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class LocalVehicleContractRoutingModule{}