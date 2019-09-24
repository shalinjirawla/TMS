import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommodityTypeMasterComponent} from './commodity-type-master.component';
import {CommodityTypeMasterRoutingModule} from './commodity-type-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule ({
    imports :[
        CommonModule,
        CommodityTypeMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        CommodityTypeMasterComponent,
    ]
})
export class CommodityTypeMasterModule{}