import { Component, OnInit, ViewChild, TemplateRef,ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormBuilder}  from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import {BsModalService,ModalOptions} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {StandardLorryHireModel} from '../../shared/model/StandardLorryHireModel';
import {StandardLorryHireService} from '../../shared/service-proxy/standardlorryhireMasterService';

import {VehicleTypeModel} from '../../shared/model/VehicleTypeModel';
import {VehicleTypeMasterService} from '../../shared/service-proxy/vehicletypeMasterService';

import {BranchModel} from '../../shared/model/BranchModel';
import {BranchMasterService} from '../../shared/service-proxy/branchMasterService';

import {DatePipe} from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-standard-lorry-hire-master',
  templateUrl: './standard-lorry-hire-master.component.html',
  styleUrls: ['./standard-lorry-hire-master.component.scss']
})
export class StandardLorryHireMasterComponent implements OnInit {
  @ViewChild ('template') template :TemplateRef<any>;
  StandardLorryHireMasterForm:FormGroup;
  Title:string;
  modalRef:BsModalRef;
  vehicleType:VehicleTypeModel[];
  branch:BranchModel[];
  rows:StandardLorryHireModel[];
  hk:StandardLorryHireModel;
  dataTable:any;

  config:ModalOptions={
    backdrop:true,
    ignoreBackdropClick:true,
  }

  constructor(private fb:FormBuilder,
              private standardlorryhireService:StandardLorryHireService,
              private modalService:BsModalService,
              private vehicletypeService:VehicleTypeMasterService,
              private branchService:BranchMasterService,
              private datePipe:DatePipe,
              private changedectetory:ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadFrom();
    this.VehicleTypeList();
    this.BranchList();
    this.StandardLorryHireList();
  }

  LoadFrom(){
    this.Title="Add Standard Lorry Hire";
    this.StandardLorryHireMasterForm=this.fb.group({
      id:[0],
      date:[''],
      vehicleType:['0'],
      vehiclecpacityMT:[''],
      from:['0'],
      to:['0'],
      lorryhire:[''],
    })
  }

  ShowPopUp(){
   this.modalRef=this.modalService.show(this.template,this.config)
  }

  HidePopUp(){
    this.modalRef.hide();
    this.LoadFrom();
  }

  VehicleTypeList(){
    this.vehicletypeService.GetVehicleTypeModels().subscribe((res:VehicleTypeModel[])=>{
      this.vehicleType=res;
    })
  }

  BranchList(){
    this.branchService.GetBranches().subscribe((res:BranchModel[])=>{
      this.branch=res;
    })
  }

  StandardLorryHireList(){
    this.standardlorryhireService.GetStandardLorryHires().subscribe((res:StandardLorryHireModel[])=>{
      this.rows=res;

      this.changedectetory.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail(){
    debugger
    let obj=Object.assign({},this.hk,this.StandardLorryHireMasterForm.value);
    this.standardlorryhireService.SaveStandardLorryHire(obj).subscribe((response:boolean)=>{
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Standard Lorry Hire has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.StandardLorryHireList();
      this.HidePopUp();
    })
  }

  ShowData(data:number){
    debugger
    this.Title="Edit Standard Lorry Hire";
    this.standardlorryhireService.GetStandardLorryHire(data).subscribe((res:StandardLorryHireModel)=>{
      var date1=this.datePipe.transform(res.date,'yyyy-MM-dd');
      this.StandardLorryHireMasterForm.patchValue({
        id:res.id,
        date:date1,
        vehicleType:res.vehicleType,
        vehiclecpacityMT:res.vehiclecpacityMT,
        from:res.from,
        to:res.to,
        lorryhire:res.lorryhire,
      });
      this.ShowPopUp();
    });
  }

  DeleteStandardLorryHire(id: number) {
    debugger
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.standardlorryhireService.DeleteStandardLorryHire(id)
          .subscribe(() => {
            // this.Destroy();
            this.StandardLorryHireList();
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
          'Data is safe :)',
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

}
