import {NgModule}  from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalVehicleContractRoutingModule} from './local-vehicle-contract-master-routing.module';
import {LocalVehicleContractMasterComponent} from './local-vehicle-contract-master.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports :[
        CommonModule,
        ReactiveFormsModule,
        LocalVehicleContractRoutingModule
    ],
    declarations:[
        LocalVehicleContractMasterComponent
    ]
})
export class LocalVehicleContractMasteModule{}