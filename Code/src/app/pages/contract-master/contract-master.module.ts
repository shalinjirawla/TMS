import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractMasterComponent} from './contract-master.component';
import {ContractMasterRouterModule} from './contract-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        ContractMasterRouterModule,
        ReactiveFormsModule,
    ],
    declarations:[
        ContractMasterComponent,
    ],
})
export class ContractMasterModule{}