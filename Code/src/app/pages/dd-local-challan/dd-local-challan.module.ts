import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DdLocalChallanComponent} from './dd-local-challan.component';
import {DdLocalChallanRoutingModule} from './dd-local-challan-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DdLocalChallanRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DdLocalChallanComponent
  ]
})
export class DdLocalChallanModule { }
