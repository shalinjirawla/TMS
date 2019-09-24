import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BillModel } from '../../shared/model/BillModel';
import { BillService } from '../../shared/service-proxy/billService';

import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';

import { DatePipe } from '@angular/common';
import { r } from "@angular/core/src/render3";

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {

  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;
  Title: string;
  rows: any;
  hk: any;
  dataTable: any;

  BillForm: FormGroup;
  branchModel: BranchModel[];

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private datepipe: DatePipe,
    private billService: BillService,
    private changedetectorRef: ChangeDetectorRef,
    private branchService: BranchMasterService,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.BillList();
    this.branchList();
  }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Bill";
    this.BillForm = this.fb.group({
      id: [0],
      billNo: [''],
      billdate: [''],
      CNno: [''],
      CNdate: [''],
      bookingbranch: [''],
      deliverybranch: [''],
      article: [''],
      actualweight: [''],
      chargeweight: [''],
      freightdetails: [''],
      paymentmode: [''],
      amount: [''],
      chequeNo: [''],
      chequedate: [''],
      amount1: [''],
      remark4: [''],
    });
  }

  branchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.branchModel = res;
    })
  }

  BillList() {
    this.billService.GetBillModels().subscribe((res: BillModel[]) => {
      this.rows = res;

      this.changedetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  SaveDetail() {
    if (this.BillForm.valid) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.BillForm.value);
      validation = true;
      if (validation) {
        debugger
        this.billService.SaveBill(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Bill has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.BillList();
        });
      }
    }
  }

  ShowData(data: number) {
    this.Title = "Edit Bill";
    this.billService.GetBillRepo(data).subscribe((res: BillModel) => {
      let date1 = this.datepipe.transform(res.CNdate, 'yyyy-MM-dd');
      let date2 = this.datepipe.transform(res.billdate, 'yyyy-MM-dd');
      let date3 = this.datepipe.transform(res.chequedate, 'yyyy-MM-dd');
      this.BillForm.patchValue({
        id: res.id,
        billNo: res.billNo,
        billdate: date2,
        CNno: res.CNno,
        CNdate: date1,
        bookingbranch: res.bookingbranch,
        deliverybranch: res.deliverybranch,
        article: res.article,
        actualweight: res.actualweight,
        chargeweight: res.chargeweight,
        freightdetails: res.freightdetails,
        paymentmode: res.paymentmode,
        amount: res.amount,
        chequeNo: res.chequeNo,
        chequedate: date3,
        amount1: res.amount1,
        remark4: res.remark4,
      })
      this.ShowPopUp();
    })

  }

  DeleteBill(id: number) {
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
        this.billService.DeleteBill(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.BillList();
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
