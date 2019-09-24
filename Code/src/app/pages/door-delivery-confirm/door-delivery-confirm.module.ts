import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoorDeliveryConfirmComponent} from './door-delivery-confirm.component';
import {DoorDeliveryConfirmRoutingModule} from './door-delivery-confirm-routing-module';
import {ReactiveFormsModule} from  '@angular/forms';

@NgModule({
    imports :[
        CommonModule,
        DoorDeliveryConfirmRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
    DoorDeliveryConfirmComponent,
    ]
})
export class DoorDeliveryConfirmModule{}