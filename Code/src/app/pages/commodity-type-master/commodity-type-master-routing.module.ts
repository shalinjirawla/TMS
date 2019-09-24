import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CommodityTypeMasterComponent} from './commodity-type-master.component';

const routes:Routes=[
    {
        path:'',
        component:CommodityTypeMasterComponent,
        data:{
            title:'Commodity Master',
        },
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class CommodityTypeMasterRoutingModule{}