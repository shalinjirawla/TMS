import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StateMasterComponent } from './state-master.component';
import { StateMasterRoutingModule } from './state-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        StateMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        StateMasterComponent,
    ]
})
export class StateMasterModule { }