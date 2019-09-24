import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlDirective, FormArray } from "@angular/forms";
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';
import { RegularClientModel } from '../../shared/model/RegularClientModel';
import { RegularClientMasterService } from '../../shared/service-proxy/regularClientMasterService';
import { CityMasterService } from '../../shared/service-proxy/cityMasterService';
import { StateMasterService } from '../../shared/service-proxy/stateMasterService';
import { CityModel } from '../../shared/model/CityModel';
import { StateModel } from '../../shared/model/StateModel';
import { BankMasterModel } from '../../shared/model/BankMasterModel';
import { BankMasterServiceService } from '../../shared/service-proxy/bank-master-service.service';
import { Contact_info } from '../../shared/model/Contact_info';
import { RegularClientMasterModule } from './regular-client-master.module';
import { DatePipe } from '@angular/common';
const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});


@Component({
  selector: 'app-regular-client-master',
  templateUrl: './regular-client-master.component.html',
  styleUrls: ['./regular-client-master.component.scss']
})

export class RegularClientMasterComponent implements OnInit {


  @ViewChild('template') template: TemplateRef<any>;
  RegularClientMasterForm: FormGroup;
  Contact_infoForm: FormGroup;
  AddContactForm: FormGroup;
  RCM: RegularClientModel;
  empList: any[] = []
  rows: any[];
  bankLsit: BankMasterModel[] = [];
  dataTable: any;
  Title: string;
  AllCities: CityModel[] = [];
  cities: CityModel[] = [];
  states: StateModel[] = [];
  BankData: BankMasterModel[] = [];
  DeliveryCheckboxesCNR: any[];
  DeliveryCheckboxesCNE: any[];
  PaymentModeChechbox: any[];
  BookingTypeChechbox: any[];
  DeliveryTypeChechbox: any[];
  AlertChechbox: any[];
  dropdownbranch: BranchModel[] = [];
  branchSetting = {};
  contactInfo: string[];
  InsuranceDetailsChechbox: any[];
  modalRef: BsModalRef;

  ChangedDelivCHeckboxesPayment = [];
  ChangedServCHeckboxesBooking = [];
  ChangedServCHeckboxesDeliveryCNR = [];
  ChangedServCHeckboxesDeliveryCNE = [];
  ChangedServCHeckboxesDelivery = [];

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  Branches: BranchModel[] = [];

  constructor(private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: BsModalService,
    private branchService: BranchMasterService,
    private regularClientService: RegularClientMasterService,
    private cityService: CityMasterService,
    private service: StateMasterService,
    private bankservice: BankMasterServiceService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.BranchList();
    this.RegularClientList();
    this.CitiesList();
    this.StatesList();
    this.BankList();
    this.LoadForm();
    this.LoadCheckBoxesCNR();
    this.LoadCheckBoxesCNE();
    // this.LoadCheckBoxesPaymentMode();
    this.LoadCheckBoxesBookingType();
    this.LoadCheckBoxesDeliveryType();
    this.LoadCheckBoxesInsuranceDetail();
    this.LoadCheckBoxesAlertchechbox();
    this.LoadCheckBoxesPaymentmode();

  }
  LoadCheckBoxesCNR() {
    this.DeliveryCheckboxesCNR = [{
      id: 1,
      Name: "CC",
      Selected: false,
      formControlName: 'CC',
    }, {
      id: 2,
      Name: "DACC Cancelled",
      Selected: false,
      formControlName: 'DACC',
    }, {
      id: 3,
      Name: "COD",
      Selected: false,
      formControlName: 'COD',
    }, {
      id: 4,
      Name: "Agent Letter",
      Selected: false,
      formControlName: 'Agent',
    }];

  }
  LoadCheckBoxesCNE() {
    this.DeliveryCheckboxesCNE = [{
      id: 1,
      Name: "CC",
      Selected: false,
      formControlName: 'CC',
    }, {
      id: 2,
      Name: "DACC Cancelled",
      Selected: false,
      formControlName: 'DACC',
    }, {
      id: 3,
      Name: "COD",
      Selected: false,
      formControlName: 'COD',
    }, {
      id: 4,
      Name: "Agent Letter",
      Selected: false,
      formControlName: 'Agent',
    }];

  }
  LoadCheckBoxesBookingType() {
    this.BookingTypeChechbox = [{
      id: 1,
      Name: "Sundry",
      Selected: false,
      formControlName: 'Sundry',
    }, {
      id: 2,
      Name: "FTL",
      Selected: false,
      formControlName: 'FTL',
    }];
  }
  LoadCheckBoxesPaymentmode() {
    this.PaymentModeChechbox = [{
      id: 1,
      Name: "Topay",
      Selected: false,
      formControlName: 'Topay',
    }, {
      id: 2,
      Name: "TBB",
      Selected: false,
      formControlName: 'TBB',
    }, {
      id: 3,
      Name: "Paid",
      Selected: false,
      formControlName: 'Paid',
    },
    {
      id: 4,
      Name: "FOC",
      Selected: false,
      formControlName: 'FOC',
    }];

  }
  LoadCheckBoxesDeliveryType() {
    this.DeliveryTypeChechbox = [{
      id: 1,
      Name: "Godown",
      Selected: false,
      formControlName: 'Godown',
    }, {
      id: 2,
      Name: "Door",
      Selected: false,
      formControlName: 'Door',
    }];
  }

