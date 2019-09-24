import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { GodownDeliveryModel } from '../../shared/model/GodownDeliveryModel';
import { GodownDeliveryService } from '../../shared/service-proxy/godowndeliveryService';

import { RegularClientModel } from '../../shared/model/RegularClientModel';
import { RegularClientMasterService } from '../../shared/service-proxy/regularClientMasterService';

import { ReserveModel } from '../../shared/model/ReserveModel';
import { ReserveOperationService } from '../../shared/service-proxy/reserveoperationService';

import { PackingTypeModel } from '../../shared/model/PackingTypeModel';
import { PackingTypemasterService } from '../../shared/service-proxy/packingtypeMasterService';

import { GodownModel } from '../../shared/model/GodownModel';
import { GodownMasterService } from '../../shared/service-proxy/godownMasterService';

import { VirtualGodownModel } from '../../shared/model/VirtualGodownModel';
import { VirtualGodownMasterService } from '../../shared/service-proxy/virtualGodownMasterService';

import { DatePipe } from '@angular/common';
import { PackingModel } from 'app/shared/model/PackingModel';
import { GodownDeliveryModule } from './godown-delivery.module';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-godown-delivery',
  templateUrl: './godown-delivery.component.html',
  styleUrls: ['./godown-delivery.component.scss']
})
export class GodownDeliveryComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;

  Title: string;
  cmd:any;
  rows:any[];
  dataTable:any;

  DropdownPaymentMode: any[];
  regularModel: RegularClientModel[];
  reserveModel: ReserveModel[];
  packingtypeModel: PackingTypeModel[];
  godownModel: GodownModel[];
  virtualgodownModel: VirtualGodownModel[];

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  GodownDeliveryForm: FormGroup;
  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private changedetecterRef: ChangeDetectorRef,
    private godownDeliveryService: GodownDeliveryService,
    private regularService: RegularClientMasterService,
    private reserveService: ReserveOperationService,
    private packingTypeService: PackingTypemasterService,
    private godownService: GodownMasterService,
    private virtualgodownService: VirtualGodownMasterService,
    private datepipe:DatePipe,
  ) { }

  ngOnInit() {
    this.LoadFrom();
    this.GodownList();
    this.BookingList();
    this.RegularClientList();
    this.VirtualGodownList();
    this.PackingTypeList();
    this.GodownDeliveryList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadFrom();
  }

  LoadFrom() {
    this.Title = "Add Godown Delivery",
      this.GodownDeliveryForm = this.fb.group({
        id: [0],
        gatepassNo: [''],
        gatepassdate: [''],
        paymentmode: [''],
        deliveryparty: [''],
        deliverypartydetails: [''],
        contractparty: [''],
        contractpartydetails: [''],
        CNno: [''],
        CNdate: [''],
        bookingbranch: [''],
        consignor: [''],
        item: [''],
        packingType: [''],
        godownname: [''],
        virtualgodownname: [''],
        deliveryarticle: [''],
        deliveryweight: [''],
        balancearticle: [''],
        balanceweight: [''],
        rollno: [''],
        handedoverto: [''],
        contractNo: [''],
        vehicleNo: [''],
        GUTKANo: [''],
        remark: [''],
      });
    this.PaymentModeList();
  }

  PaymentModeList() {
    this.DropdownPaymentMode = [{
      id: 1,
      Name: 'Cash'
    }, {
      id: 2,
      Name: 'Bank'
    }, {
      id: 3,
      Name: 'Debit'
    }]
  }

  RegularClientList() {
    this.regularService.GetRegularClients().subscribe((res: RegularClientModel[]) => {
      this.regularModel = res;
    })
  }

  BookingList() {
    this.reserveService.GetReserveBookingModels().subscribe((res: ReserveModel[]) => {
      this.reserveModel = res;
    })
  }

  PackingTypeList() {
    this.packingTypeService.GetPackingTypes().subscribe((res: PackingTypeModel[]) => {
      this.packingtypeModel = res;
    })
  }

  GodownList() {
    this.godownService.GetGodowns().subscribe((res: GodownModel[]) => {
      this.godownModel = res;
    })
  }

  VirtualGodownList() {
    this.virtualgodownService.GetVirtualGodowns().subscribe((res: VirtualGodownModel[]) => {
      this.virtualgodownModel = res;
    })
  }

  GodownDeliveryList(){
    this.godownDeliveryService.GetGodownDeliveryModels().subscribe((res:GodownDeliveryModule[])=>{
      this.rows=res;

      this.changedetecterRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail() {
    debugger
    if (this.GodownDeliveryForm.valid) {
      let validation: boolean = false;
      let paymentmode = this.GodownDeliveryForm.controls.paymentmode.value;
      let obj = Object.assign({}, this.cmd, this.GodownDeliveryForm.value)
      validation = true;
      if (validation) {
        debugger
        this.godownDeliveryService.SaveGodownDelivery(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Godown Delivery has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.GodownDeliveryList();
        });
      }
    }
  }

  ShowData(data){
    this.Title="Edit Godown Delivery",
    this.godownDeliveryService.GetGodownDeliveryModel(data).subscribe((res:GodownDeliveryModel)=>{
      var date1=this.datepipe.transform(res.gatepassdate,'yyyy-MM-dd');
      var date2=this.datepipe.transform(res.CNdate,'yyyy-MM-dd');
      this.GodownDeliveryForm.patchValue({
        id:res.id,
        gatepassNo:res.gatepassNo,
        gatepassdate:date1,
        paymentmode:res.paymentmode,
        deliveryparty:res.deliveryparty,
        deliverypartydetails:res.deliverypartydetails,
        contractparty:res.contractparty,
        contractpartydetails:res.contractpartydetails,
        CNno:res.CNno,
        CNdate:date2,
        bookingbranch:res.bookingbranch,
        consignor:res.consignor,
        item:res.item,
        packingType:res.packingType,
        godownname:res.godownname,
        virtualgodownname:res.virtualgodownname,
        deliveryarticle:res.deliveryarticle,
        deliveryweight:res.deliveryweight,
        balancearticle:res.balancearticle,
        balanceweight:res.balanceweight,
        rollno:res.rollno,
        handedoverto:res.handedoverto,
        contractNo:res.contractNo,
        vehicleNo:res.vehicleNo,
        GUTKANo:res.GUTKANo,
        remark:res.remark,
      });
      this.ShowPopUp();
    });
  }

  DeleteGodownDelivery(id:number){
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
        this.godownDeliveryService.DeleteGodownDelivery(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.GodownDeliveryList();
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
