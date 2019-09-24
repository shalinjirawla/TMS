import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FreightMasterComponent} from './freight-master.component';
import {FreightMasterRouterModule} from './freight-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        FreightMasterRouterModule,
        ReactiveFormsModule,
    ],
    declarations:[
        FreightMasterComponent,
    ]
})
export class freightMasterModule { }