import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMasterRautingModule } from './account-master-rauting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountMasterComponent } from './account-master.component';

@NgModule({
    imports:[
        CommonModule,
        AccountMasterRautingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        AccountMasterComponent
    ]
})
export class AccountMasterModule{}