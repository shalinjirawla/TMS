import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceiptMasterComponent} from './receipt-master.component';
import {ReceiptMasterRoutingModule} from './receipt-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        ReceiptMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        ReceiptMasterComponent,
    ]
})
export class ReceiptMasterModule{}