import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BranchMasterComponent } from './branch-master.component';
import { BranchMasterRoutingModule } from './branch-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TruncatePipe } from '../custompipe';

@NgModule({
    imports: [
        CommonModule,
        BranchMasterRoutingModule,
        ReactiveFormsModule,
        TooltipModule,
       
    ],
    declarations: [      
        BranchMasterComponent,
        TruncatePipe
    ]
})
export class BranchMasterModule { }