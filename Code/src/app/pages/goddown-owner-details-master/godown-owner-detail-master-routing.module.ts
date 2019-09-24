import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoddownOwnerDetailsMasterComponent } from './goddown-owner-details-master.component';
const routes:Routes=[
{
  path:'',
  component:GoddownOwnerDetailsMasterComponent,
  data:{
    title:'Goddown Owner Detail Master'
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
export class GodownOwnerDetailMasterRoutingModule { }
