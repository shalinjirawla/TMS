import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularClientMasterComponent } from './regular-client-master.component';


const routes: Routes = [
  {
    path: '',
    component: RegularClientMasterComponent,
    data: {
      title: 'Regular Client Master'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualGodownMasterRoutingModule { }
