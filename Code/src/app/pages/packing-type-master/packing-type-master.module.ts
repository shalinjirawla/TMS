import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PackingTypeMasterComponent} from './packing-type-master.component';
import {PackingTypeMasterRoutingModule} from './packing-type-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule ({
    imports :[
        CommonModule,
        PackingTypeMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        PackingTypeMasterComponent,
    ]
})
export class PackingTypeMasterModule{}