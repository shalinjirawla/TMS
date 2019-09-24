import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankMasterDetailsComponent } from './bank-master-details.component';


const routes: Routes = [
  {
    path: '',
    component: BankMasterDetailsComponent,
    data: {
      title: 'Bank Master'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankMasterRoutingModule { }
