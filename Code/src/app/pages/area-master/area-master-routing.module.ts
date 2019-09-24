import { NgModule } from '@angular/core';
import { AreaMasterComponent } from './area-master.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
 {
   path:'',
   component:AreaMasterComponent,
   data:{
     title:'Area Master'
   }
 } 
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AreaMasterRoutingModule { }
