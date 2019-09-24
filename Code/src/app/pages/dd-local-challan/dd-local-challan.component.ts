import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

import { DDLocalChallanModel } from '../../shared/model/DDLocalChallanModel';
import { DDLocalChallanService } from '../../shared/service-proxy/ddlocalchallanService';

import { VehicleMasterModel } from '../../shared/model/VehicleMasterModel';
import { VehicleMasterService } from '../../shared/service-proxy/vehicleMasterService'
import { group } from '@angular/core/src/animation/dsl';

import {DatePipe} from '@angular/common';
import { patch } from 'webdriver-js-extender';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-dd-local-challan',
  templateUrl: './dd-local-challan.component.html',
  styleUrls: ['./dd-local-challan.component.scss']
})
export class DdLocalChallanComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  DDLocalChallanForm:FormGroup;

  modalRef:BsModalRef;
  vehicleModel:VehicleMasterModel[];
  cmd:any;
  rows:any;
  dataTable:any;
  Title:string;

  constructor(
    private modalService:BsModalService,
    private changedetectorRef:ChangeDetectorRef,
    private fb:FormBuilder,
    private ddlocalchallanService:DDLocalChallanService,
    private vehicleService:VehicleMasterService,
    private datepipe:DatePipe,
  ) { }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  ngOnInit() {
    this.LoadForm();
    this.VehicleList();
    this.DDLocalChallanList();
  }

  ShowPopUp(){
    this.modalRef=this.modalService.show(this.template,this.config);
  }

  hidepopup(){
    this.modalRef.hide();
  }

  LoadForm(){
    this.Title="Add DD Challan Model"
    this.DDLocalChallanForm=this.fb.group({
      id:[0],
      DDlocalchallanNo:[''],
      DDlocalchallanDate:[''],
      prideliveryNo:[''],
      Hirecharges:[''],
      vehicleNo:[''],
      remark:[''],
    })
  }

  VehicleList(){
    this.vehicleService.GetVehicleMasters().subscribe((res:VehicleMasterModel[])=>{
      this.vehicleModel=res;
    })
  }

  DDLocalChallanList(){
    this.ddlocalchallanService.GetDDLocalChallanModels().subscribe((res:DDLocalChallanModel[])=>{
      this.rows=res;

      this.changedetectorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail(){
    if(this.DDLocalChallanForm.value){
      let validation:Boolean=false;
      let obj=Object.assign({}, this.cmd,this.DDLocalChallanForm.value);
      validation=true;
      if (validation) {
        debugger
        this.ddlocalchallanService.SaveDDLocalChallan(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'DD Local Challan has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.DDLocalChallanList();
        });
      }
    }
  }

  ShowData(data:number){
    this.Title="Edit DD Local Challan"
    this.ddlocalchallanService.GetDDLocalChallanModel(data).subscribe((res:DDLocalChallanModel)=>{
      let data=this.datepipe.transform(res.DDlocalchallanDate, 'yyyy-MM-dd');
      this.DDLocalChallanForm.patchValue({
        id:res.id,
        DDlocalchallanNo:res.DDlocalchallanNo,
        DDlocalchallanDate:data,
        prideliveryNo:res.prideliveryNo,
        Hirecharges:res.Hirecharges,
        vehicleNo:res.vehicleNo,
        remark:res.remark,
      });
      this.ShowPopUp();
    });
  }

  DeleteDDLocalChallan(id:number){
    swalWithBootstrapButtons({
      title:'Are you sure?',
      text:"You Won't be able to revert this!",
      type:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes, delete it!',
      cancelButtonText:'No, cancel!',
      reverseButtons:true
    }).then((result)=>{
      if(result.value){
        this.ddlocalchallanService.DeleteDDLocalChallan(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.DDLocalChallanList();
        });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }else if(
        result.dismiss === Swal.DismissReason.cancel
      ){
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
}
