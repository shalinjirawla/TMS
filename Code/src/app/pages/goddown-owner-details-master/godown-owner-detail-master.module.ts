import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoddownOwnerDetailsMasterComponent } from './goddown-owner-details-master.component';
import { GodownOwnerDetailMasterRoutingModule } from './godown-owner-detail-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    GodownOwnerDetailMasterRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [GoddownOwnerDetailsMasterComponent]
})
export class GodownOwnerDetailMasterModule { }
