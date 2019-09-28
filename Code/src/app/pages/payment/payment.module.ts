import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';

@NgModule({
    imports: [
        CommonModule,
        PaymentRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PaymentComponent,
    ]
})
export class PaymentModule { }