import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { VirtualGodownMasterComponent } from './virtual-godown-master.component';
import { VirtualGodownMasterRoutingModule } from './virtual-godown-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        VirtualGodownMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        VirtualGodownMasterComponent,
    ]
})
export class VirtualGodownMasterModule { }