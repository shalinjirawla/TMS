import { Component, OnInit, ViewChild, TemplateRef,ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormBuilder}  from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import {BsModalService,ModalOptions} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ServiceLocationMasterModule} from './Service-Location-master.module'
import {BranchModel} from '../../shared/model/BranchModel';
import {BranchMasterService} from '../../shared/service-proxy/branchMasterService';
import {ServiceLocationMaster} from '../../shared/service-proxy/Service-Location-Master.Service';
import {serviceLocationModel} from 'app/shared/model/ServiceLocationModel';
import { forEach } from '@angular/router/src/utils/collection';
import swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-service-location-master',
  templateUrl: './service-location-master.component.html',
  styleUrls: ['./service-location-master.component.scss']
})
export class ServiceLocationMasterComponent implements OnInit {
@ViewChild('template') template:  TemplateRef<any>;
ServiceLocationMasterForm:FormGroup;
modalRef:BsModalRef;
Title:string;
DefaultDeliveryTypeCheckbox=[];
gm:serviceLocationModel;
rows:serviceLocationModel[];
dataTable:any;
config:ModalOptions={
  backdrop:true,
  ignoreBackdropClick:true,
}

Branches:BranchModel[]=[];

  constructor(
    private  fb:FormBuilder,
    private modelService:BsModalService,
    private branchService: BranchMasterService,
    private changeDetectorRef: ChangeDetectorRef,
    private servicelocationService : ServiceLocationMaster,
  ) {}

  ngOnInit() {
    this.LoadForm();
    this.LoadDefaultDeliveryType();
    this.BranchList();
    this.ServiceLocationList();
  }

  LoadDefaultDeliveryType(){
    this.DefaultDeliveryTypeCheckbox=[{
      id:1,
      Name:"Godown"
    },{
      id:2,
      Name:"Door"
    }];
  }

  LoadForm(){
    this.Title="Add New Service Location";
    this.ServiceLocationMasterForm=this.fb.group({
      servicelocationcode:[''],
      servicelocationname:[''],
      defaultdeliverytype:['0'],
      controllingbranch:['0'],
      deliveryat:['0'],
      distancefrombranch:[''],
      istodaybooking:[''],
      // vehicletype:[''],
      pickupcharges:[''],
      DDCharges:[''],
      Id:[0],
    });
  }

  BranchList(){
    this.branchService.GetBranches().subscribe((res:BranchModel[])=>{
    this.Branches=res;
    });
  }
  ServiceLocationList(){
    this.servicelocationService.GetServiceLocations().subscribe((res:serviceLocationModel[])=>{
      this.rows=res;
    debugger
     // console.log(res);

      this.changeDetectorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }
  ShowPopUp(){
    this.modalRef=this.modelService.show(this.template,this.config);
  }

  HidePopUp(){
    this.modalRef.hide();
    this.LoadForm();
  }

  SaveDetail(Data:serviceLocationModel){
    debugger
    let defaultdeliverytype=this.ServiceLocationMasterForm.controls.defaultdeliverytype.value;
    let  istodaybooking= this.ServiceLocationMasterForm.controls.istodaybooking.value;
    let obj=Object.assign({}, this.gm,this.ServiceLocationMasterForm.value);
    this.servicelocationService.SaveServiceLocation(obj).subscribe((Response:boolean)=>{
      this.HidePopUp();
       this.destroy();
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Service location has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
     // this.freightMasterForm.reset();
      this.ServiceLocationList();
      this.LoadForm();
      
    });
  }

  destroy(){
    const table:any=$('table')
    table.DataTable();
    table.DataTable().destroy();
  }
 
  ShowData(data:number){
    debugger
    this.Title="Edit New Service Location";
    this.servicelocationService.GetServiceLocation(data).subscribe((res:serviceLocationModel)=>{
      this.ServiceLocationMasterForm.patchValue({
        id:res.Id,
        servicelocationcode:res.servicelocationcode,
        servicelocationname:res.servicelocationname,
        defaultdeliverytype:res.defaultdeliverytype,
        controllingbranch:res.controllingbranch,
        deliveryat:res.deliveryat,
        distancefrombranch:res.distancefrombranch,
        istodaybooking:res.istodaybooking,
        pickupcharges:res.pickupcharges,
        DDCharges:res.DDCharges,
      });
      this.ShowPopUp();
    });
  }
  

  DeleteServiceLocation(id:number){
    debugger
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
        this.servicelocationService.DeleteServiceLocation(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.ServiceLocationList();
        });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }else if(
        result.dismiss === swal.DismissReason.cancel
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
