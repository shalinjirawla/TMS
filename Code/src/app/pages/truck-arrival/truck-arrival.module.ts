import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TruckArrivalComponent} from './truck-arrival.component';
import {TruckArrivalRoutingModule} from './truck-arrival-routing.module';

@NgModule({
    imports:[
        CommonModule,
        TruckArrivalRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        TruckArrivalComponent,
    ]
})
export class  TruckArrivalModule{}