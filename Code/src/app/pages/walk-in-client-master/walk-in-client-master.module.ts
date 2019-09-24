import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalkInClientMasterComponent} from './walk-in-client-master.component';
import {WalkInClientMasterComponentRoutingModule} from './walk-in-client-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        WalkInClientMasterComponentRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        WalkInClientMasterComponent,
    ]
})
export class WalkInClientMasterModule{}