import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        ReactiveFormsModule,        
    ],
    declarations: [      
        RegistrationComponent 
    ]
})
export class RegistrationModule { }