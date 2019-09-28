import { Component, OnInit, TemplateRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { PaymentModel } from '../../shared/model/PaymentModel';
import { PaymentService } from '../../shared/service-proxy/paymentService';

import { LedgerModel } from '../../shared/model/LedgerModel';
import { LedgerService } from '../../shared/service-proxy/ledgerService';

import { DatePipe } from '@angular/common';
import { read } from 'fs';

const swalWithBootstrapButtons = swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;
  Title: string;
  PaymentForm: FormGroup;
  hk: any;
  rows: any;
  dataTable: any;
  ledgerModel: LedgerModel[];
  RequirementTypeCheckBox: any[];

  random: any;

  private base64textString: String = "";
  public imagePath;
  public imagePath1
  imgURL: any;
  Fileuploadstring: any;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private changedetectorrEF: ChangeDetectorRef,
    private ledgerService: LedgerService,
    private datepipe: DatePipe,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.PaymentList();
    this.LedgerList();
  }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
    this.getRendomNo(51545515);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Payment",
      this.PaymentForm = this.fb.group({
        id: [0],
        voucherNo: [''],
        voucherDate: [''],
        requirementType: [''],
        DRLedgerTo: [''],
        DRAmount: [''],
        DRLedgerFrom: [''],
        DRAmount1: [''],
        Remark: [''],
        BillByBill: [''],
        referenceNo: [''],
        challanNo: [''],
        Rent: [''],
        Salary: [''],
        Admin: [''],
        FileUpload: [''],
      })
    this.OnDropDownList();
  }

  OnDropDownList() {
    this.RequirementTypeCheckBox = [{
      id: 1,
      name: 'ATH'
    }, {
      id: 2,
      name: 'BTH'
    }, {
      id: 3,
      name: 'RENT'
    }, {
      id: 4,
      name: 'SALARY'
    }, {
      id: 4,
      name: 'ADMIN'
    }]
  }

  PaymentList() {
    debugger
    this.paymentService.GetPaymentModels().subscribe((res: PaymentModel[]) => {
      this.rows = res;

      this.changedetectorrEF.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  LedgerList() {
    this.ledgerService.GetLedgerModels().subscribe((res: LedgerModel[]) => {
      this.ledgerModel = res;
    })
  }
  getRendomNo(max) {
    this.random = Math.floor(Math.random() * Math.floor(max));
    this.PaymentForm.controls["voucherNo"].setValue(this.random);
  }

  SaveDetail() {
    if (this.PaymentForm.valid) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.PaymentForm.value);
      obj.FileUpload = this.Fileuploadstring;
      validation = true;
      if (validation) {
        this.paymentService.SavePayment(obj).subscribe((Response: boolean) => {
          if (Response) {
            swal({
              position: 'center',
              type: 'success',
              title: 'Payment has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.PaymentList();
          this.handleFileSelect(event);
        });
      }
    }
  }

  ShowData(data: number) {
    this.Title = "Edit Payment";
    this.paymentService.GetPayment(data).subscribe((res: PaymentModel) => {
      res.FileUpload = this.Fileuploadstring;
      let date1 = this.datepipe.transform(res.voucherDate, 'yyyy-MM-dd');
      this.PaymentForm.patchValue({
        id: res.id,
        voucherNo: res.voucherNo,
        voucherDate: date1,
        requirementType: res.requirementType,
        DRLedgerTo: res.DRLedgerTo,
        DRAmount: res.DRAmount,
        DRLedgerFrom: res.DRLedgerFrom,
        DRAmount1: res.DRAmount1,
        Remark: res.Remark,
        BillByBill: res.BillByBill,
        referenceNo: res.referenceNo,
        challanNo: res.challanNo,
        Rent: res.Rent,
        Salary: res.Salary,
        Admin: res.Admin,
        //FileUpload: res.FileUpload,
      })
      this.ShowPopUp();
    })
  }

  DeletePayment(id: number) {
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
        this.paymentService.DeletePayment(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.PaymentList();
          });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else if (
        result.dismiss === swal.DismissReason.cancel
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

}
