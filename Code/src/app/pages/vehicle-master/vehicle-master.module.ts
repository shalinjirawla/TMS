import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleMasterComponent} from './vehicle-master.component';
import {VehicleMasterRoutingModule} from './vehicle-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        VehicleMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        VehicleMasterComponent,
    ]
})
export class VehicleMasterModule{} 
