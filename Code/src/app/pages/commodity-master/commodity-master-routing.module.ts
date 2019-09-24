import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CommodityMasterComponent} from './commodity-master.component';

const routes:Routes=[
    {
        path:'',
        component:CommodityMasterComponent,
        data:{
            title:'Commodity Master',
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class CommodityMasterRoutingModule{}