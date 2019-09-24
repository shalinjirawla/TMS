import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ReceiptModel } from '../../shared/model/ReceiptModel';
import { ReceiptMasterService } from '../../shared/service-proxy/receiptMasterService';

import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-receipt-master',
  templateUrl: './receipt-master.component.html',
  styleUrls: ['./receipt-master.component.scss']
})
export class ReceiptMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  ReceiptMasterForm: FormGroup;
  modalRef: BsModalRef;

  cmd: ReceiptModel;
  rows: any;
  dataTable: any;

  FinanceEffectChechbox: any[];
  CaseBankDropDown: any[];
  changeEffectedCheckbox = [];
  // changeDefferentCheckbox = [];
  // DeffenetCheckBox: any[];

  Title: string;

  constructor(private fb: FormBuilder,
    private modelService: BsModalService,
    private receiptService: ReceiptMasterService,
    private changedetectorRef: ChangeDetectorRef,
    private datepipe: DatePipe,
  ) { }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  ngOnInit() {
    // this.LoadCheckBoxesBookingType();
    this.LoadForm();
    this.ReceiptList();
    // this.LoadCheckBoxesBookingType();
  }

  ShowPopUp() {
    this.modalRef = this.modelService.show(this.template, this.config)
  }

  HidePopUp() {
    this.modalRef.hide();
    this.LoadForm();
  }

  OnDropDownList() {
    this.CaseBankDropDown = [{

    }]
  }

  LoadCheckBoxesBookingType() {
    this.FinanceEffectChechbox = [{
      id: 1,
      Name: "CR Party",
      Selected: false,
      formControlName: 'CR Party',
    }, {
      id: 2,
      Name: "DR TDS",
      Selected: false,
      formControlName: 'DR TDS',
    }, {
      id: 3,
      Name: "DR Cash",
      Selected: false,
      formControlName: 'DR Cash',
    }, {
      id: 4,
      Name: "Bill",
      Selected: false,
      formControlName: 'Bill',
    }];
  }

  // LoadCHeckboxDefferent() {
  //   this.DeffenetCheckBox = [{
  //     id: 1,
  //     Name: "TDS",
  //     Selected: false,
  //     formControlName: 'TDS',
  //   }, {
  //     id: 1,
  //     Name: "Freight Deduction",
  //     Selected: false,
  //     formControlName: 'Freight Deduction',
  //   }, {
  //     id: 1,
  //     Name: "Etc",
  //     Selected: false,
  //     formControlName: 'Etc',
  //   }]
  // }

  LoadForm() {
    this.Title = "Add Receipt",
      this.ReceiptMasterForm = this.fb.group({
        id: [0],
        BMRno: [''],
        BMRdate: [''],
        Cash: [''],
        Chequeno: [''],
        Chequedate: [''],
        Receivedamount: [''],
        Billno: [''],
        Billamount: [''],
        TDS: [''],
        FreightDeduction: [''],
        Etc: [''],
        remark: [''],
        financeeffect: this.fb.group({
          'CR Party': [],
          'DR TDS': [],
          'DR Cash': [],
          'Bill': [],
        }),
      });
    this.LoadCheckBoxesBookingType();
  }

  ReceiptList() {
    this.receiptService.GetReceiptModels().subscribe((res: ReceiptModel[]) => {
      this.rows = res;

      this.changedetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.dataTable();
    });
  }

  SaveDetail(data) {
    if (this.ReceiptMasterForm.valid) {
      let validation: boolean = false;
      // let financeeffect = this.ReceiptMasterForm.controls.financeeffect.value;
      let obj = Object.assign({}, this.cmd, this.ReceiptMasterForm.value, {
        financeeffect: this.changeEffectedCheckbox.join(","),
      });
      validation = true;
      if (validation) {
        this.receiptService.SaveReceipt(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Receipt has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.HidePopUp();
          this.ReceiptList();
        });
      }
    }
  }

  onServiceCheckboxChange(id, event) {
    debugger
    if (event.currentTarget.checked == false) {
      this.changeEffectedCheckbox = this.changeEffectedCheckbox.filter(function (index) {
        return (index != id.id);
      });
    } else {
      this.changeEffectedCheckbox.push(id.id)
    }
  }

  ShowData(data: number) {
    this.Title = "Edit New Receipt";
    this.receiptService.GetReceiptModel(data).subscribe((res: ReceiptModel) => {
      let date1 = this.datepipe.transform(res.BMRdate, 'yyyy-MM-dd');
      let date2 = this.datepipe.transform(res.Chequedate, 'yyyy-MM-dd');
      this.ReceiptMasterForm.patchValue({
        id: res.id,
        BMRno: res.BMRno,
        BMRdate: date1,
        Cash: res.Cash,
        Chequeno: res.Chequeno,
        Chequedate: date2,
        Receivedamount: res.Receivedamount,
        Billno: res.Billno,
        Billamount: res.Billamount,
        TDS: res.TDS,
        FreightDeduction: res.FreightDeduction,
        Etc: res.Etc,
        remark: res.remark,
        // financeeffect: res.financeeffect,
      });
      this.ShowPopUp();
      this.EditCheckboxs(res.financeeffect)
    })
  }

  EditCheckboxs(effecteds) {
    if (effecteds != null && effecteds != undefined && effecteds != '') {
      var CheckEffect = effecteds.split(",");
      for (var i = 0; i < CheckEffect.length; i++) {
        var id = parseInt(CheckEffect[i]);
        this.FinanceEffectChechbox.map((x) => {
          if (x.id == id) {
            x.Selected = true;
          }
        });
      }
    }
  }

  DeleteReceipt(id: number) {
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
        this.receiptService.DeleteReceipt(id)
          .subscribe(() => {
            // this.Destroy();
            this.ReceiptList();
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

  public Validator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }

  // onDefferentCheckboxChange(id, event) {
  //   if (event.currentTarget.checked == false) {
  //     this.changeEffectedCheckbox = this.changeDefferentCheckbox.filter(function (index) {
  //       return (index != id.id);
  //     });
  //   } else {
  //     this.changeEffectedCheckbox.push(id.id);
  //   }
  // }

}
