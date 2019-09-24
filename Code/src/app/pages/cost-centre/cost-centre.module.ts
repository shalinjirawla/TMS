import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CostCentreRoutingModule} from './cost-centre-routing.module';
import {CostCentreComponent} from './cost-centre.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        CostCentreRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        CostCentreComponent,
    ],
})
export class CostCentreModule{}