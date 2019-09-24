import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingMasterComponent} from './booking-master.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingMasterRoutingModule } from './booking-master-routing.module';
// import { StateMasterComponent } from '../state-master/state-master.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    BookingMasterRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    BookingMasterComponent,
   
  ]
})

export class BookingMasterModule { }
