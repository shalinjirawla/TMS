import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LedgerGroupComponent } from './ledger-group.component';
import { LedgerGroupRoutingModule } from './ledger-group-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LedgerGroupRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        LedgerGroupComponent,
    ]
})
export class LedgerGroupModule { }