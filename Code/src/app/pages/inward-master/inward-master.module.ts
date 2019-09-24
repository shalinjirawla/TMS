import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InwardMasterComponent} from './inward-master.component';
import {InwardMasterRoutingModule} from './inward-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        InwardMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        InwardMasterComponent
    ]
})
export class InwardMasterModule{}