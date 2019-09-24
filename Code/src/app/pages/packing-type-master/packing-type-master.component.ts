import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PackingTypeModel } from '../../shared/model/PackingTypeModel';
import { PackingTypemasterService } from '../../shared/service-proxy/packingtypeMasterService';
import swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-packing-type-master',
  templateUrl: './packing-type-master.component.html',
  styleUrls: ['./packing-type-master.component.scss']
})
export class PackingTypeMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  PackingTypeMasterForm: FormGroup;
  rows: any;
  dataTable: any;
  Title: string;
  cm: PackingTypeModel;
  modalRef: BsModalRef;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };


  constructor(private packingService: PackingTypemasterService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.Packinglist();
    this.LoadForm();
  }

  Packinglist() {
    this.packingService.GetPackingTypes().subscribe((res: PackingTypeModel[]) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.dataTable();
    })
  }
  LoadForm() {
    this.Title = "Add"
    this.PackingTypeMasterForm = this.fb.group({
      name: [''],
      id: [0],
    });
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }
  SaveDetail() {
    debugger
    let obj = Object.assign({}, this.cm, this.PackingTypeMasterForm.value);
    this.packingService.SavePackingType(obj).subscribe((Response: boolean) => {
      // this.Destroy();
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Packing Type has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }else {
        Swal({
          position: 'center',
          type: 'error',
          title: 'Name already exists...!',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.Packinglist();
      this.hidepopup();
    })
  }
  ShowData(data: number) {
    debugger
    this.Title = "Edit";
    this.packingService.GetpackingType(data).subscribe((res: PackingTypeModel) => {
      this.PackingTypeMasterForm.patchValue({
        id: res.id,
        name: res.name,
      });
      this.ShowPopUp();
    });
  }
  DeletePackingType(id: number) {
    debugger
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
        this.packingService.DeletePackingType(id)
          .subscribe((Response: boolean) => {
            // this.Destroy();
            this.Packinglist();
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
}
