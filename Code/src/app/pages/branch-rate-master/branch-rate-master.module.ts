import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchMasterRoutingModule } from '../branch-master/branch-master-routing.module';
import { BranchRateMasterComponent } from './branch-rate-master.component';
import { BranchRateMasterRoutingModule } from './branch-rate-master-routing.module';
import{FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BranchRateMasterRoutingModule,   
    ReactiveFormsModule,
   
  ],
  declarations: [
    BranchRateMasterComponent
  ]
})
export class BranchRateMasterModule { }
