import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepartmentMasterComponent} from './department-master.component';
import {DepartmentMasterRoutingModule} from './department-master-routing-module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule ({
    imports :[
        CommonModule,
        DepartmentMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        DepartmentMasterComponent,
    ]
})
export class DepartmentMasterModule{}