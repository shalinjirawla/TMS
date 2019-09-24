import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BranchModel } from '../../shared/model/BranchModel';
import { GodownMasterService } from '../../shared/service-proxy/godownMasterService';
import { GodownModel } from '../../shared/model/GodownModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';
import { VirtualGodownModel } from '../../shared/model/VirtualGodownModel';
import { VirtualGodownMasterService } from '../../shared/service-proxy/virtualGodownMasterService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});


@Component({
  selector: 'app-virtual-godown-master',
  templateUrl: './virtual-godown-master.component.html',
  styleUrls: ['./virtual-godown-master.component.scss']
})
export class VirtualGodownMasterComponent implements OnInit {


  @ViewChild('template') template: TemplateRef<any>;
  VirtualGodwonMasterForm: FormGroup;
  VM: VirtualGodownModel;
  rows: any[];

  dataTable: any;
  Title: string;

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  Branches: BranchModel[] = [];
  Godowns: GodownModel[] = [];

  constructor(private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: BsModalService,
    private branchService: BranchMasterService,
    private godownService: GodownMasterService,
    private virtualGodownService: VirtualGodownMasterService) { }

  ngOnInit() {
    this.VirtualGodownList();
    this.BranchList();
    this.GodownList();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add New Virtual Godown";
    this.VirtualGodwonMasterForm = this.fb.group({
      id: [''],
      virtualGodownCode: [''],
      branchId: ['0'],
      godownId: ['0'],
      storageCapacity: [''],
      remark: ['']
    });
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.Branches = res;
    });
  }

  VirtualGodownList() {
    this.virtualGodownService.GetVirtualGodowns().subscribe((res: VirtualGodownModel[]) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }

  GodownList() {
    this.godownService.GetGodowns().subscribe((res: GodownModel[]) => {
      this.Godowns = res;
    });
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  HidePopUp() {
    this.modalRef.hide();
    this.LoadForm();
    //this.VirtualGodwonMasterForm.reset();
  }

  SaveDetail(Data: VirtualGodownModel) {
    let obj = Object.assign({}, this.VM, this.VirtualGodwonMasterForm.value);
    if (this.VirtualGodwonMasterForm.dirty) {
      this.virtualGodownService.SaveVirtualGodown(obj).subscribe((response: boolean) => {
        this.HidePopUp();
        this.Destroy();
        if (response) {
          Swal({
            position: 'center',
            type: 'success',
            title: 'Godown has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
        this.VirtualGodownList();
      });
    }
  }

  ShowData(data: number) {
    this.Title = "Edit Godown";
    this.virtualGodownService.GetVirtualGodown(data).subscribe((res: VirtualGodownModel) => {
      this.VirtualGodwonMasterForm.patchValue({
        id: res.id,
        virtualGodownCode: res.virtualGodownCode,
        branchId: res.branchId,
        godownId: res.godownId,
        storageCapacity: res.storageCapacity,
        remark: res.remark
      });
      this.ShowPopUp();
    });
  }

  DeleteVirtualGodown(id: number) {

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
        this.virtualGodownService.DeleteVirtualGodown(id)
          .subscribe(() => {
            this.Destroy();
            this.VirtualGodownList();
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

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  public Validator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }
}
