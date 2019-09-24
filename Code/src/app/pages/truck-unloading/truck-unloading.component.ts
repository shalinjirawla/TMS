import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { TruckUnloadingModel } from '../../shared/model/TruckUnloadingModel';
import { TruckUnloadingService } from '../../shared/service-proxy/truckunloadingService';

import { BookingModel } from '../../shared/model/BookingModel';
import { BookingMasterService } from '../../shared/service-proxy/bookingMasterService';

import { PackingTypeModel } from '../../shared/model/PackingTypeModel';
import { PackingTypemasterService } from '../../shared/service-proxy/packingtypeMasterService';

import { CommodityModel } from '../../shared/model/CommodityModel';
import { CommoditymasterService } from '../../shared/service-proxy/commodityMasterService';

import { GodownModel } from '../../shared/model/GodownModel';
import { GodownMasterService } from '../../shared/service-proxy/godownMasterService';

import { VirtualGodownModel } from '../../shared/model/VirtualGodownModel';
import { VirtualGodownMasterService } from '../../shared/service-proxy/virtualGodownMasterService';

import { VehicleMasterModel } from '../../shared/model/VehicleMasterModel';
import { VehicleMasterService } from '../../shared/service-proxy/vehicleMasterService';

import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-truck-unloading',
  templateUrl: './truck-unloading.component.html',
  styleUrls: ['./truck-unloading.component.scss']
})
export class TruckUnloadingComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;
  rows: any;
  Title: string;

  random:number;
  random1:number;
  // clicked = false;

  ReceivedConditionCheckbox: any[]
  bookingModel: any[];
  packingTypeModel: any[];
  commodityModel: any[];
  godownModel: any[];
  virtualgodownModel: any[];
  vehicleModel: any[];
  datetable: any;
  hk: any;

  TruckUnloadingForm: FormGroup;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(
    private bf: FormBuilder,
    private modalService: BsModalService,
    private changedetecorRef: ChangeDetectorRef,
    private truckunloadingService: TruckUnloadingService,
    private bookingService: BookingMasterService,
    private packingTypeService: PackingTypemasterService,
    private commodityService: CommoditymasterService,
    private godownService: GodownMasterService,
    private virtualService: VirtualGodownMasterService,
    private vehicleService: VehicleMasterService,
    private datepipe: DatePipe,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.BookingList();
    this.PackingList();
    this.GodownList();
    this.CommodityList();
    this.VirtualGodownList();
    this.VehicleList();
    this.TruckUnloadingList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
    this.getRandomInt(48759162);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Truck Unloading";
    this.TruckUnloadingForm = this.bf.group({
      id: [0],
      truckUnloadingNo: [''],
      truckUnloadingDate: [''],
      vehicleNo: [''],
      truckArrivalNo: [''],
      truckArrivalDate: [''],
      challanNo: [''],
      CNNo: [''],
      CNDate: [''],
      bookingBranch: [''],
      deliveryLocation: [''],
      article: [''],
      loadedArticle: [''],
      loadedWeight: [''],
      receivedArticle: [''],
      receivedWeight: [''],
      godown: [''],
      virtualGodown: [''],
      receivedCondition: [''],
      damageLeakageArticle: [''],
      damageLeakageWeight: [''],
      damageLeakageValue: [''],
      DDbySame: [''],
      rollno: [''],
      vehicleArrivalDate: [''],
      vehicleExpectedUploadDate: [''],
      vehicleActualUploadDate: [''],
      remark1: [''],
      GRNo: [''],
      consignor: [''],
      consignee: [''],
      packingType: [''],
      commodity: [''],
      ArticleRollNo: [''],
      meter: [''],
      weight: [''],
      sortNo: [''],
      lotNo: [''],
      remark2: [''],
    });
    this.OnReceivedCondition();
  }

  OnReceivedCondition() {
    this.ReceivedConditionCheckbox = [{
      id: 1,
      Name: 'OK',
    }, {
      id: 2,
      Name: 'Damage',
    }, {
      id: 3,
      Name: 'Leakage',
    }]
  }

  getRandomInt(max) {
    debugger
    this.random = Math.floor(Math.random() * Math.floor(max));
    // this.InwardMasterForm.controls['truckArrivalNo'].setValue(this.random);
    this.TruckUnloadingForm.controls['truckUnloadingNo'].setValue(this.random)
  }

  VehicleList() {
    this.vehicleService.GetVehicleMasters().subscribe((res: VehicleMasterModel[]) => {
      this.vehicleModel = res;
    })
  }

  BookingList() {
    this.bookingService.GetBookings().subscribe((res: BookingModel[]) => {
      this.bookingModel = res;
    })
  }

  PackingList() {
    this.packingTypeService.GetPackingTypes().subscribe((res: PackingTypeModel[]) => {
      this.packingTypeModel = res;
    })
  }

  CommodityList() {
    this.commodityService.GetCommodities().subscribe((res: CommodityModel[]) => {
      this.commodityModel = res;
    })
  }

  GodownList() {
    this.godownService.GetGodowns().subscribe((res: GodownModel[]) => {
      this.godownModel = res;
    })
  }

  VirtualGodownList() {
    this.virtualService.GetVirtualGodowns().subscribe((res: VirtualGodownModel[]) => {
      this.virtualgodownModel = res;
    })
  }

  TruckUnloadingList() {
    this.truckunloadingService.GetTruckUnloadingModels().subscribe((res: TruckUnloadingModel[]) => {
      this.rows = res;

      this.changedetecorRef.detectChanges();
      const table: any = $('table');
      this.datetable = table.DataTable();
    })
  }

  SaveDetail() {
    debugger
    if (this.TruckUnloadingForm.valid) {
      let validation: boolean = false;
      let receivedCondition = this.TruckUnloadingForm.controls.receivedCondition.value;
      let obj = Object.assign({}, this.hk, this.TruckUnloadingForm.value);
      validation = true;
      if (validation) {
        this.truckunloadingService.SaveTruckUnloading(obj).subscribe((Response: boolean) => {
          this.hidepopup();
          this.Destroy();
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Truck Unloading has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }

          this.TruckUnloadingList();
        })
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit Inward";
    this.truckunloadingService.GetTruckUnloadingModel(data).subscribe((res: TruckUnloadingModel) => {
      var date4 = this.datepipe.transform(res.truckArrivalDate, 'yyyy-MM-dd');
      var date5 = this.datepipe.transform(res.truckArrivalDate, 'yyyy-MM-dd');
      var date6 = this.datepipe.transform(res.CNDate, 'yyyy-MM-dd');
      var date7 = this.datepipe.transform(res.vehicleArrivalDate, 'yyyy-MM-dd');
      var date8 = this.datepipe.transform(res.vehicleExpectedUploadDate, 'yyyy-MM-dd');
      var date9 = this.datepipe.transform(res.vehicleActualUploadDate, 'yyyy-MM-dd');
      this.TruckUnloadingForm.patchValue({
        id: res.id,
        truckUnloadingNo: res.truckUnloadingNo,
        truckUnloadingDate: date4,
        vehicleNo: res.vehicleNo,
        truckArrivalNo: res.truckArrivalNo,
        truckArrivalDate: date5,
        challanNo: res.challanNo,
        CNNo: res.CNNo,
        CNDate: date6,
        bookingBranch: res.bookingBranch,
        deliveryLocation: res.deliveryLocation,
        article: res.article,
        loadedArticle: res.loadedArticle,
        loadedWeight: res.loadedWeight,
        receivedArticle: res.receivedArticle,
        receivedWeight: res.receivedWeight,
        godown: res.godown,
        virtualGodown: res.virtualGodown,
        receivedCondition: res.receivedCondition,
        damageLeakageArticle: res.damageLeakageArticle,
        damageLeakageWeight: res.damageLeakageWeight,
        damageLeakageValue: res.damageLeakageValue,
        DDbySame: res.DDbySame,
        rollno: res.rollno,
        vehicleArrivalDate: date7,
        vehicleExpectedUploadDate: date8,
        vehicleActualUploadDate: date9,
        remark1: res.remark1,
        GRNo: res.GRNo,
        consignor: res.consignor,
        consignee: res.consignee,
        packingType: res.packingType,
        commodity: res.commodity,
        ArticleRollNo: res.ArticleRollNo,
        meter: res.meter,
        weight: res.weight,
        sortNo: res.sortNo,
        lotNo: res.lotNo,
        remark2: res.remark2,
      });
      this.ShowPopUp();
    });
  }

  DeleteTruckUnloading(id: number) {
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
        this.truckunloadingService.DeleteTruckUnloading(id)
          .subscribe((Response: boolean) => {
            this.Destroy();
            this.TruckUnloadingList();
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

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  public Validator(event: any) {
    const pattern = /^[0-9.]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
  }
}
