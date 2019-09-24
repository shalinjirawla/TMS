import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DoorDeliveryConfirmService } from 'app/shared/service-proxy/doordeliveryconfirmService';
import { DOorDeliveryConfirmModel } from 'app/shared/model/DoorDeliveryConfirmModel';

import { ReserveOperationService } from '../../shared/service-proxy/reserveoperationService'
import { ReserveModel } from '../../shared/model/ReserveModel';

import { PreDeliveryService } from '../../shared/service-proxy/predeliveryService';
import { PreDeliveryModel } from '../../shared/model/PreDeliveryModel';

import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-door-delivery-confirm',
  templateUrl: './door-delivery-confirm.component.html',
  styleUrls: ['./door-delivery-confirm.component.scss']
})
export class DoorDeliveryConfirmComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;
  Title: string;
  cmd: any;
  rows: any;
  dataTable: any;

  reserveModel: ReserveModel[];
  predeliveryModel: PreDeliveryModel[];

  DoorDeliveryConfirmForm: FormGroup;

  constructor(private fb: FormBuilder,
    private modelService: BsModalService,
    private doordeliveryconfirmService: DoorDeliveryConfirmService,
    private changedetectorRef: ChangeDetectorRef,
    private reserveService: ReserveOperationService,
    private predeliveryService: PreDeliveryService,
    private datepipe: DatePipe,
  ) { }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  }

  ngOnInit() {
    this.LoadForm();
    this.DoorDeliveryConfirmList();
    this.ReserveList();
    this.PreDeliveryList();
  }

  ShowPopUp() {
    this.modalRef = this.modelService.show(this.template, this.config)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Door Delivery Confirm",
      this.DoorDeliveryConfirmForm = this.fb.group({
        id: [0],
        doordeliveryNo: [''],
        predeliveryNo: [''],
        CNno: [''],
        CNdate: [''],
        bookingbranch: [''],
        consignor: [''],
        item: [''],
        deliveryarticle: [''],
        deliveryweight: [''],
        undeliveredarticle: [''],
        undeliveredweight: [''],
        balancearticle: [''],
        balanceweight: [''],
        rollno: [''],
        remark: [''],
      })
  }

  ReserveList() {
    this.reserveService.GetReserveBookingModels().subscribe((res: ReserveModel[]) => {
      this.reserveModel = res;
    })
  }

  PreDeliveryList() {
    this.predeliveryService.GetPreDeliveryModels().subscribe((res: PreDeliveryModel[]) => {
      this.predeliveryModel = res;
    })
  }

  DoorDeliveryConfirmList() {
    this.doordeliveryconfirmService.GetDoorDeliveryConfirmModels().subscribe((res: DOorDeliveryConfirmModel[]) => {
      this.rows = res;

      this.changedetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  SaveDetail() {
    if (this.DoorDeliveryConfirmForm.value) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.cmd, this.DoorDeliveryConfirmForm.value);
      validation = true;
      if (validation) {
        debugger
        this.doordeliveryconfirmService.SaveDeliveryConfirm(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Door Delivery Confirm has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.DoorDeliveryConfirmList();
          this.destroy();
        });
      }
    }
  }

  ShowData(data: number) {
    this.Title = "Edit Door Delivery Confirm"
    this.doordeliveryconfirmService.GetDoorDeliveryConfirmModel(data).subscribe((res: DOorDeliveryConfirmModel) => {
      let date1 = this.datepipe.transform(res.CNdate, 'yyyy-MM-dd');
      this.DoorDeliveryConfirmForm.patchValue({
        id: res.id,
        doordeliveryNo: res.doordeliveryNo,
        predeliveryNo: res.predeliveryNo,
        CNno: res.CNno,
        CNdate: date1,
        bookingbranch: res.bookingbranch,
        consignor: res.consignor,
        item: res.item,
        deliveryarticle: res.deliveryarticle,
        deliveryweight: res.deliveryweight,
        undeliveredarticle: res.undeliveredarticle,
        undeliveredweight: res.undeliveredweight,
        balancearticle: res.balancearticle,
        balanceweight: res.balanceweight,
        rollno: res.rollno,
        remark: res.remark,
      });
      this.ShowPopUp();
    })
  }

  destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  DeleteDoorDeliveryConfirm(id: number) {
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
        this.doordeliveryconfirmService.DeleteDoorDeliveryConfirm(id)
          .subscribe((Response: boolean) => {
            this.destroy();
            this.DoorDeliveryConfirmList();
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
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }

}
