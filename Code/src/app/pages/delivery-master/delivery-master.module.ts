import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeliveryMasterComponent} from './delivery-master.component';
import {DeliveryMasterRoutingModule} from './delivery-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DeliveryMasterRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DeliveryMasterComponent
  ]
})
export class DeliveryMasterModule { }
