import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StandardLorryHireMasterRoutingModule} from './standard-lorry-hire-master-routing.module';
import {StandardLorryHireMasterComponent} from './standard-lorry-hire-master.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        StandardLorryHireMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        StandardLorryHireMasterComponent,
    ]
})
export class StandardLorryHireMasterModule{}