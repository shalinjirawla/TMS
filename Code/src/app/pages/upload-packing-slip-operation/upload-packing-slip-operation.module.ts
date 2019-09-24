import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UploadPackingSlipOperationComponent } from './upload-packing-slip-operation.component';
import {UploadPackingSlipOperationRoutingModule} from './upload-packing-slip-operation-routing.module';


@NgModule({
    imports:[
        CommonModule,
        UploadPackingSlipOperationRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        UploadPackingSlipOperationComponent
    ]
})
export class UploadPackingSlipOperationModule{}