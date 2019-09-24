import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookingMasterComponent } from './booking-master.component';
const routes:Routes=[
  {
    path:'',
    component:BookingMasterComponent,
    data:{
      title:'Booking Master'
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

export class BookingMasterRoutingModule { }
