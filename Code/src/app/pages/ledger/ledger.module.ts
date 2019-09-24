import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LedgerComponent} from './ledger.component';
import {LedgerRoutingModule} from './ledger-routing.module';

@NgModule({
    imports:[
        CommonModule,
        LedgerRoutingModule,
        ReactiveFormsModule,
    ],declarations:[
        LedgerComponent
    ]
})

export class LedgerModule{}