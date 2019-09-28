import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { LedgerModel } from '../../shared/model/LedgerModel';
import { LedgerService } from '../../shared/service-proxy/ledgerService';

import { accountingVouchersModel } from '../../shared/model/AccountingVouchersModel';
import { AccountingVouchersService } from '../../shared/service-proxy/accountingvouchersService';

import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-accounting-vouchers',
  templateUrl: './accounting-vouchers.component.html',
  styleUrls: ['./accounting-vouchers.component.scss']
})
export class AccountingVouchersComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;

  AccountingVoouchersForm: FormGroup;

  modalRef: BsModalRef;
  Title: string;
  dataTable: any;
  rows: any;
  hk: any;
  random: any;
  value: any;
  id: any;
  allRows: any;
  user = [];
  data: any;

  private base64textString: String = "";
  public imagePath;
  imgURL: any;
  Fileuploadstring: any;
  public imagePath1;
  imgURL1: any;
  Fileuploadstring1: any;

  ChangedServCHeckboxes: any[];

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  requirementType = [];
  ledgerModel: LedgerModel[];

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private ledgerService: LedgerService,
    private accountingvouchersService: AccountingVouchersService,
    private datepipe: DatePipe,
    private changedetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.LedgerList();
    this.AccountingVouchersList();
    // this.DataValue(event);
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
    this.getRendomNo(521515414)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
    $("#PdfData").hide();
    // this.preview(evt);
  }

  LoadForm() {
    this.Title = "Add Accounting Vouchers"
    this.AccountingVoouchersForm = this.fb.group({
      id: [0],
      requirementNo: [''],
      requirementDate: [''],
      requirementType: [''],
      DRLedgerNameTo: [''],
      DRAmount: [''],
      DRLedgerNameFrom: [''],
      DRAmount1: [''],
      remark: [''],
      challanNo: [''],
      referenceNo: [''],
      RENT: [''],
      SALARY: [''],
      ADMIN: [''],
      fileupload: [''],
      IsApprove: [''],
      rejectremark: [''],
      // requirementNo1: [''],
      // requirementDate1: [''],
      // requirementType1: [''],
      // DRLedgerNameTo1: [''],
      // DRLedgerNameFrom1: [''],
      // DRAmount2: [''],
      // remark1: [''],
      // referenceNo: [''],
      // challanNo1: [''],
      // RENT1: [''],
      // SALARY1: [''],
      // ADMIN1: [''],
      // fileupload1: [''],
    })
    this.RequirementTypes();
  }

  RequirementTypes() {
    this.requirementType = [
      {
        id: 1,
        Name: 'ATH',
      }, {
        id: 2,
        Name: 'BTH',
      }, {
        id: 3,
        Name: 'RENT',
      }, {
        id: 4,
        Name: 'SALARY',
      }, {
        id: 5,
        Name: 'ADMIN',
      }
    ]
  }

  LedgerList() {
    this.ledgerService.GetLedgerModels().subscribe((res: LedgerModel[]) => {
      this.ledgerModel = res;
    })
  }


  AccountingVouchersList() {
    this.accountingvouchersService.GetRequirementModels().subscribe((res: accountingVouchersModel[]) => {
      this.rows = res;
      this.data = res;

      this.changedetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
    $("#PdfData").hide();
    // $("#PdfData").removeClass();
  }

  getRendomNo(max) {
    this.random = Math.floor(Math.random() * Math.floor(max));
    this.AccountingVoouchersForm.controls['requirementNo'].setValue(this.random);
  }

  SaveDetail() {
    debugger
    if (this.AccountingVoouchersForm.value) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.AccountingVoouchersForm.value);
      obj.fileupload = this.Fileuploadstring;
      validation = true;
      if (validation) {
        debugger
        this.accountingvouchersService.SaveRequirement(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Accounting Vouchers has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          // this.hidepopup();
          this.AccountingVouchersList();
          this.handleFileSelect(event);
        });
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit Accounting Vouchers";
    this.accountingvouchersService.GetRequirement(data).subscribe((res: accountingVouchersModel) => {
      let date = this.datepipe.transform(res.requirementDate, 'yyyy-MM-dd');
      // let date1 = this.datepipe.transform(res.requirementDate1, 'yyyy-MM-dd');
      this.imgURL = res.fileupload;
      this.AccountingVoouchersForm.patchValue({
        id: res.id,
        requirementNo: res.requirementNo,
        requirementDate: date,
        requirementType: res.requirementType,
        DRLedgerNameTo: res.DRLedgerNameTo,
        DRAmount: res.DRAmount,
        DRLedgerNameFrom: res.DRLedgerNameFrom,
        DRAmount1: res.DRAmount1,
        remark: res.remark,
        challanNo: res.challanNo,
        referenceNo: res.referenceNo,
        RENT: res.RENT,
        SALARY: res.SALARY,
        ADMIN: res.ADMIN,
        fileupload: res.fileupload,
        IsApprove: res.IsApprove,
        rejectremark: res.rejectremark,
        // requirementNo1: res.requirementNo1,
        // requirementDate1: date1,
        // requirementType1: res.requirementType1,
        // DRLedgerNameTo1: res.DRLedgerNameTo1,
        // DRLedgerNameFrom1: res.DRLedgerNameFrom1,
        // DRAmount2: res.DRAmount2,
        // remark1: res.remark1,
        // referenceNo: res.referenceNo,
        // challanNo1: res.challanNo1,
        // RENT1: res.RENT1,
        // SALARY1: res.SALARY1,
        // ADMIN1: res.ADMIN,
        // fileupload1: res.fileupload1,
      })
      this.ShowPopUp();
    })
  }

  DataValue() {
    let obj = Object.assign({}, this.hk, this.AccountingVoouchersForm.value);
    this.AccountingVoouchersForm.controls.requirementDate.setValue(obj.requirementDate);
    this.AccountingVoouchersForm.controls.requirementType.setValue(obj.requirementType);
    this.AccountingVoouchersForm.controls.DRLedgerNameTo.setValue(obj.DRLedgerNameTo);
    this.AccountingVoouchersForm.controls.DRAmount.setValue(obj.DRAmount);
    this.AccountingVoouchersForm.controls.DRLedgerNameFrom.setValue(obj.DRLedgerNameFrom);
    this.AccountingVoouchersForm.controls.DRAmount1.setValue(obj.DRAmount1);
    this.AccountingVoouchersForm.controls.remark.setValue(obj.remark);
    this.AccountingVoouchersForm.controls.referenceNo.setValue(obj.referenceNo);
    this.AccountingVoouchersForm.controls.challanNo.setValue(obj.challanNo);
    this.AccountingVoouchersForm.controls.RENT.setValue(obj.RENT);
    this.AccountingVoouchersForm.controls.SALARY.setValue(obj.SALARY);
    this.AccountingVoouchersForm.controls.ADMIN.setValue(obj.ADMIN);
    this.AccountingVoouchersForm.controls.IsApprove.setValue(obj.IsApprove);
    this.AccountingVoouchersForm.controls.rejectremark.setValue(obj.rejectremark);
    this.AccountingVoouchersForm.controls.fileupload.setValue(obj.fileupload = this.Fileuploadstring);
    this.AccountingVouchersList();
    this.handleFileSelect(event);
  }

  // EditData(i){
  //   if (this.requirementType != null && this.requirementType != undefined && this.requirementType.length > 0) {
  //     for (var a = 0; a < this.requirementType.length; a++) {
  //       debugger
  //       if ( && this.requirementType[a]['id'] == 1) {
  //         this.requirementType[a]['Selected'] = true;
  //       }
  //     }
  //   }
  // }

  DeleteAccountingVouchers(id: number) {
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
        this.accountingvouchersService.DeleteRequirement(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.AccountingVouchersList();
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

  finishFunction() {
    this.hidepopup();
  }

  captureScreen(data: number) {

    this.accountingvouchersService.GetRequirement(data).subscribe((res: accountingVouchersModel) => {
      let date = this.datepipe.transform(res.requirementDate, 'yyyy-MM-dd');
      this.AccountingVoouchersForm.patchValue({
        id: res.id,
        requirementNo: res.requirementNo,
        requirementDate: date,
        requirementType: res.requirementType,
        DRLedgerNameTo: res.DRLedgerNameTo,
        DRAmount: res.DRAmount,
        DRLedgerNameFrom: res.DRLedgerNameFrom,
        DRAmount1: res.DRAmount1,
        remark: res.remark,
        challanNo: res.challanNo,
        referenceNo: res.referenceNo,
        RENT: res.RENT,
        SALARY: res.SALARY,
        ADMIN: res.ADMIN,
        fileupload: res.fileupload,
      })
    })

    debugger
    let data1 = document.getElementById("PdfData")
    html2canvas(data1).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('P1.pdf');
    })

    $("#PdfData").show();

  }


  handleFileSelect(evt) {

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
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.Base64File = reader.result;
      console.log(this.Base64File)
    };
  }

  preview(files, evt) {
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

  // previews(files1, evt) {
  //   if (files1.length === 0)
  //     return;

  //   var mimeType1 = files1[0].type;
  //   if (mimeType1.match(/image\/*/) == null) {
  //     return;
  //   }

  //   var reader1 = new FileReader();
  //   this.imagePath = files1;
  //   reader1.readAsDataURL(files1[0]);
  //   reader1.onload = (_event) => {
  //     this.imgURL1 = reader1.result;
  //     this.Fileuploadstring1 = this.imgURL1;
  //   }
  // }

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

}
