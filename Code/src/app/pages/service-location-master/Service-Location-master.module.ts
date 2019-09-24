import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceLocationMasterComponent} from './service-location-master.component';
import {ServiceLocationMasterRoutingModule} from './Service-Location-master-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        ServiceLocationMasterRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        ServiceLocationMasterComponent,
    ]
})
export class ServiceLocationMasterModule {}