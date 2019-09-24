import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RegularClientMasterComponent } from './regular-client-master.component';
import { VirtualGodownMasterRoutingModule } from './regular-client-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
    imports: [
        CommonModule,
        VirtualGodownMasterRoutingModule,
        ReactiveFormsModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    declarations: [      
        RegularClientMasterComponent,
    ]
})
export class RegularClientMasterModule { }