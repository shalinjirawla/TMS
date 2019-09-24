import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { LedgerModel } from '../../shared/model/LedgerModel';
import { LedgerService } from '../../shared/service-proxy/ledgerService';

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
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent {

  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;
  Title: string;

  LedgerForm: FormGroup;
  openingbalance = [];
  applicablelocation = [];
  AlertChechbox : any[];

  dataTable:any;

  stateModel: StateModel[];
  cityModel: CityModel[];
  allCity: CityModel[];
  hk: any;
  rows: any;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private ledgerService: LedgerService,
    private stateService: StateMasterService,
    private cityService: CityMasterService,
    private changedetectorRef: ChangeDetectorRef,
  ) { }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  ngOnInit() {
    this.LoadForm();
    this.StateList();
    this.CityList();
    this.LedgerList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
    this.LoadCheckBoxesAlertchechbox();
  }

  LoadForm() {
    this.Title = "Add Ledger";
    this.LedgerForm = this.fb.group({
      id: [0],
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
    })
    this.OnDropDownListOpening();
    this.OnDropDownListApplicable();
    this.LoadCheckBoxesAlertchechbox();
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
      this.stateModel = res;
    })
  }

  CityList() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.cityModel = res;
    })
  }

  onChange(data) {
    this.allCity = this.cityModel.filter(x => x.stateId == parseInt(data));
  }

  LedgerList() {
    this.ledgerService.GetLedgerModels().subscribe((res: LedgerModel[]) => {
      this.rows = res;

      this.changedetectorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail() {
    if (this.LedgerForm.valid) {
      let validation: Boolean = false;
      let openingbalance = this.LedgerForm.controls.openingbalance.value;
      let applicablelocation = this.LedgerForm.controls.applicablelocation.value;
      let obj = Object.assign({}, this.hk, this.LedgerForm.value);
      validation = true;
      if (validation) {
        this.ledgerService.SaveLedger(obj).subscribe((Response: boolean) => {
          // this.Destroy();
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Ledger has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.LedgerList();
        })
      }
    }
  }

  ShowData(data: number) {
    this.allCity = this.cityModel;
    this.Title = "Edit Ledger"
    this.ledgerService.GetLedgerModel(data).subscribe((res: LedgerModel) => {
      this.LedgerForm.patchValue({
        id: res.id,
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
      });
      this.ShowPopUp();
      this.EditChackbox(res.emailalert, res.mobilealert);
    })
  }

  EditChackbox(emails, mobiles) {
    if (this.AlertChechbox != null && this.AlertChechbox != undefined && this.AlertChechbox.length > 0) {
      debugger
      for (let i = 0; i < this.AlertChechbox.length; i++) {
        if (emails && this.AlertChechbox[i]['id'] == 1) {
          this.AlertChechbox[i]['Selected'] = true;
        } else if (mobiles && this.AlertChechbox[i]['id'] == 2) {
          this.AlertChechbox[i]['Selected'] = true;
        }
      }
    }
  }

  DeleteLedger(id: number) {
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
        this.ledgerService.DeleteLedger(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.LedgerList();
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
