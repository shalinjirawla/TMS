import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreDeliveryComponent} from './pre-delivery.component';
import {PreDeliveryRoutingModule} from './Pre-Delivery-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        PreDeliveryRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        PreDeliveryComponent,
    ]
})
export class PreDeliveryModule{}