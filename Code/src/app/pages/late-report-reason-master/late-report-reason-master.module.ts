import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LateReportReasonMasterComponent} from './late-report-reason-master.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LateReportReasonRoutingModule} from './late-report-reason-master-routing.module';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        LateReportReasonRoutingModule
        // LateReportReasonMasterComponent,
    ],
    declarations:[
        LateReportReasonMasterComponent,
    ]
})
export class LateReportReasonMasterModule{}