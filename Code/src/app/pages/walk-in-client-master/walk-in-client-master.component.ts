import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import *  as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { StateModel } from '../../shared/model/StateModel';
import { StateMasterService } from '../../shared/service-proxy/stateMasterService';
import { CityModel } from '../../shared/model/CityModel';
import { CityMasterService } from '../../shared/service-proxy/cityMasterService';
import { WalkInClientModel } from '../../shared/model/WalkInClientModel';
import { WalkInClientMasterService } from '../../shared/service-proxy/walkinclientMasterService';
import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});
@Component({
  selector: 'app-walk-in-client-master',
  templateUrl: './walk-in-client-master.component.html',
  styleUrls: ['./walk-in-client-master.component.scss']
})
export class WalkInClientMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  WalkInClientMasterForm: FormGroup;

  States: StateModel[] = [];
  Citys: CityModel[] = [];
  cities: CityModel[] = [];
  rows: WalkInClientModel[];
  modalRef: BsModalRef;
  DeliveryCheckboxesCNR: any[];
  DeliveryCheckboxesCNE: any[];
  InsuranceDetailsChechbox: any[];
  AlertChechbox: any[];
  RCB: WalkInClientModel;

  ChangedDelivCHeckboxes = [];
  ChangedServCHeckboxes = [];

  dataTable: any[];
  Title: string;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };


  constructor(private fb: FormBuilder,
    private changeDetecterRef: ChangeDetectorRef,
    private modalService: BsModalService,
    private stateService: StateMasterService,
    private cityService: CityMasterService,
    private walkinclientservice: WalkInClientMasterService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.WalkInClientList();
    this.allStates();
    this.citiesList();
    // this.LoadCheckBoxesCNR();
    // this.LoadCheckBoxesCNE();
    this.LoadForm();
    this.LoadCheckBoxesInsuranceDetail();
    this.LoadCheckBoxesAlertchechbox();
  }

  LoadForm() {
    this.Title = "Add New Walk In Client";
    this.WalkInClientMasterForm = this.fb.group({
      id: [0],
      name: [''],
      contactperno: [''],
      address: [''],
      cityid: ['0'],
      pincode: [''],
      stateid: ['0'],
      STDcode: [''],
      phone: [''],
      mobile: [''],
      emailid: [''],
      emailalert: [''],
      mobilealert: [''],
      pan: [''],
      gstIN: [''],
      // deliveryAgainstAsCnr:[''],
      // deliveryAgainstAsCne:[''],
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
      companyname: [''],
      policyno: [''],
      validfromdate: [''],
      validtodate: [''],
      insuranceamount: [''],
      isMarineIsured: [''],
      isGodownIsured: [''],
    });
    this.LoadCheckBoxesCNR();
    this.LoadCheckBoxesCNE();
    this.LoadCheckBoxesAlertchechbox();
    this.LoadCheckBoxesInsuranceDetail();
  }

  LoadCheckBoxesCNR() {
    debugger
    this.DeliveryCheckboxesCNR = [{
      id: 1,
      Name: "CC",
      Selected: false,
      formControlName: 'CC',
    }, {
      id: 2,
      Name: "DACC",
      Selected: false,
      formControlName: 'DACC',
    }, {
      id: 3,
      Name: "COD",
      Selected: false,
      formControlName: 'COD',
    }, {
      id: 4,
      Name: "Agent",
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
      Name: "DACC",
      Selected: false,
      formControlName: 'DACC',
    }, {
      id: 3,
      Name: "COD",
      Selected: false,
      formControlName: 'COD',
    }, {
      id: 4,
      Name: "Agent",
      Selected: false,
      formControlName: 'Agent',
    }];

  }
  LoadCheckBoxesInsuranceDetail() {
    this.InsuranceDetailsChechbox = [{
      id: 1,
      Name: "Is Marine Insured",
      Selected: false,
      formControlName: 'isMarineIsured',
    }, {
      id: 2,
      Name: "Is Godown Insured",
      Selected: false,
      formControlName: 'isGodownIsured',
    }];

  }
  LoadCheckBoxesAlertchechbox() {
    this.AlertChechbox = [{
      id: 1,
      Name: "Email Alert",
      Selected: false,
      formControlName: 'emailalert',
    }, {
      id: 2,
      Name: "Mobile Alert",
      Selected: false,
      formControlName: 'mobilealert',
    }];
  }
  allStates() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {
      this.States = res;
    });
  }

  citiesList() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.Citys = res;
    });
  }

  onChange(data) {
    console.log(data);
    this.cities = this.Citys.filter(x => x.stateId == parseInt(data));
  }

  WalkInClientList() {
    debugger
    this.walkinclientservice.GetWalkInClients().subscribe((res: WalkInClientModel[]) => {
      this.rows = res;
      this.changeDetecterRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  HidePoPup() {
    this.modalRef.hide();
    this.LoadForm();
    this.LoadCheckBoxesCNR();
    this.LoadCheckBoxesCNE();
    this.LoadCheckBoxesAlertchechbox();
    this.LoadCheckBoxesInsuranceDetail();
  }

  RemoveLastCommValues(string) {
    var strVal = string;
    var lastChar = strVal.slice(-1);
    if (lastChar == ',') {
      strVal = strVal.slice(0, -1);
      return strVal;
    }
  }

  SaveDetail(data: WalkInClientModel) {
    debugger
    // if(this.WalkInClientMasterForm.valid){
    // let validation:Boolean=false;
    let obj = Object.assign({}, this.RCB, this.WalkInClientMasterForm.value, {
      deliveryAgainstAsCnr: this.ChangedDelivCHeckboxes.join(","),
      deliveryAgainstAsCne: this.ChangedServCHeckboxes.join(",")
    });
    // let DeliveryCheckboxesCNE='';
    // let DeliveryCheckboxesCNR='';

    // if(obj.deliveryAgainstAsCne['CC']){
    //   DeliveryCheckboxesCNE+='1,';
    // }
    // if(obj.deliveryAgainstAsCne['DACC']){
    //   DeliveryCheckboxesCNE+='2,';
    // }
    // if(obj.deliveryAgainstAsCne['COD']){
    //   DeliveryCheckboxesCNE+='3,';
    // }
    // if(obj.deliveryAgainstAsCne['Agent']){
    //   DeliveryCheckboxesCNE+='4,';
    // }
    // DeliveryCheckboxesCNE=this.RemoveLastCommValues(DeliveryCheckboxesCNE); 
    // obj.deliveryAgainstAsCne=DeliveryCheckboxesCNE;

    // if(obj.deliveryAgainstAsCnr['CC']){
    //   DeliveryCheckboxesCNR+='1,';
    // }
    // if(obj.deliveryAgainstAsCnr['DACC']){
    //   DeliveryCheckboxesCNR+='2,';
    // }
    // if(obj.deliveryAgainstAsCnr['COD']){
    //   DeliveryCheckboxesCNR+='3,';
    // }
    // if(obj.deliveryAgainstAsCnr['Agent']){
    //   DeliveryCheckboxesCNR+='4,';
    // }
    // DeliveryCheckboxesCNR=this.RemoveLastCommValues(DeliveryCheckboxesCNR);
    // obj.deliveryAgainstAsCnr=DeliveryCheckboxesCNR;

    obj.stateid = parseInt(obj.stateid);
    obj.cityid = parseInt(obj.cityid);

    // validation=true;
    // if(validation){
    if (this.WalkInClientMasterForm.dirty) {
      this.walkinclientservice.SaveWalkInClient(obj).subscribe((Response: boolean) => {
        this.HidePoPup();
        this.Destroy();
        if (Response) {
          Swal({
            position: 'center',
            type: 'success',
            title: 'Walk In Client has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
        this.WalkInClientList();
      });
      // }
    }
  }
  //}

  ShowData(data: number) {
    debugger
    this.Title = "Edit New Walk In Client";
    this.cities = this.Citys;
    this.walkinclientservice.GetWalkinClient(data).subscribe((res: WalkInClientModel) => {
      var date1 = this.datePipe.transform(res.validfromdate, 'yyyy-MM-dd');
      var date2 = this.datePipe.transform(res.validtodate, 'yyyy-MM-dd');
      this.WalkInClientMasterForm.patchValue({
        id: res.id,
        name: res.name,
        contactperno: res.contactperno,
        address: res.address,
        cityid: res.cityid,
        pincode: res.pincode,
        stateid: res.stateid,
        STDcode: res.STDcode,
        phone: res.phone,
        mobile: res.mobile,
        emailid: res.emailid,
        pan: res.pan,
        gstIN: res.gstIN,
        companyname: res.companyname,
        policyno: res.policyno,
        validfromdate: date1,
        validtodate: date2,
        insuranceamount: res.insuranceamount,
      });
      this.EditCheckboxes(res.deliveryAgainstAsCnr, res.deliveryAgainstAsCne, res.mobilealert, res.emailalert, res.isMarineIsured, res.isGodownIsured);
      this.ShowPopUp();
    })
  }
  EditCheckboxes(deliveryCnr, deliveryCne, emailAlert, smsAlert, isMarineInsured, isGodownInsured) {
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

  // if(ChangedDelivCHeckboxes!)

  onServiceCheckboxChange(id, event) {
    debugger
    if (event.currentTarget.checked == false) {
      this.ChangedDelivCHeckboxes = this.ChangedDelivCHeckboxes.filter(function (index) {
        return (index != id.id);
      });
    } else {
      this.ChangedDelivCHeckboxes.push(id.id)
    }
  }

  onCheckboxChange(id, event) {
    debugger
    if (event.currentTarget.checked == false) {
      this.ChangedServCHeckboxes = this.ChangedServCHeckboxes.filter(function (index) {
        return (index != id.id);
      });
    }
    else {
      this.ChangedServCHeckboxes.push(id.id);
    }
  }

  Deletewalkinclient(id: number) {
    debugger
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
        this.walkinclientservice.DeleteWalkInClient(id)
          .subscribe(() => {
            this.Destroy();
            this.WalkInClientList();
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

}

