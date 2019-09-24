import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LateReportReasonMasterComponent} from './late-report-reason-master.component';

const routes:Routes=[
    {
        path:'',
        component:LateReportReasonMasterComponent,
        data:{
            title:'Late Report Reason'
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class LateReportReasonRoutingModule{}