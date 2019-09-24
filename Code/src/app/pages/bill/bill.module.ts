import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BillComponent } from './bill.component';
import { BillRoutingModule } from './bill-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BillRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        BillComponent,
    ]
})
export class BillModule { }