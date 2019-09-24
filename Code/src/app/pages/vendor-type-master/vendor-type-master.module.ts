import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VendorTypeMasterComponent} from './vendor-type-master.component';
import {VendorTypeMasterRoutingModule} from './vendor-type-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports :[
        CommonModule,
        VendorTypeMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        VendorTypeMasterComponent
    ]
})
export class VendorTypeMasterModule{}