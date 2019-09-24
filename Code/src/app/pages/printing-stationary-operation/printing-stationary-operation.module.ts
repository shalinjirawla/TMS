import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrintingStationaryOperationComponent} from './printing-stationary-operation.component';
import {PrintingStationaryOperationRoutingModule} from './printing-stationary-operation-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        PrintingStationaryOperationRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        PrintingStationaryOperationComponent,
    ]
})
export class PrintingStationaryOperationModule{}