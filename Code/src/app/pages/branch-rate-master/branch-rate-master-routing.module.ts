import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchRateMasterComponent } from './branch-rate-master.component';



const routes: Routes = [
  {
    path: '',
    component: BranchRateMasterComponent,
    data: {
      title: 'Branch Rate Master'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRateMasterRoutingModule { }
