import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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

import {PreDeliveryModel} from '../../shared/model/PreDeliveryModel';
import {PreDeliveryService} from '../../shared/service-proxy/predeliveryService'

import { DatePipe } from '@angular/common';
import { PreDeliveryModule } from './pre-delivery.module';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-pre-delivery',
  templateUrl: './pre-delivery.component.html',
  styleUrls: ['./pre-delivery.component.scss']
})
export class PreDeliveryComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  Title: string;
  cmd: any;
  rows: any[];
  dataTable: any;

  modalRef: BsModalRef;
  PreDeliveryForm:FormGroup;

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

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private changedetecterRef: ChangeDetectorRef,
    private predeliveryService:PreDeliveryService ,
    private regularService: RegularClientMasterService,
    private reserveService: ReserveOperationService,
    private packingTypeService: PackingTypemasterService,
    private godownService: GodownMasterService,
    private virtualgodownService: VirtualGodownMasterService,
    private datepipe:DatePipe,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.RegularClientList();
    this.BookingList();
    this.PackingTypeList();
    this.GodownList();
    this.VirtualGodownList();
    this.PreDeliveryList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm(){
    this.Title="Add Pre Delivery"
    this.PreDeliveryForm=this.fb.group({
      id:[''],
      predeliveryNo: [''],
      predeliverydate: [''],
      paymentmode: [''],
      deliveryparty: [''],
      deliverypartydetails: [''],
      contractparty: [''],
      contractpartydetails: [''],
      CNno: [''],
      CNdate: [''],
      bookingbranch: [''],
      consignoor: [''],
      item: [''],
      packingType: [''],
      godownname: [''],
      virtualgodownname: [''],
      deliveryarticle: [''],
      deliveryweight: [''],
      balancearticle: [''],
      balanceweight: [''],
      rollNo: [''],
      remark: [''],
    })
    this.PaymentModeList();
    this.RegularClientList();
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

  PreDeliveryList(){
    this.predeliveryService.GetPreDeliveryModels().subscribe((res:PreDeliveryModel[])=>{
      this.rows=res;

      this.changedetecterRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail() {
    if (this.PreDeliveryForm.valid) {
      let validation: boolean = false;
      let paymentmode = this.PreDeliveryForm.controls.paymentmode.value;
      // let paymentmode1 = this.DeliveryMasterForm.controls.packingType1.value;
      // let paymentmode2 = this.DeliveryMasterForm.controls.packingType2.value;
      let obj = Object.assign({}, this.cmd, this.PreDeliveryForm.value)
      validation = true;
      if (validation) {
        debugger
        this.predeliveryService.SavePreDeliveryModel(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Pre Delivery has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.PreDeliveryList();
        });
      }
    }
  }

  ShowData(data){
    this.Title="Edit Godown Delivery",
    this.predeliveryService.GetPreDeliveryModel(data).subscribe((res:PreDeliveryModel)=>{
      var date1=this.datepipe.transform(res.predeliverydate,'yyyy-MM-dd');
      var date2=this.datepipe.transform(res.CNdate,'yyyy-MM-dd');
      this.PreDeliveryForm.patchValue({
        id:res.id,
        predeliveryNo:res.predeliveryNo,
        predeliverydate:date1,
        paymentmode:res.paymentmode,
        deliveryparty:res.deliveryparty,
        deliverypartydetails:res.deliverypartydetails,
        contractparty:res.contractparty,
        contractpartydetails:res.contractpartydetails,
        CNno:res.CNno,
        CNdate:date2,
        bookingbranch:res.bookingbranch,
        consignoor:res.consignoor,
        item:res.item,
        packingType:res.packingType,
        godownname:res.godownname,
        virtualgodownname:res.virtualgodownname,
        deliveryarticle:res.deliveryarticle,
        deliveryweight:res.deliveryweight,
        balancearticle:res.balancearticle,
        balanceweight:res.balanceweight,
        rollNo:res.rollNo,
        remark:res.remark,
      });
      this.ShowPopUp();
    });
  }

  DeletePreDelivery(id:number){
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
        this.predeliveryService.DeletePreDelivery(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.PreDeliveryList();
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
