import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
//import {WalkInClientMasterComponent} from './walk-in-client-master.component';
import {WalkInClientMasterComponent} from './walk-in-client-master.component'
const routes:Routes=[
    {
        path:'',
        component:WalkInClientMasterComponent,
        data:{
            title:'Walk-In-Client Master'
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class WalkInClientMasterComponentRoutingModule{}