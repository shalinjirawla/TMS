import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BankMasterDetailsComponent } from './bank-master-details.component';
import { BankMasterRoutingModule } from './bank-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BankMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        BankMasterDetailsComponent,
    ]
})
export class BankMasterModule { }