import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { VehicleTypeModel } from "../../shared/model/VehicleTypeModel";
import { VehicleTypeMasterService } from "../../shared/service-proxy/vehicletypeMasterService";

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-vehicle-type-master',
  templateUrl: './vehicle-type-master.component.html',
  styleUrls: ['./vehicle-type-master.component.scss']
})
export class VehicleTypeMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  VehicleTypeMasterForm: FormGroup;
  cmd: VehicleTypeModel;
  rows: any;
  dataTable: any;
  Title: string;
  modalRef: BsModalRef;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  constructor(private vehicletypeService: VehicleTypeMasterService,
    private modelService: BsModalService,
    private changeDectorRef: ChangeDetectorRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.VehicleTypeList();
  }

  LoadForm() {
    this.Title = "Add Vehicle Type"
    this.VehicleTypeMasterForm = this.fb.group({
      name: [''],
      id: [0],
    })
  }

  ShowPopUp() {
    this.modalRef = this.modelService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  VehicleTypeList() { 
    debugger
    this.vehicletypeService.GetVehicleTypeModels().subscribe((res:VehicleTypeModel[]) => {
      this.rows = res;
      debugger
  
      this.changeDectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }


  SaveDetail(data: VehicleTypeModel) {
    debugger
    let obj = Object.assign({}, this.cmd, this.VehicleTypeMasterForm.value);
    this.vehicletypeService.SaveVehicleType(obj).subscribe((response: boolean) => {
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Vehicle Type has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.hidepopup();
      this.VehicleTypeList();
    });
  }

  ShowData(data: number) {
    this.Title = "Edit Vehicle Type"
    this.vehicletypeService.GetVehicleType(data).subscribe((res: VehicleTypeModel) => {
      this.VehicleTypeMasterForm.patchValue({
        id: res.id,
        name: res.name,
      })
      this.ShowPopUp();
    });
  }

  DeleteVehicleType(id: number) {
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
        this.vehicletypeService.DeleteVehicleType(id)
          .subscribe((Response: boolean) => {
            // this.Destroy();
            this.VehicleTypeList();
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
