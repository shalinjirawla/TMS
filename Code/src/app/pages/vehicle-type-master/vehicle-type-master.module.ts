import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleTypeMasterComponent} from './vehicle-type-master.component';
import {VehicleTypeMasterRoutingModule} from './vehicle-type-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports :[
        CommonModule,
        VehicleTypeMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        VehicleTypeMasterComponent
    ]
})
export class  VehicleTypeMasterModule{}