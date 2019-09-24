import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AccountingVouchersComponent} from './accounting-vouchers.component';
import { AccountingVouchersRoutingModule } from './accounting-vouchers-rauting.module';

import { ArchwizardModule } from 'ng2-archwizard';

import { FormsModule } from '@angular/forms';

// import {} from 'app/pages/'


@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        AccountingVouchersRoutingModule,
        ArchwizardModule,
        FormsModule
    ],
    declarations:[
        AccountingVouchersComponent
    ],
    providers:[
        
    ]
})

export class AccountingVouchersModule{}