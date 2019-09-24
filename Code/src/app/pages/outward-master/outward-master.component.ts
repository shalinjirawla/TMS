import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { OutwardModel } from "../../shared/model/OutwardModel";
import { OutwardMasterService } from "../../shared/service-proxy/outwardMasterService";

import { VehicleMasterModel } from '../../shared/model/VehicleMasterModel';
import { VehicleMasterService } from 'app/shared/service-proxy/vehicleMasterService';

import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';

import { VendorModel } from '../../shared/model/VendorModel';
import { VendorMasterService } from 'app/shared/service-proxy/vendorMasterService';

import { DriverModel } from '../../shared/model/DriverMasterModule';
import { DriverMasterService } from '../../shared/service-proxy/driverMasterService';

import { BookingModel } from '../../shared/model/BookingModel';
import { BookingMasterService } from '../../shared/service-proxy/bookingMasterService';

import {DatePipe} from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-outward-master',
  templateUrl: './outward-master.component.html',
  styleUrls: ['./outward-master.component.scss']
})
export class OutwardMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  outwardMasterForm: FormGroup;
  modalRef: BsModalRef;
  Title: string;
  rows: any;
  hk: OutwardModel;
  ChallanType: any[];
  dataTable:any;

  vehicleMasterModels: VehicleMasterModel[] = [];
  branchMasterModel: BranchModel[] = [];
  venderMasterModel: VendorModel[] = [];
  driverMasterModel: DriverModel[] = [];
  bookingMasterModel: BookingModel[] = [];

  truckhirecharegevals: any;
  otherchargevals: any;
  tdsvals = 10;
  TotalAmount: any;
  TDSamount: any;
  totaltruckhire: any;

  private base64textString: String = "";
  public imagePath;
  public imagePath1
  imgURL: any;
  imgURL1:any;
  Fileuploadstring: any;
  Fileuploadstring1: any;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private outwardService: OutwardMasterService,
    private vehicleService: VehicleMasterService,
    private branchService: BranchMasterService,
    private vendorService: VendorMasterService,
    private driverService: DriverMasterService,
    private bookingService: BookingMasterService,
    private changederectoryRef:ChangeDetectorRef,
    private datepipe:DatePipe,
  ) { }

  ngOnInit() {
    this.LoadFrom();
    this.VehicleList();
    this.BranchList();
    this.VendorList();
    this.driverList();
    this.BookingList();
    this.OutwardList();
    // this.OnChallanType();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadFrom();
  }

  VehicleList() {
    this.vehicleService.GetVehicleMasters().subscribe((res: VehicleMasterModel[]) => {
      this.vehicleMasterModels = res;
    })
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.branchMasterModel = res;
    })
  }

  OnChallanType() {
    this.ChallanType = [{
      id: 1,
      Name: 'New',
    }, {
      id: 2,
      Name: 'Attached',
    }]
  }

  VendorList() {
    this.vendorService.vendorModels().subscribe((res: VendorModel[]) => {
      this.venderMasterModel = res;
    })
  }

  driverList() {
    this.driverService.GetDriverModels().subscribe((res: DriverModel[]) => {
      this.driverMasterModel = res;
    })
  }

  BookingList() {
    this.bookingService.GetBookings().subscribe((res: BookingModel[]) => {
      this.bookingMasterModel = res;
    })
  }

  LoadFrom() {
    this.Title = "Add Outward"
    this.outwardMasterForm = this.fb.group({
      id: [0],
      challandate: [''],
      vehicleNo: [''],
      scheduledArriDate:[''],
      vehiclecapacityMT: [''],
      challantype: [''],
      challanNo: [''],
      frombranch: [''],
      tobranch: [''],
      brokerloadingslipno: [''],
      brokername: [''],
      drivername: [''],
      driverlicenceNo: [''],
      drivermobileNo: [''],
      CNno: [''],
      CNdate: [''],
      bookingbranch: [''],
      deliverylocation: [''],
      deliverytype: [''],
      balancepackeges: [''],
      balanceweight: [''],
      loadedpackages: [''],
      loadedweight: [''],
      rollno: [''],
      truckhirechareges: [''],
      othercharges: [''],
      TDS: [''],
      TDSamount: [''],
      totaltruckhire: [''],
      advence: [''],
      advencepayableAt: [''],
      balancepayableAt: [''],
      RC: [''],
      PAN: [''],
      drivinglicenceAttach: [''],
      loadinglicenceAttach: [''],
      TransitDays: [''],
    });
    this.OnChallanType();
  }

  OutwardList() {
    this.outwardService.GetOutwardModels().subscribe((res: OutwardModel[]) => {
      this.rows = res;

      this.changederectoryRef.detectChanges();
      const  table:any =$('table');
      this.dataTable=table.DataTable();
    });
  }

  truckhirechareges(values: number) {
    this.truckhirecharegevals = values;
    this.CalculateRentAmount(this.truckhirecharegevals, this.otherchargevals, this.tdsvals)
  }

  othercharges(values: number) {
    this.otherchargevals = values;
    this.CalculateRentAmount(this.truckhirecharegevals, this.otherchargevals, this.tdsvals)
  }

  TDS(values: number) {
    this.tdsvals = values;
    this.CalculateRentAmount(this.truckhirecharegevals, this.otherchargevals, this.tdsvals)
  }

  CalculateRentAmount(TruckHireValues: any, OtheChargeValues: any, tdsvals: any) {
    debugger
    if (TruckHireValues != null && TruckHireValues != undefined) {
      this.TotalAmount = parseInt(TruckHireValues) + parseInt(OtheChargeValues);
      this.TDSamount = (this.TotalAmount * this.tdsvals)/100;
      
      this.TotalAmount = this.TotalAmount - this.TDSamount;
      this.outwardMasterForm.patchValue({
        TDSamount: this.TDSamount,
        totaltruckhire: this.TotalAmount
      })
    }
  }

  SaveDetail(data: OutwardModel) {
    if (this.outwardMasterForm.valid) {
      let validation: boolean = false;
      let challantype = this.outwardMasterForm.controls.challantype.value;
      let obj = Object.assign({}, this.hk, this.outwardMasterForm.value);
      obj.drivinglicenceAttach = this.Fileuploadstring;
      obj.loadinglicenceAttach = this.Fileuploadstring1;
      validation = true;
      if (validation) {
        this.outwardService.SaveOutward(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Outward has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.OutwardList();
          this.handleFileSelect(event);         
        });
      }
    }
  }

  ShowData(data:number){
    this.Title="Edit Outward",
    this.outwardService.GetOutwardModel(data).subscribe((res:OutwardModel)=>{
      var date1=this.datepipe.transform(res.challandate,'yyyy-MM-dd');
      var date2=this.datepipe.transform(res.CNdate,'yyyy-MM-dd');
      this.imgURL=res.drivinglicenceAttach;
      this.imgURL1=res.loadinglicenceAttach;
      this.outwardMasterForm.patchValue({
        id:res.id,
        challandate:date1,
        vehicleNo:res.vehicleNo,
        vehiclecapacityMT:res.vehiclecapacityMT,
        challantype:res.challantype,
        challanNo:res.challanNo,
        frombranch:res.frombranch,
        tobranch:res.tobranch,
        brokerloadingslipno:res.brokerloadingslipno,
        brokername:res.brokername,
        drivername:res.drivername,
        driverlicenceNo:res.driverlicenceNo,
        drivermobileNo:res.drivermobileNo,
        CNno:res.CNno,
        CNdate:date2,
        bookingbranch:res.bookingbranch,
        deliverylocation:res.deliverylocation,
        deliverytype:res.deliverytype,
        balancepackeges:res.balancepackeges,
        balanceweight:res.balanceweight,
        loadedpackages:res.loadedpackages,
        loadedweight:res.loadedweight,
        rollno:res.rollno,
        truckhirechareges:res.truckhirechareges,
        TDS:res.TDS,
        TDSamount:res.TDSamount,
        totaltruckhire:res.totaltruckhire,
        othercharges:res.othercharges,
        advence:res.advence,
        advencepayableAt:res.advencepayableAt,
        balancepayableAt:res.balancepayableAt,
        RC:res.RC,
        PAN:res.PAN,
        drivinglicenceAttach:res.deliverylocation,
        loadinglicenceAttach:res.loadinglicenceAttach,
        TransitDays:res.TransitDays,
      });
      this.ShowPopUp();
    })
  }

  DeleteOutward(id:number){
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
        this.outwardService.DeleteOutward(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.OutwardList();
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

  handleFileSelect(evt) {
    debugger
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var a = this.getBase64(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = (btoa(binaryString));
  }

  Base64File

  getBase64(file) {
    debugger
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.Base64File = reader.result;
      console.log(this.Base64File)
    };
  }

  preview(files, evt) {
    debugger
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.Fileuploadstring = this.imgURL;
    }
  }
  // fileupload2

  previews(files1, evt) {
    debugger
    if (files1.length === 0)
      return;

    var mimeType1 = files1[0].type;
    if (mimeType1.match(/image\/*/) == null) {
      return;
    }

    var reader1 = new FileReader();
    this.imagePath = files1;
    reader1.readAsDataURL(files1[0]);
    reader1.onload = (_event) => {
      this.imgURL = reader1.result;
      this.Fileuploadstring1 = this.imgURL;
    }
  }

}
