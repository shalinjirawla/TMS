import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginMasterComponent } from './pages/login-master/login-master.component';
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import {} from './pages/full-layout-page/full-layout-page.component';
import {HomeComponent} from './pages/home/home.component'

import {AuthGuardService} from './shared/SessionHandler/auth-gard.service';

const appRoutes: Routes = [

  {
    path: '',
    component: LoginMasterComponent,  
  },
  {
    path: 'login',
    component: LoginMasterComponent,    
  },
  {
    path: 'full-layout',
    component: FullLayoutComponent,canActivate: [AuthGuardService],
  },
 
  {
    path: '', component: FullLayoutComponent,canActivate: [AuthGuardService], data: { title: 'full Views' }, children: Full_ROUTES,
  },
  {
    path: '**',
    component: LoginMasterComponent,    
  },

 
];
console.log(appRoutes);

@NgModule({
  
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule], 
  providers: [AuthGuardService]
  
})

export class AppRoutingModule {

}
