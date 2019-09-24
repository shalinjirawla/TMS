import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ReserveOperationComponent} from './reserve-operation.component';
import {ReserveOperationRoutingModule} from './reserve-operation-routing.module';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        ReserveOperationRoutingModule,
    ],
    declarations:[
        ReserveOperationComponent
    ]
})
export class ReserveOperationModule{}