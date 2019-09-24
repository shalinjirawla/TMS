import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateMasterComponent } from './state-master.component';


const routes: Routes = [
  {
    path: '',
    component: StateMasterComponent,
    data: {
      title: 'State Master'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateMasterRoutingModule { }
