import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedgerGroupComponent } from './ledger-group.component';


const routes: Routes = [
  {
    path: '',
    component: LedgerGroupComponent,
    data: {
      title: 'Ledger Group'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgerGroupRoutingModule { }
