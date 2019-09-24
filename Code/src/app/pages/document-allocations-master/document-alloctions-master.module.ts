import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentAllocationsMasterComponent} from './document-allocations-master.component';
import {DocumentAllocationsMasterRoutingModule} from './document-allocations-master-routing-module';
import {ReactiveFormsModule} from  '@angular/forms';

@NgModule({
    imports :[
        CommonModule,
        DocumentAllocationsMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        DocumentAllocationsMasterComponent,
    ]
})
export class DocumentAllocationsMasterModule{}