import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GodownMasterComponent } from './godown-master.component';


const routes: Routes = [
  {
    path: '',
    component: GodownMasterComponent,
    data: {
      title: 'Godown Master'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodownMasterRoutingModule { }
