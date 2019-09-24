import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommodityMasterComponent} from './commodity-master.component';
import {CommodityMasterRoutingModule} from './commodity-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule ({
    imports :[
        CommonModule,
        CommodityMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        CommodityMasterComponent,
    ]
})
export class CommodityMasterModule{}