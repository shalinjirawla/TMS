import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { RegularClientMasterService } from '../../shared/service-proxy/regularClientMasterService';
import { RegularClientModel } from '../../shared/model/RegularClientModel';

import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';

import { DatePipe } from '@angular/common';

import { VirtualGodownMasterService } from '../../shared/service-proxy/virtualGodownMasterService';
import { VirtualGodownModel } from '../../shared/model/VirtualGodownModel';

import { PackingMasterServiceService } from '../../shared/service-proxy/packing-master-service.service';
import { PackingModel } from '../../shared/model/PackingModel';

import { ConsignmentModel } from '../../shared/model/ConsignmentModel';
import { ConsignmentOperationService } from '../../shared/service-proxy/consignmentOperationService';

import { GodownMasterService } from '../../shared/service-proxy/godownMasterService';
import { GodownModel } from '../../shared/model/GodownModel';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-consignment-operation',
  templateUrl: './consignment-operation.component.html',
  styleUrls: ['./consignment-operation.component.scss']
})
export class ConsignmentOperationComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  ConsignmentOperationForm: FormGroup;
  Title: string;
  modalRef: BsModalRef;

  rows: any[];
  hk: any;
  dataTable:any;

  bookingTypeBox: any;
  packingBookingBox: any;
  deliveryBox: any;
  modelOfTransportBox: any;
  insuredBox: any;
  freight: any;
  PaymentBox: any;

  branchModel: BranchModel[];
  godownModel: GodownModel[];
  virtualgodownModel: VirtualGodownModel[];
  regularclientModel: RegularClientModel[];

  constructor(
    private fb: FormBuilder,
    private consignmentService: ConsignmentOperationService,
    private modalService: BsModalService,
    private godownService: GodownMasterService,
    private branchService: BranchMasterService,
    private virtualgodownService: VirtualGodownMasterService,
    private regularClientService: RegularClientMasterService,
    private datepipe: DatePipe,
    private changedetectoryRef:ChangeDetectorRef,
  ) { }


  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: "modal-lg"
  };

  ngOnInit() {
    this.LoadForm();
    this.ConsignmentList();
    this.BranchList();
    this.GodownList();
    this.VirtualGodownList();
    this.RegularClientList();
  }

  LoadForm() {
    this.Title = "Add new Booking";
    this.ConsignmentOperationForm = this.fb.group({
      id: [0],
      cndate: [''],
      expectedDelivery: [''],
      from: [''],
      to: [''],
      godownNo: [''],
      paymentType: [''],
      actualWeight: [''],
      consignee: [''],//Validators.required
      cnNo: [''],
      virtualGoddownNo: [''],//,Validators.required
      consignorDetails: [''],
      consignor: [''],//,Validators.required
      agentName: [''],//,Validators.required
      agentDetails: [''],
      bookingType: [''],
      deliveryType: [''],
      modeOfTransport: [''],
      invoiceNo: [''],
      invoiceValue: [''],
      consignorInvoice: [''],
      freightBasis: [''],
      ftl: [''],
      isCcAttached: [''],
      isCod: [''],
      chargeWeight: [''],
      freightRate: [''],
      privateMark: [''],
      insuredBy: [''],
      freight: [''],
      surcharge: [''],
      hamaliCharge: [''],
      localCartages: [''],
      doorDeliveryCharge: [''],
      statisticalCharges: [''],
      miscellaneousCharges: [''],
      godownCharges: [''],
      deliveryBranch: [''],
      cod: [''],
      packingtype: ['']
    });
    this.BookingTypeBoxes();
    this.PackingBookingBox();
    this.DeliveryBoxes();
    this.ModeOfTransportBoxes();
    this.InsuredBoxes();
    this.FreightBoxes();
    this.PaymentBoxes();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  ConsignmentList() {
    this.consignmentService.GetConsignmentModels().subscribe((res: ConsignmentModel[]) => {
      this.rows = res;
      this.changedetectoryRef.detectChanges();
      const  table :any= $('table');
      this.dataTable=table.DataTable();
    })
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.branchModel = res;
    })
  }

  GodownList() {
    this.godownService.GetGodowns().subscribe((res: GodownModel[]) => {
      this.godownModel = res;
    })
  }

  VirtualGodownList() {
    this.virtualgodownService.GetVirtualGodowns().subscribe((res: VirtualGodownModel[]) => {
      this.virtualgodownModel = res;
    })
  }

  RegularClientList() {
    this.regularClientService.GetRegularClients().subscribe((res: RegularClientModel[]) => {
      this.regularclientModel = res;
    })
  }

  BookingTypeBoxes() {
    this.bookingTypeBox = [
      { id: 1, name: "Sundry" },
      { id: 2, name: "FTL" }
    ];
  }
  PackingBookingBox() {
    this.packingBookingBox = [
      { id: 1, name: "Bundle" },
      { id: 2, name: "Role" },
      { id: 3, name: "Bales" },

    ]
  }
  DeliveryBoxes() {
    this.deliveryBox = [
      { id: 1, name: "Godown Delivery" },
      { id: 2, name: "Door Delivery" }

    ]
  }

  ModeOfTransportBoxes() {
    this.modelOfTransportBox = [
      { id: 1, name: "Surface" },
      { id: 2, name: "Rail" },
      { id: 3, name: "Air" },
      { id: 4, name: " Priority" },
    ];
  }

  InsuredBoxes() {
    this.insuredBox = [
      { id: 1, name: "CNR" },
      { id: 2, name: "CNE" },
      { id: 3, name: "STSPL" },
      { id: 4, name: "TP" },

    ]

  }
  FreightBoxes() {
    this.freight = [
      { id: 1, name: "Weight" },
      { id: 2, name: "Article" },
      { id: 3, name: "FTL" },
      { id: 4, name: "Volumet" },
    ]
  }
  PaymentBoxes() {
    this.PaymentBox = [{
      id: 1,
      Name: "ToPay"
    },
    {
      id: 2,
      Name: "To be billed"
    },
    {
      id: 3,
      Name: "Paid"
    },
    {
      id: 4,
      Name: "FOC"
    },
    {
      id: 5,
      Name: "Rebook"
    }
    ]
  }

  SaveDetail() {
    debugger
    if (this.ConsignmentOperationForm.value) {
      let validation: Boolean = false;
      let bookingType = this.ConsignmentOperationForm.controls.bookingType.value;
      let packingtype = this.ConsignmentOperationForm.controls.packingtype.value;
      let deliveryType = this.ConsignmentOperationForm.controls.deliveryType.value;
      let modeOfTransport = this.ConsignmentOperationForm.controls.modeOfTransport.value;
      let freightBasis = this.ConsignmentOperationForm.controls.freightBasis.value;
      let obj = Object.assign({}, this.hk, this.ConsignmentOperationForm.value);
      validation = true;
      if (validation) {
        this.consignmentService.SaveConsignment(obj).subscribe((Response: boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Consignment Operation has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.ConsignmentList();
        })
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit Consignment"
    this.consignmentService.GetConsignmentModel(data).subscribe((res: ConsignmentModel) => {
      var date1 = this.datepipe.transform(res.cndate, 'yyyy-MM-dd');
      var date2 = this.datepipe.transform(res.expectedDelivery, 'yyyy-MM-dd');
      this.ConsignmentOperationForm.patchValue({
        id: res.id,
        cndate: date1,
        expectedDelivery: date2,
        from: res.from,
        to: res.to,
        godownNo: res.godownNo,
        paymentType: res.paymentType,
        actualWeight: res.actualWeight,
        consignee: res.consignee,
        cnNo: res.cnNo,
        deliveryBranch: res.deliveryBranch,
        virtualGoddownNo: res.virtualGoddownNo,
        consignorDetails: res.consignorDetails,
        consignor: res.consignor,
        agentName: res.agentName,
        agentDetails: res.agentDetails,
        bookingType: res.bookingType,
        deliveryType: res.deliveryType,
        modeOfTransport: res.modeOfTransport,
        invoiceNo: res.invoiceNo,
        invoiceValue: res.invoiceValue,
        consignorInvoice: res.consignorInvoice,
        freightBasis: res.freightBasis,
        ftl: res.ftl,
        isCcAttached: res.isCcAttached,
        isCod: res.isCod,
        chargeWeight: res.chargeWeight,
        freightRate: res.freightRate,
        privateMark: res.privateMark,
        insuredBy: res.insuredBy,
        freight: res.freight,
        surcharge: res.surcharge,
        hamaliCharge: res.hamaliCharge,
        localCartages: res.localCartages,
        doorDeliveryCharge: res.doorDeliveryCharge,
        statisticalCharges: res.statisticalCharges,
        miscellaneousCharges: res.miscellaneousCharges,
        godownCharges: res.godownCharges,
        cod: res.cod,
        // financeEffect:res.financeEffect
        packingtype: res.packingtype,
      });
      this.ShowPopUp();
    });
  }

  DeleteConsignment(id: number) {
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
        this.consignmentService.DeleteConsignment(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.ConsignmentList();
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
