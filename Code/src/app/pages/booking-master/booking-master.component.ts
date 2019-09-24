import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlDirective, FormArray } from '@angular/forms';
import { BookingMasterService } from '../../shared/service-proxy/bookingMasterService';
import { BookingModel } from '../../shared/model/BookingModel';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap';
import { GodownMasterService } from '../../shared/service-proxy/godownMasterService';
import { GodownModel } from '../../shared/model/GodownModel';
import { RegularClientMasterService } from '../../shared/service-proxy/regularClientMasterService';
import { RegularClientModel } from '../../shared/model/RegularClientModel';
import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';
import swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { VirtualGodownMasterService } from '../../shared/service-proxy/virtualGodownMasterService';
import { VirtualGodownModel } from '../../shared/model/VirtualGodownModel';
import { PackingMasterServiceService } from '../../shared/service-proxy/packing-master-service.service';
import { PackingModel } from '../../shared/model/PackingModel';
import { forEach } from '@angular/router/src/utils/collection';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-booking-master',
  templateUrl: './booking-master.component.html',
  styleUrls: ['./booking-master.component.scss']
})

export class BookingMasterComponent implements OnInit {

  selctedCn: any;
  packingBookingBox: any[];
  payment: any[];
  singleCnSetting: any;//unnecessary
  packingAll: PackingModel[];
  packingMasterForm: FormGroup;
  AgentName: RegularClientModel[];
  rows: any[] = [];
  dataTable: any;
  modalRef: BsModalRef;
  bm: BookingModel;
  dropdownGoddown: any[] = [];
  dropconsignee: any[] = [];
  title: string;
  editSingleCn: PackingModel = new PackingModel();
  BookingMasterForm: FormGroup;
  GetGodown: GodownModel;
  from: BranchModel[] = [];
  to: BranchModel[] = [];
  PaymentBox = [];
  all: BranchModel[] = [];
  Goddowns: GodownModel[] = [];
  AllConsignee: RegularClientModel[] = [];
  AllGoddowns: GodownModel[] = [];
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: "modal-lg"
  };
  formcontrl: FormControl;
  submitted = false;
  branchMasterForm: FormGroup;
  @ViewChild('template') template: TemplateRef<any>;
  bookingBox: any;
  bookingTypeBox: any;
  freight: any;
  insuredBox: {}[];
  deliveryBox: any;
  modelOfTransportBox: any;
  dropdownSettings = {};
  dynamicSetting: {};
  branchSetting: any;
  godownSetting: { singleSelection: boolean; idField: string; textField: string; allowSearchFilter: boolean; formcontrol: FormGroup; };
  consigneeSetting: { singleSelection: boolean; idField: string; textField: string; allowSearchFilter: boolean; formcontrol: FormGroup; };
  deliveryBranch: any;
  deliverySetting: any;

  agentSetting: { singleSelection: boolean; idField: string; textField: string; allowSearchFilter: boolean; };
  virtualGodownno: VirtualGodownModel[];
  GodownNoSetting: any;

  consigorSetting: any;
  Consignor: any;
  constructor(private fb: FormBuilder, private service: BookingMasterService
    , private changeDetectorRef: ChangeDetectorRef, private modalService: BsModalService,
    private goddownService: GodownMasterService, private consigneeService: RegularClientMasterService,
    private branchService: BranchMasterService, private datePipe: DatePipe,
    private formBuilder: FormBuilder, private virtualGodownService: VirtualGodownMasterService, private packingService: PackingMasterServiceService) { }

  ngOnInit() {
    this.LoadForm();
    // this.validator();
    this.GetBookingList();
    this.FreightBoxes();
    this.InsuredBoxes();
    this.DeliveryBoxes();
    this.ModeOfTransportBoxes();
    this.GoddownAll();
    this.BookingTypeBoxes();
    this.ConsigneeAll();
    this.PaymentBoxes();
    this.fromtoAll();
    this.PackingAll();
    this.virtualGodownAll();
    this.PackingBookingBox();
  }
  GetBookingList() {

    this.service.GetBookings().subscribe((res: BookingModel[]) => {
      this.rows = res;

      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }
  virtualGodownAll() {
    this.virtualGodownService.GetVirtualGodowns().subscribe((res: VirtualGodownModel[]) => {
      this.virtualGodownno = res;
      this.VirtualSetting();
    })
  }

  VirtualSetting() {

    this.GodownNoSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'virtualGodownCode',
      allowSearchFilter: true,
      formcontrol: this.BookingMasterForm
    }

  }
  ShowPopUp() {

    this.modalRef = this.modalService.show(this.template, this.config);
  }
  HidePopUp() {
    this.modalRef.hide();
    this.BookingMasterForm.reset();
    this.LoadForm();
  }
  GoddownAll() {
    this.goddownService.GetGodowns().subscribe((res: GodownModel[]) => {
      this.AllGoddowns = res;
      this.GodownSetting();
    })
  }
  GodownSetting() {

    this.godownSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'godownName',
      allowSearchFilter: true,
      formcontrol: this.BookingMasterForm
    };
  }
  ConsigneeAll() {
    this.consigneeService.GetRegularClients().subscribe((res: RegularClientModel[]) => {
      this.AllConsignee = res;
      this.Consignor = res;
      this.AgentName = res;

      this.ConsigneeSetting();
    })
  }
  ConsigneeSetting() {


    this.consigneeSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'clientCode',
      allowSearchFilter: true,
      formcontrol: this.BookingMasterForm
    };


    this.consigorSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'gstIN',
      allowSearchFilter: true,
    }
    this.agentSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'clientName',
      allowSearchFilter: true
    }
  }

  PackingAll() {
    this.packingService.GetPackings().subscribe((res: PackingModel[]) => {
      this.packingAll = res;
      this.SingleCnSetting();
    })
  }
  SingleCnSetting() {
    this.singleCnSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'packingType',
      allowSearchFilter: true,
    }
  }
  BookingTypeBoxes() {
    this.bookingTypeBox = [
      { id: 1, name: "Sundry" },
      { id: 2, name: "FTL" }
    ];
  }
  PackingBookingBox() {
    this.packingBookingBox = [
      { id: 1, name: "Bundle" },
      { id: 2, name: "Role" },
      { id: 3, name: "Bales" },

    ]
  }
  DeliveryBoxes() {
    this.deliveryBox = [
      { id: 1, name: "Godown Delivery" },
      { id: 2, name: "Door Delivery" }

    ]
  }
  // Static dropdown setting(Start)
  ModeOfTransportBoxes() {
    this.modelOfTransportBox = [
      { id: 1, name: "Surface" },
      { id: 2, name: "Rail" },
      { id: 3, name: "Air" },
      { id: 4, name: " Priority" },
    ];
    this.StaticDropdownSetting();
  }
  StaticDropdownSetting() {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    };

  }
  DynamicDropdownSetting() {
    this.dynamicSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    }
  }

  //Static dropdown ending
  InsuredBoxes() {
    this.insuredBox = [
      { id: 1, name: "CNR" },
      { id: 2, name: "CNE" },
      { id: 3, name: "STSPL" },
      { id: 4, name: "TP" },

    ]

  }
  FreightBoxes() {
    this.freight = [
      { id: 1, name: "Weight" },
      { id: 2, name: "Article" },
      { id: 3, name: "FTL" },
      { id: 4, name: "Volumet" },
    ]
  }
  PaymentBoxes() {
    this.PaymentBox = [{
      id: 1,
      Name: "ToPay"
    },
    {
      id: 2,
      Name: "To be billed"
    },
    {
      id: 3,
      Name: "Paid"
    },
    {
      id: 4,
      Name: "FOC"
    },
    {
      id: 5,
      Name: "Rebook"
    }
    ]
  }
  fromtoAll() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.from = res;
      this.to = res;
      this.all = res;
      this.deliveryBranch = res;
      this.BranchSetting();

    })
  }
  BranchSetting() {

    this.branchSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'branchCode',
      allowSearchFilter: true
    }
    this.deliverySetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'deliveryAgainstAs',
      allowSearchFilter: true
    }



  }


  SaveBooking(Data: BookingModel) {
    debugger
    let from, to, godownNo, deliveryType, consignee, deliveryBranch, agentName, consignor, virtualGoddownNo, bookingType, freightBasis, modeOfTransport;
    //let id = this.BookingMasterForm;
    let id = this.BookingMasterForm.controls.id.value;
    let cn = this.BookingMasterForm.controls.cn.value;
    let fr = this.BookingMasterForm.controls.from.value;
    if (fr[0] != null && fr != 0) {
      fr.forEach(x => {
        from = x.id;
      });
      var fCode = fr;
      for (var i = 0; i < this.from.length; i++) {
        if (this.from[i].branchCode == fCode) {
          from = this.from[i].id;
        }
      }
    }



    let t = this.BookingMasterForm.controls.to.value;
    if (t[0] != null && t !== "") {
      t.forEach(x => {
        to = x.id;
      });
      var tto = t;
      for (var i = 0; i < this.to.length; i++) {
        if (this.to[i].branchCode == tto) {
          to = this.to[i].id;
        }
      }
    }


    let gd = this.BookingMasterForm.controls.godownNo.value;
    let ab;
    if (gd[0] != null && gd !== 0) {
      gd.forEach(x => {
        ab = x.id;
      })
      var gde = gd;
      for (var i = 0; i < this.AllGoddowns.length; i++) {
        if (this.AllGoddowns[i].godownName == gde) {
          ab = this.AllGoddowns[i].id;
        }
      }
    }


    let paymentType = this.BookingMasterForm.controls.paymentType.value;
    let actualWeight = this.BookingMasterForm.controls.actualWeight.value;
    let conse = this.BookingMasterForm.controls.consignee.value;
    if (conse[0] != null && conse != 0) {
      conse.forEach(x => {
        consignee = x.id;
      });

      for (var i = 0; i < this.Consignor.length; i++) {
        if (this.Consignor[i].clientCode == conse) {
          consignee = this.Consignor[i].id;
        }
      }
    }
    let expectedDelivery = this.BookingMasterForm.controls.expectedDelivery.value;

    //second day
    let cnNo = this.BookingMasterForm.controls.cnNo.value;
    let virtualGodd = this.BookingMasterForm.controls.virtualGoddownNo.value;
    if (virtualGodd[0] != null && virtualGodd != 0) {
      virtualGodd.forEach(x => {
        virtualGoddownNo = x.id;
      });
      for (var i = 0; i < this.virtualGodownno.length; i++) {
        if (this.virtualGodownno[i].virtualGodownCode == virtualGodd) {
          virtualGoddownNo = this.virtualGodownno[i].id;
        }
      }
    }
    let consignorDetails = this.BookingMasterForm.controls.consignorDetails.value;
    let consig = this.BookingMasterForm.controls.consignor.value;
    if (consig[0] != null && consig != 0) {
      consig.forEach(x => {
        consignor = x.id;
      });
      for (var i = 0; i < this.Consignor.length; i++) {
        if (this.Consignor[i].gstIN == consig) {
          consignor = this.Consignor[i].id;
        }
      }
    }

    var a;
    let singleCn = this.BookingMasterForm.controls.singleCn.value;
    if (singleCn[0] != null && singleCn != 0) {
      singleCn.forEach(x => {
        if (x.packingType.name != undefined)
          singleCn.packingType = x.packingType.name;
      });
      for (var i = 0; i < singleCn.length; i++) {
        var a = singleCn[i].packingType[0];
        if (a.name == undefined) {
          for (var j = 0; j < 1; j++) {
            singleCn[i].packingType = a;

          }
        }
        if (a.name != undefined) {
          for (var j = 0; j < 1; j++) {
            singleCn[i].packingType = a.name;

          }
        }
      }
    }

    // singleCn[i].packingType[i] = singleCn[0].packingType[0].packingType;
    let agene = this.BookingMasterForm.controls.agentName.value;
    if (agene[0] != null && agene != 0) {
      agene.forEach(x => {
        agentName = x.id;
        //AgentName,branchName
        for (var i = 0; i < this.AgentName.length; i++) {
          if (this.AgentName[i].clientName == agene) {
            agentName = this.AgentName[i].id;
          }
        }
      });
    }
    let agentDetails = this.BookingMasterForm.controls.agentDetails.value;
    let bookType = this.BookingMasterForm.controls.bookingType.value;
    if (bookType[0] != null && bookType != 0) {
      bookType.forEach(x => {
        bookingType = x.name;
        if (bookingType == undefined) {
          bookingType = x;
        }
      });
      //name

    }
    let deltype = this.BookingMasterForm.controls.deliveryType.value;

    if (deltype[0] != null && deltype != '') {
      deltype.forEach(x => {
        deliveryType = x.name;
        if (deliveryType == undefined) {
          deliveryType = x;
        }
      });
    }
    let md = this.BookingMasterForm.controls.modeOfTransport.value;
    if (md[0] != null && md != '') {
      md.forEach(x => {
        modeOfTransport = x.name;
        if (modeOfTransport == undefined) {
          modeOfTransport = x;
        }
      });
    }
    let invoiceNo = this.BookingMasterForm.controls.invoiceNo.value;
    let invoiceValue = this.BookingMasterForm.controls.invoiceValue.value;
    let consignorInvoice = this.BookingMasterForm.controls.consignorInvoice.value;
    let fre = this.BookingMasterForm.controls.freightBasis.value;
    let ftl = this.BookingMasterForm.controls.ftl.value;
    if (fre[0] != null && fre != '') {
      fre.forEach(x => {
        freightBasis = x.name;
        if (freightBasis == undefined) {
          freightBasis = x;
        }
      });
    }

    let isCcAttached = this.BookingMasterForm.controls.isCcAttached.value;
    let isCod = this.BookingMasterForm.controls.isCod.value;
    let chargeWeight = this.BookingMasterForm.controls.chargeWeight.value;
    let freightRate = this.BookingMasterForm.controls.freightRate.value;
    let privateMark = this.BookingMasterForm.controls.privateMark.value;
    let insuredBy = this.BookingMasterForm.controls.insuredBy.value;
    let freight = this.BookingMasterForm.controls.freight.value;
    let surcharge = this.BookingMasterForm.controls.surcharge.value;
    let hamaliCharge = this.BookingMasterForm.controls.hamaliCharge.value;
    let localCartages = this.BookingMasterForm.controls.localCartages.value;
    let doorDeliveryCharge = this.BookingMasterForm.controls.doorDeliveryCharge.value;
    let statisticalCharges = this.BookingMasterForm.controls.statisticalCharges.value;
    let miscellaneousCharges = this.BookingMasterForm.controls.miscellaneousCharges.value;
    let godownCharges = this.BookingMasterForm.controls.godownCharges.value;
    let cod = this.BookingMasterForm.controls.cod.value;
    let riskCharge = this.BookingMasterForm.controls.riskCharge.value;
    let delbh = this.BookingMasterForm.controls.deliveryBranch.value;
    let branch = this.BookingMasterForm.controls.branch.value;
    let reserveReason = this.BookingMasterForm.controls.reserveReason.value;
    let cnFrom = this.BookingMasterForm.controls.cnFrom.value;
    let cnTo = this.BookingMasterForm.controls.cnTo.value;
    let srtoNo = this.BookingMasterForm.controls.srtoNo.value;
    let lotNo = this.BookingMasterForm.controls.lotNo.value;
    let rollNo = this.BookingMasterForm.controls.rollNo.value;
    let meter = this.BookingMasterForm.controls.meter.value;
    let weightInKg = this.BookingMasterForm.controls.weightInKg.value;

    if (delbh[0] != null && delbh != '') {
      delbh.forEach(x => {
        deliveryBranch = x.id;
      });
      for (var i = 0; i < this.deliveryBranch.length; i++) {
        if (this.deliveryBranch[i].deliveryAgainstAs == delbh) {
          deliveryBranch = this.deliveryBranch[i].id;
        }
      }
    }

    let obj = Object.assign({}, this.bm, {

      id: id,
      cn: cn,
      from: from,
      to: to,
      riskCharge: riskCharge,
      godownNo: ab,
      paymentType: paymentType,
      actualWeight: actualWeight,
      consignee: consignee,
      expectedDelivery: expectedDelivery,
      cnNo: cnNo,
      virtualGoddownNo: virtualGoddownNo,
      consignorDetails: consignorDetails,
      consignor: consignor,
      agentName: agentName,
      agentDetails: agentDetails,
      bookingType: bookingType,
      deliveryType: deliveryType,
      modeOfTransport: modeOfTransport,
      invoiceNo: invoiceNo,
      invoiceValue: invoiceValue,
      consignorInvoice: consignorInvoice,
      freightBasis: freightBasis,
      ftl: ftl,
      isCcAttached: isCcAttached,
      isCod: isCod,
      chargeWeight: chargeWeight,
      freightRate: freightRate,
      privateMark: privateMark,
      insuredBy: insuredBy,
      freight: freight,
      surcharge: surcharge,
      hamaliCharge: hamaliCharge,
      localCartages: localCartages,
      doorDeliveryCharge: doorDeliveryCharge,
      statisticalCharges: statisticalCharges,
      miscellaneousCharges: miscellaneousCharges,
      godownCharges: godownCharges,
      cod: cod,
      deliveryBranch: deliveryBranch,
      branch: branch,
      reserveReason: reserveReason,
      cnFrom: cnFrom,
      cnTo: cnTo,
      srtoNo: srtoNo,
      lotNo: lotNo,
      rollNo: rollNo,
      meter: meter,
      weightInKg: weightInKg,
      singleCn: singleCn
    });
    if (this.BookingMasterForm.dirty) {
      this.service.SaveBookings(obj).subscribe((response: any) => {
        this.HidePopUp();
        this.Destroy();
        if (response) {
          swal({
            position: 'center',
            type: 'success',
            title: 'Booking has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
        this.LoadForm();
        this.GetBookingList();
      })
    }
  }
  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }
  LoadForm() {
    this.title = "Add new Booking";
    this.BookingMasterForm = this.fb.group({
      id: [0],
      cn: [''],
      expectedDelivery: [''],
      from: [''],
      to: [''],
      godownNo: [''],
      paymentType: [''],
      actualWeight: [''],
      consignee: ['',],//Validators.required
      cnNo: [''],
      virtualGoddownNo: [''],//,Validators.required
      consignorDetails: ['', Validators.required],
      consignor: [''],//,Validators.required
      agentName: [''],//,Validators.required
      agentDetails: [''],
      bookingType: [''],
      deliveryType: [''],
      modeOfTransport: [''],
      invoiceNo: [''],
      invoiceValue: [''],
      consignorInvoice: [''],
      freightBasis: [''],
      ftl: [''],
      isCcAttached: [''],
      isCod: [''],
      chargeWeight: [''],
      freightRate: [''],
      privateMark: [''],
      insuredBy: [''],
      freight: ['', Validators.required],
      surcharge: [''],
      hamaliCharge: [''],
      localCartages: [''],
      doorDeliveryCharge: [''],
      statisticalCharges: [''],
      miscellaneousCharges: [''],
      godownCharges: [''],
      deliveryBranch: [''],
      cod: [''],
      riskCharge: [''],
      branch: [''],
      reserveReason: [''],
      cnFrom: [''],
      cnTo: [''],
      srtoNo: [''],
      lotNo: [''],
      rollNo: [''],
      meter: [''],
      weightInKg: [''],
      singleCn: this.fb.array([
        this.initCloneForm()
      ])
    });


  }
  initCloneForm() {
    return this.packingMasterForm = this.fb.group({
      id: [''],
      article: [''],
      // quantity:[''],
      item: [''],
      actualWeight1: [''],
      packingType: ['']
    });
  }
  addClone() {
    const control = <FormArray>this.BookingMasterForm.controls['singleCn'];
    control.push(this.initCloneForm());
  }
  removeClone(i) {

    if (i != 0) {
      const control = <FormArray>this.BookingMasterForm.controls['singleCn'];
      control.removeAt(i);
    }

  }
  DeleteBookings(id: number) {
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "you won't be revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.DeleteBooking(id)
          .subscribe(() => {
            this.Destroy();
            this.GetBookingList();
          });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
      else if (result.dismiss === swal.DismissReason.cancel) {
        swalWithBootstrapButtons(
          'Cancelled',
          'Data is safe :)',
          'info'
        )
      }
    })
  }
  initCloneEditForm(singleCn: any) {


    return this.packingMasterForm = this.fb.group({
      id: singleCn.id,
      article: singleCn.article,
      // quantity:[''],
      item: [''],
      actualWeight1: singleCn.actualWeight1,
      packingType: [[singleCn.packingType]]
    });

  }
  ShowData(data: number) {
    debugger
    this.title = "Edit Booking";
    this.service.GetBooking(data).subscribe((res: BookingModel) => {
      var date1 = this.datePipe.transform(res.cn, 'yyyy-MM-dd');
      var date2 = this.datePipe.transform(res.expectedDelivery, 'yyyy-MM-dd');
      var date3 = this.datePipe.transform(res.cnFrom, 'yyyy-MM-dd');
      var date4 = this.datePipe.transform(res.cnTo, 'yyyy-MM-dd');
      for (var i = 0; i < res.singleCn.length; i++) {
        let selectedCn = res.singleCn[i];
        const control = <FormArray>this.BookingMasterForm.controls['singleCn'];
        if (i == 0) {
          control.removeAt(i);
        }
        control.push((this.initCloneEditForm(selectedCn)));
      }

      this.BookingMasterForm.patchValue({
        id: data,
        cn: date1,
        from: [res.fromName],
        to: [res.toName],
        godownNo: [res.godownName],
        paymentType: res.paymentType,
        actualWeight: res.actualWeight,
        consignee: [res.consigneeName],
        expectedDelivery: date2,
        cnNo: res.cnNo,
        virtualGoddownNo: [res.virtualGoddownName],
        consignorDetails: res.consignorDetails,
        consignor: [res.consignorName],
        agentName: [res.clientName],
        agentDetails: res.agentDetails,
        bookingType: [res.bookingType],
        deliveryType: [res.deliveryType],
        modeOfTransport: [res.modeOfTransport],
        invoiceNo: res.invoiceNo,
        invoiceValue: res.invoiceValue,
        consignorInvoice: res.consignorInvoice,
        freightBasis: [res.freightBasis],
        ftl: res.ftl,
        chargeWeight: res.chargeWeight,
        freightRate: res.freightRate,
        privateMark: res.privateMark,
        insuredBy: res.insuredBy,
        freight: res.freight,
        surcharge: res.surcharge,
        hamaliCharge: res.hamaliCharge,
        localCartages: res.localCartages,
        doorDeliveryCharge: res.doorDeliveryCharge,
        statisticalCharges: res.statisticalCharges,
        miscellaneousCharges: res.miscellaneousCharges,
        godownCharges: res.godownCharges,
        cod: res.cod,
        deliveryBranch: [res.deliveryBranchName],
        riskCharge: res.riskCharge,
        branch: res.branch,
        reserveReason: res.reserveReason,
        cnFrom: date3,
        cnTo: date4,
        srtoNo: res.srtoNo,
        lotNo: res.lotNo,
        rollNo: res.rollNo,
        meter: res.meter,
        weightInKg: res.weightInKg,
        isCcAttached: res.isCcAttached,
        isCod: res.isCod,
      });
      this.ShowPopUp();
    })
  }
  get f() { return this.BookingMasterForm.controls; }
}