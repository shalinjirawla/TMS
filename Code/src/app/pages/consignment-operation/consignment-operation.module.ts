import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsignmentOperationComponent } from './consignment-operation.component';
import { ConsignmentOperationRoutingModule } from './consignment-operation-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
    imports:[
        CommonModule,
        ConsignmentOperationRoutingModule,
        ReactiveFormsModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    declarations:[
        ConsignmentOperationComponent,
    ],
})

export class ConsignmentOperationModule{}

