import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { VendorMasterComponent } from './vendor-master.component';
import { VendorMasterRoutingModule } from './vendor-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        VendorMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        VendorMasterComponent,
    ]
})
export class VendorMasterModule{}