import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RegionMasterComponent } from './region-master.component';
import { RegionMasterRoutingModule } from './region-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RegionMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        RegionMasterComponent,
    ]
})
export class RegionMasterModule { }