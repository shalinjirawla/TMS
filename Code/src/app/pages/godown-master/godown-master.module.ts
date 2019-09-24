import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { GodownMasterComponent } from './godown-master.component';
import { GodownMasterRoutingModule } from './godown-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        GodownMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        GodownMasterComponent,
    ]
})
export class GodownMasterModule { }