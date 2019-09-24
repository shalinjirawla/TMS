import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GodownDeliveryComponent} from './godown-delivery.component'
import {GodownDeliveryRoutingModule} from './godown-delivery-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GodownDeliveryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    GodownDeliveryComponent
  ]
})
export class GodownDeliveryModule { }
