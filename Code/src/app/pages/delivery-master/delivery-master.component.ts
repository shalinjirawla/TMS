import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

import { DeliveryModel } from '../../shared/model/DeliveryModel';
import { DeliveryMasterService } from '../../shared/service-proxy/deliverymasterservice';

import { RegularClientModel } from '../../shared/model/RegularClientModel';
import { RegularClientMasterService } from '../../shared/service-proxy/regularClientMasterService';

import { BookingModel } from '../../shared/model/BookingModel';
import { BookingMasterService } from '../../shared/service-proxy/bookingMasterService';

import { PackingTypeModel } from '../../shared/model/PackingTypeModel';
import { PackingTypemasterService } from '../../shared/service-proxy/packingtypeMasterService';

import { GodownModel } from '../../shared/model/GodownModel';
import { GodownMasterService } from '../../shared/service-proxy/godownMasterService';

import { VirtualGodownModel } from '../../shared/model/VirtualGodownModel';
import { VirtualGodownMasterService } from '../../shared/service-proxy/virtualGodownMasterService';

import {DatePipe} from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-delivery-master',
  templateUrl: './delivery-master.component.html',
  styleUrls: ['./delivery-master.component.scss']
})
export class DeliveryMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  DeliveryMasterForm: FormGroup;
  modalRef: BsModalRef;
  DropdownPaymentMode = [];
  cmd: DeliveryModel;
  rows: any;
  dataTable: any;

  regularModel: RegularClientModel[];
  bookigModel: BookingModel[];
  packingModel: PackingTypeModel[];
  godownModel: GodownModel[];
  virtualgodownModel: VirtualGodownModel[];

  Title: string;

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private deliveryService: DeliveryMasterService,
    private regularService: RegularClientMasterService,
    private bookingService: BookingMasterService,
    private packingTypeService: PackingTypemasterService,
    private godownService: GodownMasterService,
    private virtualgodownService: VirtualGodownMasterService,
    private changeDetectorRef: ChangeDetectorRef,
    private datepipe:DatePipe,
  ) { }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  ngOnInit() {
    this.LoadFrom();
    this.RegularClientList();
    this.BookingList();
    this.PackingTypeList();
    this.GodownList();
    this.VirtualGodownList();
    this.DeliveryList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  HidePopup() {
    this.modalRef.hide();
    this.LoadFrom();
  }

  LoadFrom() {
    this.Title = "Delivery Add";
    this.DeliveryMasterForm = this.fb.group({
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
      predeliveryNo: [''],
      predeliverydate: [''],
      paymentmode1: [''],
      deliveryparty1: [''],
      deliverypartydetails1: [''],
      contractparty1: [''],
      contractpartydetails1: [''],
      CNno1: [''],
      CNdate1: [''],
      bookingbranch1: [''],
      consignoor1: [''],
      item1: [''],
      packingType1: [''],
      godownname1: [''],
      virtualgodownname1: [''],
      deliveryarticle1: [''],
      deliveryweight1: [''],
      balancearticle1: [''],
      balanceweight1: [''],
      rollNo1: [''],
      remark2: [''],
      DDlocalchallanNo: [''],
      DDlocalchallanDate: [''],
      prideliveryNo1: [''],
      Hirecharges: [''],
      vehicleNo1: [''],
      remark1: [''],
      doordeliveryNo: [''],
      CNno2: [''],
      CNdate2: [''],
      bookingbranch2: [''],
      consignor2: [''],
      item2: [''],
      deliveryarticle2: [''],
      deliveryweight2: [''],
      undeliveredarticle: [''],
      undeliveredweight: [''],
      balancearticle2: [''],
      balanceweight2: [''],
      rollno2: [''],
      remark3: [''],
      billNo: [''],
      billdate: [''],
      CNno3: [''],
      CNdate3: [''],
      bookingbranch3: [''],
      deliverybranch1: [''],
      article: [''],
      actualweight: [''],
      chargeweight: [''],
      freightdetails: [''],
      paymentmode2: [''],
      amount: [''],
      chequeNo: [''],
      chequedate: [''],
      amount1: [''],
      remark4: [''],
    })
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
    this.bookingService.GetBookings().subscribe((res: BookingModel[]) => {
      this.bookigModel = res;
    })
  }

  PackingTypeList() {
    this.packingTypeService.GetPackingTypes().subscribe((res: PackingTypeModel[]) => {
      this.packingModel = res;
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

  DeliveryList() {
    this.deliveryService.GetDeliveryModels().subscribe((res: DeliveryModel[]) => {
      this.rows = res;

      this.changeDetectorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail(data: DeliveryModel) {
    if (this.DeliveryMasterForm.valid) {
      let validation: boolean = false;
      let paymentmode = this.DeliveryMasterForm.controls.paymentmode.value;
      // let paymentmode1 = this.DeliveryMasterForm.controls.packingType1.value;
      // let paymentmode2 = this.DeliveryMasterForm.controls.packingType2.value;
      let obj = Object.assign({}, this.cmd, this.DeliveryMasterForm.value)
      validation = true;
      if (validation) {
        debugger
        this.deliveryService.SaveDelivery(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Delivery has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.HidePopup();
          this.DeliveryList();
        });
      }
    }
  }

  ShowData(data:number){
    debugger
    this.Title="Edit Delivery";
    this.deliveryService.GetDeliveryModel(data).subscribe((res:DeliveryModel)=>{
      var date=this.datepipe.transform(res.gatepassdate,'yyyy-MM-dd');
      var date1=this.datepipe.transform(res.CNdate,'yyyy-MM-dd');
      var date2=this.datepipe.transform(res.predeliverydate,'yyy-MM-dd');
      var date3=this.datepipe.transform(res.CNdate1,'yyyy-MM-dd');
      var date4=this.datepipe.transform(res.DDlocalchallanDate,'yyyy-MM-dd');
      var date5=this.datepipe.transform(res.billdate,'yyyy-MM-dd');
      var date6=this.datepipe.transform(res.chequedate,'yyyy-MM-dd');
      var date7=this.datepipe.transform(res.CNdate2,'yyyy-MM-dd');
      var date8=this.datepipe.transform(res.CNdate3,'yyyy-MM-dd');
      this.DeliveryMasterForm.patchValue({
        id:res.id,
        gatepassNo:res.gatepassNo,
        gatepassdate:date,
        paymentmode:res.paymentmode,
        deliveryparty:res.deliveryparty,
        deliverypartydetails:res.deliverypartydetails,
        contractparty:res.contractparty,
        contractpartydetails:res.contractpartydetails,
        CNno:res.CNno,
        CNdate:date1,
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
        predeliveryNo:res.predeliveryNo,
        predeliverydate:date2,
        paymentmode1:res.paymentmode1,
        deliveryparty1:res.deliveryparty1,
        deliverypartydetails1:res.deliverypartydetails1,
        contractparty1:res.contractparty1,
        contractpartydetails1:res.contractpartydetails1,
        CNno1:res.CNno1,
        CNdate1:date3,
        bookingbranch1:res.bookingbranch1,
        consignoor1:res.consignoor1,
        item1:res.item1,
        packingType1:res.packingType1,
        godownname1:res.godownname1,
        virtualgodownname1:res.virtualgodownname1,
        deliveryarticle1:res.deliveryarticle1,
        deliveryweight1:res.deliveryweight1,
        balancearticle1:res.balancearticle1,
        balanceweight1:res.balanceweight1,
        rollNo1:res.rollNo1,
        remark1:res.remark1,
        DDlocalchallanNo:res.DDlocalchallanNo,
        DDlocalchallanDate:date4,
        prideliveryNo1:res.prideliveryNo1,
        Hirecharges:res.Hirecharges,
        vehicleNo1:res.vehicleNo1,
        remark2:res.remark2,
        doordeliveryNo:res.doordeliveryNo,
        CNno2:res.CNno2,
        CNdate2:date7,
        bookingbranch2:res.bookingbranch2,
        consignor2:res.consignor2,
        item2:res.item2,
        deliveryarticle2:res.deliveryarticle2,
        deliveryweight2:res.deliveryweight2,
        undeliveredarticle:res.undeliveredarticle,
        undeliveredweight:res.undeliveredweight,
        balancearticle2:res.balancearticle2,
        balanceweight2:res.balanceweight2,
        rollno2:res.rollno2,
        remark3:res.remark3,
        billNo:res.billNo,
        billdate:date5,
        CNno3:res.CNno3,
        CNdate3:date8,
        bookingbranch3:res.bookingbranch3,
        deliverybranch1:res.deliverybranch1,
        article:res.article,
        actualweight:res.actualweight,
        chargeweight:res.chargeweight,
        freightdetails:res.freightdetails,
        paymentmode2:res.paymentmode2,
        amount:res.amount,
        chequeNo:res.chequeNo,
        chequedate:date6,
        amount1:res.amount1,
        remark4:res.remark4,
      })
      this.ShowPopUp();
    })
  }

  DeleteDelivery(id:number){
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
        this.deliveryService.DeleteDelivery(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.DeliveryList();
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