  LoadCheckBoxesInsuranceDetail() {
    this.InsuranceDetailsChechbox = [{
      id: 1,
      Name: "Is Marine Insured",
      Selected: false,
      formControlName: 'isMarineInsured',
    }, {
      id: 2,
      Name: "Is Godown Insured",
      Selected: false,
      formControlName: 'isGodownInsured',
    }];

  }
  LoadCheckBoxesAlertchechbox() {
    this.AlertChechbox = [{
      id: 1,
      Name: "Email Alert",
      Selected: false,
      formControlName: 'emailAlert',
    }, {
      id: 2,
      Name: "SMS Alert",
      Selected: false,
      formControlName: 'smsAlert',
    }];
  }

  LoadForm() {
    this.Title = "Add New Regular Master";
    this.RegularClientMasterForm = this.fb.group({
      id: [0],
      branchId: [0],
      clientCode: [''],
      clientName: [''],
      clientGroupId: [],
      pan: [],
      gstIN: [],
      address: [''],
      cityId: [0],
      pinCode: [],
      StateId: [0],
      phoneNo: [],
      mobileNo: [],
      emailAlert: [''],
      smsAlert: [''],
      RegularClient_Contact_info: this.fb.array([
        this.initCloneForm()
      ]),
      deliveryAgainstAsCnr: this.fb.group({
        'CC': [],
        'DACC': [],
        'COD': [],
        'Agent': [],
      }),
      deliveryAgainstAsCne: this.fb.group({
        'CC': [],
        'DACC': [],
        'COD': [],
        'Agent': [],
      }),
      ledgerName: [''],
      days: [],
      amount: [],
      interest: [],
      creditGraceDays: [],
      bankId: [0],
      ifsc: [0],
      accountNo: [],
      chequeInTheNameOf: [''],
      companyNo: [''],
      policyNo: [''],
      validFromDate: [],
      validToDate: [],
      insuranceAmount: [],
      isMarineInsured: [''],
      isGodownInsured: [''],
      paymentMode: this.fb.group({
        'Topay': [],
        'TBB': [],
        'Paid': [],
        'FOC': [],
      }),
      bookingType: this.fb.group({
        'Sundry': [],
        'FTL': [],
      }),
      deliveryType: this.fb.group({
        'Godown': [],
        'Door': [],
      }),
      multipleBillingBranches: [],
      remark: [''],
    });
    this.LoadCheckBoxesCNR();
    this.LoadCheckBoxesCNE();
    this.LoadCheckBoxesBookingType();
    this.LoadCheckBoxesDeliveryType();
    this.LoadCheckBoxesPaymentmode();
  }
  initCloneForm() {
    return this.Contact_infoForm = this.fb.group({
      id: [''],
      client_id: [''],
      Department: [''],
      MobileNo: [''],
      EmailId: [''],
    });
  }
  addClone() {
    const control = <FormArray>this.RegularClientMasterForm.controls['RegularClient_Contact_info'];
    control.push(this.initCloneForm());
  }
  removeClone(i) {

    if (i != 0) {
      const control = <FormArray>this.RegularClientMasterForm.controls['RegularClient_Contact_info'];
      control.removeAt(i);
    }

  }
  BranchSetting() {
    this.branchSetting = {
      idField: 'id',
      textField: 'branchCode',
      allowSearchFilter: true,
      formcontrol: this.RegularClientMasterForm
    }

  }
  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.Branches = res;
      this.dropdownbranch = res;
      this.BranchSetting();
    });
  }

  RegularClientList() {
    this.regularClientService.GetRegularClients().subscribe((res: RegularClientModel[]) => {
      this.rows = res;

      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }


  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  HidePopUp() {
    this.modalRef.hide();
    this.LoadForm();
  }

  onCheckboxChangePayment(id, event) {
    if (event.currentPage.checked == false) {
      this.ChangedDelivCHeckboxesPayment = this.ChangedDelivCHeckboxesPayment.filter(function (index) {
        return (index != id.id);
      });
    }
    else {
      this.ChangedDelivCHeckboxesPayment.push(id.id);
      console.log(this.ChangedDelivCHeckboxesPayment.join(","));
    }
  }

  onCheckboxChangeBooking(id, event) {
    if (event.currentPage.checked == false) {
      this.ChangedServCHeckboxesBooking = this.ChangedServCHeckboxesBooking.filter(function (index) {
        return (index != id.id);
      });
    }
    else {
      this.ChangedServCHeckboxesBooking.push(id.id);
    }
  }

  onCheckboxChangeDelivery(id, event) {
    if (event.currentPage.checked == false) {
      this.ChangedServCHeckboxesDeliveryCNR = this.ChangedServCHeckboxesDeliveryCNR.filter(function (index) {
        return (index != id.id);
      });
    }
    else {
      this.ChangedServCHeckboxesDeliveryCNR.push(id.id);
    }
  }

  onCheckboxChangeDeliveryCNR(id, event) {
    if (event.currentPage.checked == false) {
      this.ChangedServCHeckboxesDeliveryCNE = this.ChangedServCHeckboxesDeliveryCNE.filter(function (index) {
        return (index != id.id);
      });
    }
    else {
      this.ChangedServCHeckboxesDeliveryCNE.push(id.id);
    }
  }

  onCheckboxChangeDeliveryCNE(id, event) {
    if (event.currentPage.checked == false) {
      this.ChangedServCHeckboxesDelivery = this.ChangedServCHeckboxesDelivery.filter(function (index) {
        return (index != id.id);
      });
    }
    else {
      this.ChangedServCHeckboxesDelivery.push(id.id);
    }
  }

  SaveDetail() {
    debugger

    if (this.RegularClientMasterForm.valid) {
      let validation: Boolean = false;
      let obj = Object.assign({}, this.RCM, this.RegularClientMasterForm.value
        //  paymentMode: this.ChangedDelivCHeckboxesPayment.join(","),
        //  bookingType: this.ChangedServCHeckboxesBooking.join(","),
        // deliveryCnr: this.ChangedServCHeckboxesDeliveryCNR.join(","),
        // deliveryCne: this.ChangedServCHeckboxesDeliveryCNE.join(","),
        // deliveryType: this.ChangedServCHeckboxesDelivery.join(",")
      );

      debugger
      let bookingTypeList = '';
      let DeliveryCheckboxesCNE = '';
      let DeliveryCheckboxesCNR = '';
      let PaymentModeChechbox = '';
      let ifsc = 0;
      let DeliveryTypeChechbox = '';
      let MultipleBillingBranches = '';

      //Contact Info
      // var a;
      // debugger
      // let Contact_info=this.Contact_infoForm.controls.Contact_info.value;
      // if(Contact_info[0]!=null && Contact_info!=0){
      //   Contact_info.forEach(x=>{
      //     if(x.Contact.Name!=undefined)
      //     Contact_info.Contact=x.Contact.Name;
      //   });
      //   for(var j=0;j<Contact_info.length;j++){
      //     var a =Contact_info[j].Contact[0];
      //     if(a.Name==undefined){
      //       for(var k=0;k<1;k++){
      //         Contact_info[j].Contact=a;
      //       }
      //     }
      //     if(a.Name!=undefined){
      //       for(var k=0;k<1;k++){
      //         Contact_info[j].Contact=a.Name
      //       }
      //     }
      //   }
      // }

      //Start Booking Type
      if (obj.bookingType['Sundry']) {
        bookingTypeList += '1,';
      }
      if (obj.bookingType['FTL']) {
        bookingTypeList += '2,';
      }
     
     // bookingTypeList = this.RemoveLastCommValues(bookingTypeList);
      obj.bookingType = bookingTypeList;
      //End Booking Type
      // Start deliveryAgainstAsCne
      if (obj.deliveryAgainstAsCne['CC']) {
        DeliveryCheckboxesCNE += '1,';
      }
      if (obj.deliveryAgainstAsCne['DACC']) {
        DeliveryCheckboxesCNE += '2,';
      }
      if (obj.deliveryAgainstAsCne['COD']) {
        DeliveryCheckboxesCNE += '3,';
      }
      if (obj.deliveryAgainstAsCne['Agent']) {
        DeliveryCheckboxesCNE += '4,';
      }
      DeliveryCheckboxesCNE = this.RemoveLastCommValues(DeliveryCheckboxesCNE);
      obj.deliveryAgainstAsCne = DeliveryCheckboxesCNE;
      //End deliveryAgainstAsCne
      //Start deliveryAgainstAsCnr
      
      if (obj.deliveryAgainstAsCnr['CC']) {
        DeliveryCheckboxesCNR += '1,';
      }
      if (obj.deliveryAgainstAsCnr['DACC']) {
        DeliveryCheckboxesCNR += '2,';
      }
      if (obj.deliveryAgainstAsCnr['COD']) {
        DeliveryCheckboxesCNR += '3,';
      }
      if (obj.deliveryAgainstAsCnr['Agent']) {
        DeliveryCheckboxesCNR += '4,';
      }
      DeliveryCheckboxesCNR = this.RemoveLastCommValues(DeliveryCheckboxesCNR);
      obj.deliveryAgainstAsCnr = DeliveryCheckboxesCNR;
      //End deliveryAgainstAsCnr
      //Start Payment mode
      if (obj.paymentMode['Topay']) {
        PaymentModeChechbox += '1,';
      }
      if (obj.paymentMode['TBB']) {
        PaymentModeChechbox += '2,';
      }
      if (obj.paymentMode['Paid']) {
        PaymentModeChechbox += '3,';
      }
      if (obj.paymentMode['FOC']) {
        PaymentModeChechbox += '4,';
      }
      PaymentModeChechbox = this.RemoveLastCommValues(PaymentModeChechbox);
      obj.paymentMode = PaymentModeChechbox;
      //End Payment mode
      //Start DeliveryType
      if (obj.deliveryType['Godown']) {
        DeliveryTypeChechbox += '1,';
      }
      if (obj.deliveryType['Door']) {
        DeliveryTypeChechbox += '2,';
      }
      DeliveryTypeChechbox = this.RemoveLastCommValues(DeliveryTypeChechbox);
      obj.deliveryType = DeliveryTypeChechbox;
      //end DeliveryType
      //Start ifsc
      if (obj.ifsc[0] != null && obj.ifsc[0] != undefined) {
        ifsc = obj.ifsc[0];
      }
      obj.ifsc = ifsc;
      //end ifsc
    
      obj.StateId = parseInt(obj.StateId);
      obj.amount = parseInt(obj.amount);
      obj.bankId = parseInt(obj.bankId);
      obj.branchId = parseInt(obj.branchId);
      obj.cityId = parseInt(obj.cityId);
      obj.creditGraceDays = parseInt(obj.creditGraceDays);
      obj.days = parseInt(obj.days);
      obj.gstIN = parseInt(obj.gstIN);
      obj.interest = parseInt(obj.interest);
      obj.phoneNo = parseInt(obj.phoneNo);
      obj.contactInfo = Contact_info;

      //obj.multipleBillingBranches=MultipleBilling;
      var mdarry = obj.multipleBillingBranches;
      //Array []
      if (mdarry != null && mdarry != undefined && mdarry.length > 0) {
        debugger
        for (var i in mdarry) {
          var id = mdarry[i]['id'];
          MultipleBillingBranches += id + ',';
        }
      }
      MultipleBillingBranches = this.RemoveLastCommValues(MultipleBillingBranches);
      obj.multipleBillingBranches = MultipleBillingBranches;
      validation = true;
      if (validation) {
        if (this.RegularClientMasterForm.dirty) {
          this.regularClientService.SaveRegularClient(obj).subscribe((response: boolean) => {
            this.HidePopUp();
            this.Destroy();
            if (response) {
              Swal({
                position: 'center',
                type: 'success',
                title: 'Godown has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            }
            this.RegularClientList();
          });
        }
      }
    }
  }
  RemoveLastCommValues(string) {
    var strVal = string;
    var lastChar = strVal.slice(-1);
    if (lastChar == ',') {
      strVal = strVal.slice(0, -1);
      return strVal;
    }
  }
  ShowData(data: number) {
    debugger
    this.Title = "Edit Regular Master";
    this.cities = this.AllCities;
    this.regularClientService.GetRegularClient(data).subscribe((res: RegularClientModel) => {
      debugger
      var date1 = this.datePipe.transform(res.validFromDate, 'yyyy-MM-dd');
      var date2 = this.datePipe.transform(res.validToDate, 'yyyy-MM-dd');

      let getvalue = this.setbranch(res.multipleBillingBranches);
      this.RegularClientMasterForm.patchValue({
        id: res.id,
        branchId: res.branchId,
        clientCode: res.clientCode,
        clientName: res.clientName,
        clientGroupId: res.clientGroupId,
        pan: res.pan,
        gstIN: res.gstIN,
        address: res.address,
        cityId: res.cityId,
        pinCode: res.pinCode,
        StateId: res.StateId,
        phoneNo: res.phoneNo,
        mobileNo: res.mobileNo,
        // emailAlert: res.emailAlert,
        //smsAlert: res.smsAlert,
        ledgerName: res.ledgerName,
        days: res.days,
        amount: res.amount,
        interest: res.interest,
        creditGraceDays: res.creditGraceDays,
        bankId: res.bankId,
        accountNo: res.accountNo,
        chequeInTheNameOf: res.chequeInTheNameOf,
        companyNo: res.companyNo,
        policyNo: res.policyNo,
        insuranceAmount: res.insuranceAmount,
        // isMarineInsured: res.isMarineInsured,
        // isGodownInsured: res.isGodownInsured,
        validFromDate: date1,
        validToDate: date2,
        multipleBillingBranches: getvalue,
        remark: res.remark,
        ifsc: res.ifsc
      });
      this.EditCheckboxes(res.paymentMode, res.bookingType, res.deliveryAgainstAsCnr, res.deliveryAgainstAsCne, res.deliveryType, res.emailAlert, res.smsAlert, res.isMarineInsured, res.isGodownInsured)
      this.ShowPopUp();
    });
  }
  setbranch(data: any) {
    if (data != null && data != undefined && data.length > 0) {
      let dataarry = data.split(",")
      let branchData = this.dropdownbranch;
      let res = [];
      if (branchData != null && branchData != undefined && branchData.length > 0) {
        for (var i = 0; i < branchData.length; i++) {
          var brancgId = branchData[i].id
          for (let z = 0; z < branchData.length; z++) {
            if (brancgId == parseInt(dataarry[z])) {
              res.push({ id: i + 1, branchCode: branchData[i].branchCode });
            }
          }
        }
      }
      return res;
    }
  }
  EditCheckboxes(paymentModes, bookingTypes, deliveryCnr, deliveryCne, deliveryType, emailAlert, smsAlert, isMarineInsured, isGodownInsured) {
    // PaymentModeChechbox
    debugger
    if (paymentModes != null && paymentModes != undefined && paymentModes != '') {
      var Sboxes = paymentModes.split(",");
      for (var i = 0; i < Sboxes.length; i++) {
        var id = parseInt(Sboxes[i]);
        this.PaymentModeChechbox.map((x) => { if (x.id == id) { x.Selected = true; } });
      }
    }
    // BookingTypeChechbox
    if (bookingTypes != null && bookingTypes != undefined && bookingTypes != '') {
      var DBoxes = bookingTypes.split(",");
      for (var i = 0; i < DBoxes.length; i++) {
        var id = parseInt(DBoxes[i]);
        this.BookingTypeChechbox.map((x) => { if (x.id == id) { x.Selected = true; } });
      }
    }
    // DeliveryCheckboxesCNR
    if (deliveryCnr != null && deliveryCnr != undefined && deliveryCnr != '') {
      var MBoxes = deliveryCnr.split(",");
      for (var i = 0; i < MBoxes.length; i++) {
        var id = parseInt(MBoxes[i]);
        this.DeliveryCheckboxesCNR.map((x) => { if (x.id == id) { x.Selected = true; } });
      }
    }
    // DeliveryCheckboxesCNE
    if (deliveryCne != null && deliveryCne != undefined && deliveryCne != '') {
      var KBoxes = deliveryCne.split(",");
      for (var i = 0; i < KBoxes.length; i++) {
        var id = parseInt(KBoxes[i]);
        this.DeliveryCheckboxesCNE.map((x) => { if (x.id == id) { x.Selected = true; } });
      }
    }
    // DeliveryTypeChechbox
    if (deliveryType != null && deliveryType != undefined && deliveryType != '') {
      var HBoxes = deliveryType.split(",");
      for (var i = 0; i < HBoxes.length; i++) {
        var id = parseInt(HBoxes[i]);
        this.DeliveryTypeChechbox.map((x) => { if (x.id == id) { x.Selected = true; } });
      }
    }
    // True / False Boolean Checkbox
    if (this.AlertChechbox != null && this.AlertChechbox != undefined && this.AlertChechbox.length > 0) {
      for (var a = 0; a < this.AlertChechbox.length; a++) {
        debugger
        if (emailAlert && this.AlertChechbox[a]['id'] == 1) {
          this.AlertChechbox[a]['Selected'] = true;
        } else if (smsAlert && this.AlertChechbox[a]['id'] == 2) {
          this.AlertChechbox[a]['Selected'] = true;
        }
      }
    }
    if (this.InsuranceDetailsChechbox != null && this.InsuranceDetailsChechbox != undefined && this.InsuranceDetailsChechbox.length > 0) {
      for (var b = 0; b < this.InsuranceDetailsChechbox.length; b++) {
        if (isMarineInsured && this.InsuranceDetailsChechbox[b]['id'] == 1) {
          this.InsuranceDetailsChechbox[b]['Selected'] = true;
        }
        else if (isGodownInsured && this.InsuranceDetailsChechbox[b]['id'] == 2) {
          this.InsuranceDetailsChechbox[b]['Selected'] = true;
        }
      }
    }
  }

  DeleteRegularClient(id: number) {

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
        this.regularClientService.DeleteRegularClient(id)
          .subscribe(() => {
            this.Destroy();
            this.RegularClientList();
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

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  public Validator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }

  CitiesList() {

    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.AllCities = res;
    });
  }
  StatesList() {

    this.service.GetStates().subscribe((res: StateModel[]) => {
      this.states = res;
    });
  }
  onChange(data) {
    this.cities = this.AllCities.filter(x => x.stateId == parseInt(data));
  }
  SetClientCode(data) {
    var clientcode: any;
    if (data != null && data != undefined && data != '') {
      if (data.length > 1) {
        var Ccode = data.slice(0, 2).toUpperCase();
        this.regularClientService.Getcliencode(Ccode).subscribe((res: any) => {
          clientcode = res;
          if (clientcode != null && clientcode != undefined && clientcode != '') {
            clientcode = parseInt(clientcode.slice(2, 4));
            clientcode = clientcode + 1;
            this.RegularClientMasterForm.patchValue({
              clientCode: Ccode + '0' + clientcode,
            });
          }
        });
      }
    }

  }
  BankList() {
    this.bankservice.GetBankMasterDetails().subscribe((res: any) => {
      this.bankLsit = res;
      return this.BankData = res;
    });
  }
  onChangeBank(data) {

    var bankid = 0;
    this.bankLsit = this.BankData.filter(x => x.id == parseInt(data));
    if (this.bankLsit.length > 0) {
      bankid = this.bankLsit[0].id;
    }
    this.RegularClientMasterForm.patchValue({
      ifsc: [bankid],
    });

  }

  SaveContact_Info() {

  }
  get f() { return this.RegularClientMasterForm.controls; }
}
