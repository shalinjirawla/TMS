import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleModelMasterRoutingModule} from './vehicle-model-master-routing.module';
import {VehicleMasterComponent} from './vehicle-model-master.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        VehicleModelMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        VehicleMasterComponent
    ]
})
export class  VehicleModelMasterModule{}