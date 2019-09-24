import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DepartmentModel } from '../../shared/model/DepartmentModel';
import { DepartmentmasterService } from '../../shared/service-proxy/departmentMasterService';
import swal from 'sweetalert2';
import { PackingTypeModel } from 'app/shared/model/PackingTypeModel';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.scss']
})
export class DepartmentMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  DepartmentMasterForm: FormGroup;
  rows: any;
  dataTable: any;
  Title: string;
  cm: DepartmentModel;
  modalRef: BsModalRef;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };
  constructor(private departmentService: DepartmentmasterService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.Departmentlist();
    this.LoadForm();
  }

  Departmentlist() {
    this.departmentService.GetDepartments().subscribe((res: DepartmentModel[]) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }
  LoadForm() {
    this.Title = "Add"
    this.DepartmentMasterForm = this.fb.group({
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
    let obj = Object.assign({}, this.cm, this.DepartmentMasterForm.value);
    this.departmentService.SaveDepartment(obj).subscribe((Response: boolean) => {
      // this.Destroy();
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'department has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal({
          position: 'center',
          type: 'error',
          title: 'name already exists...!',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.Departmentlist();
      this.hidepopup();
    })
  }
  ShowData(data: number) {
    debugger
    this.Title = "Edit";
    this.departmentService.GetDepartment(data).subscribe((res: DepartmentModel) => {
      this.DepartmentMasterForm.patchValue({
        id: res.id,
        name: res.name,
      });
      this.ShowPopUp();
    });
  }
  DeleteDepartment(id: number) {
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
        this.departmentService.DeleteDepartment(id)
          .subscribe((Response: boolean) => {
            // this.Destroy();
            this.Departmentlist();
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
