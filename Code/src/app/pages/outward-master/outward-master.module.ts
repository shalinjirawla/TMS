import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OutwardMasterComponent } from './outward-master.component';
import { OutwardMasterRoutingModule } from './outward-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        OutwardMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        OutwardMasterComponent,
    ]
})
export class OutwardMasterModule { }