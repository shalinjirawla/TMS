import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualGodownMasterComponent } from './virtual-godown-master.component';


const routes: Routes = [
  {
    path: '',
    component: VirtualGodownMasterComponent,
    data: {
      title: 'Virtual Godown Master'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualGodownMasterRoutingModule { }
