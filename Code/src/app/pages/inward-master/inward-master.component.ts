import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

import { InwardModel } from '../../shared/model/InwardModel';
import { InwardMasterService } from '../../shared/service-proxy/inward-master.service';

import { VehicleMasterModel } from '../../shared/model/VehicleMasterModel';
import { VehicleMasterService } from '../../shared/service-proxy/vehicleMasterService';

import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';

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

import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-inward-master',
  templateUrl: './inward-master.component.html',
  styleUrls: ['./inward-master.component.scss']
})
export class InwardMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  InwardMasterForm: FormGroup;

  vehicleModel: VehicleMasterModel[];
  branchModel: BranchModel[];
  bookingModel: BookingModel[];
  packingTypeModel: PackingTypeModel[];
  commodityModel: CommodityModel[];
  godownModel: GodownModel[];
  virtualgodownModel: VirtualGodownModel[];
  rows: any;
  dataTable: any;
  hk: InwardModel;
  ReceivedConditionCheckbox: any[];
  max:number;

  random:number;
  random1:number;
  clicked = false;

  public autoCorrect: boolean = false;
  public value: number = 5;

  modalRef: BsModalRef;
  Title: string;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(private modalServiceRef: BsModalService,
    private fb: FormBuilder,
    private inwardService: InwardMasterService,
    private vehicleService: VehicleMasterService,
    private branchService: BranchMasterService,
    private bookingService: BookingMasterService,
    private packingTypeService: PackingTypemasterService,
    private commodityService: CommoditymasterService,
    private godownService: GodownMasterService,
    private virtualService: VirtualGodownMasterService,
    private changedecterRef: ChangeDetectorRef,
    private datepipe: DatePipe,
  ) { }

  ngOnInit() {
    this.LoadFrom();
    this.VehicleList();
    this.BranchList();
    this.BookingList();
    this.PackingList();
    this.CommodityList();
    this.GodownList();
    this.VirtualGodownList();
    this.InwardList();
    // this.OnReceivedCondition();
  }

  ShowPopUp() {
    this.modalRef = this.modalServiceRef.show(this.template, this.config)
    this.getRandomInt(48759162);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadFrom();
  }

  LoadFrom() {
    this.Title = "Add Inward";
    this.InwardMasterForm = this.fb.group({
      id: [0],
      truckArrivalNo: [''],
      truckArrivalDate: [''],
      vehicleNo: [''],
      challanNo: [''],
      challanDate: [''],
      challanFrom: [''],
      challanTo: [''],
      scheduledArriDate: [''],
      expectedUnloadingTime: [''],
      Remark: [''],
      truckUnloadingNo: [''],
      truckUnloadingDate: [''],
      vehicleNo1: [''],
      truckArrivalNo1: [''],
      truckArrivalDate1: [''],
      challanNo1: [''],
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

  InwardList() {
    this.inwardService.GetInwardModels().subscribe((res: InwardModel[]) => {
      this.rows = res;

      this.changedecterRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  getRandomInt(max) {
    debugger
    this.random = Math.floor(Math.random() * Math.floor(max));
    this.InwardMasterForm.controls['truckArrivalNo'].setValue(this.random);
    this.InwardMasterForm.controls['truckUnloadingNo'].setValue(this.random)
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

  SaveDetail(data: InwardModel) {
    debugger
    if (this.InwardMasterForm.valid) {
      let validation: boolean = false;
      let receivedCondition = this.InwardMasterForm.controls.receivedCondition.value;
      let obj = Object.assign({}, this.hk, this.InwardMasterForm.value);
      validation = true;
      if (validation) {
        this.inwardService.SaveInward(data).subscribe((Response: boolean) => {
          this.hidepopup();
          this.Destroy();
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Outward has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          
          this.InwardList();
        })
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit Inward";
    this.inwardService.GetInwardMaster(data).subscribe((res: InwardModel) => {
      var date1 = this.datepipe.transform(res.truckArrivalDate, 'yyyy-MM-dd');
      var date2 = this.datepipe.transform(res.challanDate, 'yyyy-MM-dd');
      var date3 = this.datepipe.transform(res.scheduledArriDate, 'yyyy-MM-dd');
      var date4 = this.datepipe.transform(res.truckArrivalDate, 'yyyy-MM-dd');
      var date5 = this.datepipe.transform(res.truckArrivalDate1, 'yyyy-MM-dd');
      var date6 = this.datepipe.transform(res.CNDate, 'yyyy-MM-dd');
      var date7 = this.datepipe.transform(res.vehicleArrivalDate, 'yyyy-MM-dd');
      var date8 = this.datepipe.transform(res.vehicleExpectedUploadDate, 'yyyy-MM-dd');
      var date9 = this.datepipe.transform(res.vehicleActualUploadDate, 'yyyy-MM-dd');
      this.InwardMasterForm.patchValue({
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
        truckUnloadingNo: res.truckUnloadingNo,
        truckUnloadingDate: date4,
        vehicleNo1: res.vehicleNo1,
        truckArrivalNo1: res.truckArrivalNo1,
        truckArrivalDate1: date5,
        challanNo1: res.challanNo1,
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

  DeleteInward(id: number) {
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
        this.inwardService.DeleteInward(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.InwardList();
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
