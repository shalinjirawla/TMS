import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TruckUnloadingComponent} from './truck-unloading.component';
import {TruckUnloadingRoutingModule} from './truck-unloading-routing.module';

@NgModule({
    imports:[
        CommonModule,
        TruckUnloadingRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        TruckUnloadingComponent,
    ]
})
export class  TruckUnloadingModule{}