import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { CostCentrModel } from '../../shared/model/CostCentreModel';
import { CostCentreService } from '../../shared/service-proxy/costcentreService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-cost-centre',
  templateUrl: './cost-centre.component.html',
  styleUrls: ['./cost-centre.component.scss']
})
export class CostCentreComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;

  CostCentreForm: FormGroup;

  modalRef: BsModalRef;
  Title: string;
  rows: any;
  hk: any;
  dataTable: any;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  }

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private costcentreService: CostCentreService,
    private changedetecorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.CostCentreList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Cost Centre",
      this.CostCentreForm = this.fb.group({
        id: [0],
        costcentrename: [''],
        remark: [''],
      })
  }

  CostCentreList() {
    this.costcentreService.GetCostCentreModels().subscribe((res: CostCentrModel[]) => {
      this.rows = res;

      this.changedetecorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  SaveDetail() {
    debugger
    if (this.CostCentreForm.valid) {
      let validation: boolean = true;
      let obj = Object.assign({}, this.hk, this.CostCentreForm.value);
      validation = true;
      if (validation) {
        this.costcentreService.SaveCostCentre(obj).subscribe((Response: boolean) => {
          // this.Destroy();
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Cost Centre has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.CostCentreList();
        })
      }
    }
  }

  ShowData(data: number) {
    this.Title = "Edit Cost Centre";
    this.costcentreService.GetCostCentreModel(data).subscribe((res: CostCentrModel) => {
      this.CostCentreForm.patchValue({
        id: res.id,
        costcentrename: res.costcentrename,
        remark: res.remark,
      })
      this.ShowPopUp();
    })
  }

  DeleteCostCentre(id: number) {
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
        this.costcentreService.DeleteCOstCentre(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.CostCentreList();
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
