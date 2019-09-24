import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CrossingMasterComponent} from  './crossing-master.component';
import {CrossingMasterRouterModule} from './crossing-master-routing.module';
//import {CrossingMasterRouterModule} from './crossing-master-routing.module'
// import {FormGroup,FormControl,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        CrossingMasterRouterModule,
        ReactiveFormsModule,
    ],
    declarations:[
        CrossingMasterComponent
    ]
})
export class CrossingMasterModule{}