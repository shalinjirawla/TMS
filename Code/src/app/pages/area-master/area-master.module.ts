import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaMasterRoutingModule } from './area-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AreaMasterComponent } from './area-master.component';

@NgModule({
  imports: [
    CommonModule,
    AreaMasterRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    AreaMasterComponent
  ]
})
export class AreaMasterModule { }
