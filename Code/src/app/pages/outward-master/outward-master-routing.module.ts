import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutwardMasterComponent } from './outward-master.component';


const routes: Routes = [
  {
    path: '',
    component: OutwardMasterComponent,
    data: {
      title: 'Outward Master'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutwardMasterRoutingModule { }
