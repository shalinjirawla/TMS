import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AccountModel } from '../../shared/model/AccountModel';
import { AccountMasterService } from '../../shared/service-proxy/accountMasterService';

import { StateModel } from '../../shared/model/StateModel';
import { StateMasterService } from '../../shared/service-proxy/stateMasterService';

import { CityModel } from '../../shared/model/CityModel';
import { CityMasterService } from '../../shared/service-proxy/cityMasterService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});


@Component({
  selector: 'app-account-master',
  templateUrl: './account-master.component.html',
  styleUrls: ['./account-master.component.scss']
})
export class AccountMasterComponent implements OnInit {
  @ViewChild('template') temaplet: TemplateRef<any>;

  AccountMasterForm: FormGroup;
  modalRef: BsModalRef;
  Title: string;
  dataTable:any;

  Nature = [];
  openingbalance = [];
  applicablelocation = [];
  rows: any[];
  cmd: AccountModel;
  AlertChechbox: any[];

  // EmailAlertBox: any[];
  // MobileAlertBox: any[];

  cityModel: CityModel[];
  staeModel: StateModel[];
  cities: CityModel[];

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private stateService: StateMasterService,
    private cityService: CityMasterService,
    private accountService: AccountMasterService,
    private changedetecorRef:ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.StateList();
    this.CityList();
    this.AccountList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.temaplet, this.config)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Account",
      this.AccountMasterForm = this.fb.group({
        id: [0],
        ledgergroupname: [''],
        nature: [''],
        ledgername: [''],
        PAN: [''],
        GSTIN: [''],
        accountno: [''],
        address: [''],
        city: [''],
        pincode: [''],
        state: [''],
        STDcode: [''],
        phoneno: [''],
        mobileno: [''],
        emailid: [''],
        emailalert: [''],
        mobilealert: [''],
        openingbalance: [''],
        openingamount: [''],
        applicablelocation: [''],
        remark: [''],
        costcentrename: [''],
        remark1: [''],
      });
    this.OnDropDownList();
    this.OnDropDownListOpening();
    this.OnDropDownListApplicable();
    this.LoadCheckBoxesAlertchechbox();
  }

  OnDropDownList() {
    this.Nature = [{
      id: 1,
      Name: 'Assets',
    }, {
      id: 2,
      Name: 'Liabilities',
    }, {
      id: 3,
      Name: 'Income',
    }, {
      id: 4,
      Name: 'Expenses',
    }]
  }

  OnDropDownListOpening() {
    this.openingbalance = [{
      id: 1,
      Name: 'DR',
    }, {
      id: 2,
      Name: 'CR',
    }]
  }

  OnDropDownListApplicable() {
    this.applicablelocation = [{
      id: 1,
      Name: 'Branches',
    }, {
      id: 2,
      Name: 'Area',
    }, {
      id: 2,
      Name: 'Region',
    }, {
      id: 4,
      Name: 'HO',
    }]
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

  StateList() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {
      this.staeModel = res;
    })
  }

  CityList() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.cityModel = res;
    })
  }
  onChange(data) {
    console.log(data);
    this.cities = this.cityModel.filter(x => x.stateId == parseInt(data));
  }

  AccountList() {
    this.accountService.GetAccountModels().subscribe((res: AccountModel[]) => {
      this.rows = res;

      this.changedetecorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.dataTable();
    })
  }

  SaveDetail(data) {
    debugger
    if (this.AccountMasterForm.valid) {
      let validation: boolean = false;
      let Nature = this.AccountMasterForm.controls.nature.value;
      let openingbalance = this.AccountMasterForm.controls.openingbalance.value;
      let applicablelocation = this.AccountMasterForm.controls.applicablelocation.value;
      let obj = Object.assign({}, this.cmd, this.AccountMasterForm.value);
      validation = true;
      if (validation) {
        this.accountService.SaveAccount(obj).subscribe((Response: boolean) => {
          // this.Destroy();
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Account has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.AccountList();
        })
      }
    }
  }

  ShowData(data: number) {
    this.Title = "Edit Account";
    this.cities = this.cityModel;
    this.accountService.GetAccountModel(data).subscribe((res: AccountModel) => {
      this.AccountMasterForm.patchValue({
        id: res.id,
        ledgergroupname: res.ledgergroupname,
        nature: res.nature,
        ledgername: res.ledgername,
        PAN: res.PAN,
        GSTIN: res.GSTIN,
        accountno: res.accountno,
        address: res.address,
        city: res.city,
        pincode: res.pincode,
        state: res.state,
        STDcode: res.STDcode,
        phoneno: res.phoneno,
        mobileno: res.mobileno,
        emailid: res.emailid,
        // emailalert:res.emailalert,
        // mobilealert:res.mobilealert,
        openingbalance: res.openingbalance,
        openingamount: res.openingamount,
        applicablelocation: res.applicablelocation,
        remark: res.remark,
        costcentrename: res.costcentrename,
        remark1: res.remark1,
      });
      this.CheckboxEdit(res.emailalert, res.mobilealert);
      this.ShowPopUp();
    });
  }

  CheckboxEdit(emailA, mobileA) {
    debugger
    if (this.AlertChechbox != null && this.AlertChechbox != undefined && this.AlertChechbox.length > 0) {
      debugger
      for (var i = 0; i < this.AlertChechbox.length; i++) {
        if (emailA && this.AlertChechbox[i]['id'] == 1) {
          this.AlertChechbox[i]['Selected'] = true;
        } else if (mobileA && this.AlertChechbox[i]['id'] == 2) {
          this.AlertChechbox[i]['Selected'] = true;
        }
      }
    }
  }

  DeleteAccount(id: number) {
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
        this.accountService.DeleteAccount(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.AccountList();
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

}
