import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { UploadPackingSlipModel } from '../../shared/model/UploadPackingSlipModel';
import { UploadPackingSlipService } from '../../shared/service-proxy/uploadpackingslipService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-upload-packing-slip-operation',
  templateUrl: './upload-packing-slip-operation.component.html',
  styleUrls: ['./upload-packing-slip-operation.component.scss']
})
export class UploadPackingSlipOperationComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  UploadPackingSlipForm: FormGroup;

  modalRef: BsModalRef;

  Title: string;
  rows: any;
  hk: any;
  dataTable: any;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private changedetectorRef: ChangeDetectorRef,
    private uploadpackingslipService: UploadPackingSlipService,

  ) { }

  ngOnInit() {
    this.LoadForm();
    this.UploadPackingSlipList();
  }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add UploadPackingSlip";
    this.UploadPackingSlipForm = this.fb.group({
      id: [0],
      cnNo: [''],
      rollNo: [''],
      srtoNo: [''],
      lotNo: [''],
      meter: [''],
      weightInKg: [''],
    });
  }

  UploadPackingSlipList() {
    this.uploadpackingslipService.GetUploadPackingSlipModels().subscribe((res: UploadPackingSlipModel[]) => {
      this.rows = res;

      this.changedetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  SaveDetail() {
    debugger
    if (this.UploadPackingSlipForm.value) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.UploadPackingSlipForm.value);
      validation = true;
      if (validation) {
        this.uploadpackingslipService.SaveUploadPackingSlip(obj).subscribe((Response: Boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Upload Packing Slip has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.UploadPackingSlipList();
        });
      }
    }
  }

  ShowData(data) {
    this.Title = "Edit UploadPackingSlip";
    this.uploadpackingslipService.GetUploadPackingSlipModel(data).subscribe((res: UploadPackingSlipModel) => {
      this.UploadPackingSlipForm.patchValue({
        id: res.id,
        cnNo: res.cnNo,
        rollNo: res.rollNo,
        srtoNo: res.srtoNo,
        lotNo: res.lotNo,
        meter: res.meter,
        weightInKg: res.weightInKg,
      })
      this.ShowPopUp();
    })
  }

  DeletePackingSlip(id: number) {
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
        this.uploadpackingslipService.DeleteUploadPackingSlip(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.UploadPackingSlipList();
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

}
