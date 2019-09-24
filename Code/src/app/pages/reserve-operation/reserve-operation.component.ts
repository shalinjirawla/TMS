import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ReserveModel } from '../../shared/model/ReserveModel';
import { ReserveOperationService } from '../../shared/service-proxy/reserveoperationService';

import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';

import { RegularClientModel } from '../../shared/model/RegularClientModel';
import { RegularClientMasterService } from '../../shared/service-proxy/regularClientMasterService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-reserve-operation',
  templateUrl: './reserve-operation.component.html',
  styleUrls: ['./reserve-operation.component.scss']
})
export class ReserveOperationComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;
  Title: string;
  hk: any;

  rows: any[];
  dataTable:any;

  ReserveOperationForm: FormGroup;
  branchModel:BranchModel[];
  regularclient:RegularClientModel[];


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private reserveService: ReserveOperationService,
    private branchService:BranchMasterService,
    private regularClientService:RegularClientMasterService,
    private changedetectoryRef:ChangeDetectorRef,
  ) { }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    // class: 'modal-lg'
  };

  ngOnInit() {
    this.LoadForm();
    this.ReserveList();
    this.BranchList();
    this.RegularClientList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
  }

  HidePopUp() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Reverse";
    this.ReserveOperationForm = this.fb.group({
      id: [0],
      branch: [''],
      Consignor: [''],
      CNfrom: [''],
      CNto: [''],
    });
  }

  ReserveList(){
    this.reserveService.GetReserveBookingModels().subscribe((res:ReserveModel[])=>{
      this.rows=res;

      this.changedetectoryRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  BranchList(){
    this.branchService.GetBranches().subscribe((res:BranchModel[])=>{
      this.branchModel=res;
    })
  }

  RegularClientList(){
    this.regularClientService.GetRegularClients().subscribe((res:RegularClientModel[])=>{
      this.regularclient=res;
    })
  }

  SaveDetail() {
    debugger
    if (this.ReserveOperationForm.value) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.ReserveOperationForm.value);
      validation = true;
      if (validation) {
        this.reserveService.SaveReserveBooking(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Reserve Operation has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.HidePopUp();
          this.ReserveList();
        });
      }
    }
  }

  ShowData(data){
    this.Title="Edit Reserve";
    this.reserveService.GetReserveBookingModel(data).subscribe((res:ReserveModel)=>{
      this.ReserveOperationForm.patchValue({
        id:res.id,
        branch:res.branch,
        Consignor:res.Consignor,
        CNfrom:res.CNfrom,
        CNto:res.CNto,
      });
      this.ShowPopUp();
    });
  }

  DeleteReserve(id: number) {
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
        this.reserveService.DeleteReserveBooking(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.ReserveList();
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
