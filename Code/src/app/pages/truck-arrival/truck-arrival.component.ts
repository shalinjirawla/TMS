import { Component, OnInit,ViewChild,ChangeDetectorRef, TemplateRef } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {TruckArrivalModel} from '../../shared/model/TruckArrivalModel';
import {TruckArrivalService} from '../../shared/service-proxy/truckarrivalService';

import {BranchModel} from '../../shared/model/BranchModel';
import {BranchMasterService} from '../../shared/service-proxy/branchMasterService';

import { VehicleMasterModel } from '../../shared/model/VehicleMasterModel';
import { VehicleMasterService } from '../../shared/service-proxy/vehicleMasterService';

import {DatePipe} from '@angular/common';
import { TruckArrivalModule } from './truck-arrival.module';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-truck-arrival',
  templateUrl: './truck-arrival.component.html',
  styleUrls: ['./truck-arrival.component.scss']
})
export class TruckArrivalComponent implements OnInit {
  @ViewChild ('template') template:TemplateRef<any>;
  TruckArrivalForm:FormGroup;

  modalRef:BsModalRef;
  rows:any;
  hk:any;

  Title:string;
  dataTable:any;

  random:number;
  random1:number;
  clicked = false;

  branchModel:BranchModel[];
  vehicleModel: VehicleMasterModel[];

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(
    private modalService:BsModalService,
    private fb:FormBuilder,
    private changedetectorRef:ChangeDetectorRef,
    private truckarrivalService:TruckArrivalService,
    private datepipe:DatePipe,
    private branchService:BranchMasterService,
    private vehicleService:VehicleMasterService,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.VehicleList();
    this.BranchList();
    this.TruckArrivalList();
  }

  ShowPopUp(){
    this.modalRef=this.modalService.show(this.template,this.config);
    this.getRandomInt(48759162);
  }

  hidepopup(){
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm(){
    this.Title="Add Truckk Arrival";
    this.TruckArrivalForm=this.fb.group({
      id:[0],
      truckArrivalNo:[''],
      truckArrivalDate:[''],
      vehicleNo:[''],
      challanNo:[''],
      challanDate:[''],
      challanFrom:[''],
      challanTo:[''],
      scheduledArriDate:[''],
      expectedUnloadingTime:[''],
      Remark:[''],
    })
  }

  VehicleList() {
    this.vehicleService.GetVehicleMasters().subscribe((res: VehicleMasterModel[]) => {
      this.vehicleModel = res;
    })
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.branchModel = res;
    })
  }

  TruckArrivalList(){
    this.truckarrivalService.GetTruckArrivalModels().subscribe((res:TruckArrivalModel[])=>{
      this.rows=res;

      this.changedetectorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  getRandomInt(max) {
    debugger
    this.random = Math.floor(Math.random() * Math.floor(max));
    this.TruckArrivalForm.controls['truckArrivalNo'].setValue(this.random);
    // this.TruckArrivalForm.controls['truckUnloadingNo'].setValue(this.random)
  }

  SaveDetail() {
    debugger
    if (this.TruckArrivalForm.valid) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.TruckArrivalForm.value);
      validation = true;
      if (validation) {
        this.truckarrivalService.SaveTruckArrival(obj).subscribe((Response: boolean) => {
          this.hidepopup();
          // this.Destroy();
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Truck Arrival has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.TruckArrivalList();
        })
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit Inward";
    this.truckarrivalService.GetTruckArrivalModel(data).subscribe((res: TruckArrivalModel) => {
      var date1 = this.datepipe.transform(res.truckArrivalDate, 'yyyy-MM-dd');
      var date2 = this.datepipe.transform(res.challanDate, 'yyyy-MM-dd');
      var date3 = this.datepipe.transform(res.scheduledArriDate, 'yyyy-MM-dd');
      this.TruckArrivalForm.patchValue({
        id: res.id,
        truckArrivalNo: res.truckArrivalNo,
        truckArrivalDate: date1,
        vehicleNo: res.vehicleNo,
        challanNo: res.challanNo,
        challanDate: date2,
        challanFrom: res.challanFrom,
        challanTo: res.challanTo,
        scheduledArriDate: date3,
        expectedUnloadingTime: res.expectedUnloadingTime,
        Remark: res.Remark,
      });
      this.ShowPopUp();
    });
  }

  DeleteTruckArrival(id: number) {
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "You Won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.truckarrivalService.DeleteTruckArrival(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.TruckArrivalList();
          });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelled',
          'Data is safe : )',
          'info'
        )
      }
    });
  }

  public Validator(event: any) {
    const pattern = /^[0-9.]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
  }

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

}
