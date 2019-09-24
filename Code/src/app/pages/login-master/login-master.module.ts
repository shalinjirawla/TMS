import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoginMasterRoutingModule } from './login-master-routing-module';
import { LoginMasterComponent } from './login-master.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        LoginMasterRoutingModule,
        ReactiveFormsModule,
      
    ],
    declarations: [      
        LoginMasterComponent 
    ]
})
export class LoginMasterModule { }