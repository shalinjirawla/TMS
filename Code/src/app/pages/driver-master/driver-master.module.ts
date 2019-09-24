import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DriverMasterComponent} from './driver-master.component';
import {DriverMasterRoutingModule} from './driver-master-routing-module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        DriverMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        DriverMasterComponent,
    ]
})
export class DriverMasterModule{}