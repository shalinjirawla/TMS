import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RtoMasterComponent } from './rto-master.component';
const routes:Routes=[
  {
    path:'',
    component:RtoMasterComponent,
    data:{
      title:'RTO Master Component'
    }
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RtoMasterRoutingModule { }
