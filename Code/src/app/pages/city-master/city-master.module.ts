import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityMasterComponent } from './city-master.component';
import { CityMasterRoutingModule } from './city-master-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CityMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [      
        CityMasterComponent,
    ]
})
export class CityMasterModule { }