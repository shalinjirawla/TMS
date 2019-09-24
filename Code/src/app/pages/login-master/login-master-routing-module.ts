import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMasterComponent } from './login-master.component';


const routes: Routes = [
  {
    path: '',
     component: LoginMasterComponent,
    data: {
      title: 'Login Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMasterRoutingModule { }
