import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtoMasterRoutingModule } from './rto-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RtoMasterComponent } from './rto-master.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RtoMasterRoutingModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    RtoMasterComponent
  ]
})
export class RtoMasterModule { }
