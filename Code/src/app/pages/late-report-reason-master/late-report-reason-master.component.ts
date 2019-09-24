import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LateReportReasonModel } from '../../shared/model/LateReportReasonModel';
import { LateReportReasonMasterService } from '../../shared/service-proxy/LateReportReasonMasterService';


const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-late-report-reason-master',
  templateUrl: './late-report-reason-master.component.html',
  styleUrls: ['./late-report-reason-master.component.scss']
})
export class LateReportReasonMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  LateReportReasonMasterForm: FormGroup;
  modalRef: BsModalRef;
  Title: string;
  rows: any;
  datatable: any;
  cm: LateReportReasonModel;
  LateReportReasonCheckBox: any[];
  // ConfirmationCheckBox: any[];
  DeliveryCheckbox: any[];

  ChangedDelivCHeckboxes = [];
  ChangedDeliveryCHeckboxes = [];
  // ChangedServCHeckboxes = [];
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg',
  };

  constructor(private latereportreasonService: LateReportReasonMasterService,
    private modelService: BsModalService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.LateReportReasonList();
  }

  ShowPopUp() {
    this.modalRef = this.modelService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
    // this.LoadCheckboxDoorDeliveryConfirmation();
    this.LoadDelivery();
    this.LoadCheckBoxsLateReportReason();
  }

  LoadForm() {
    this.Title = "Add";
    this.LateReportReasonMasterForm = this.fb.group({
      reason: [''],
      reappforpro: [''],
      // doordeliconfirm: [''],
      id: [0],
    });
    // this.LoadCheckboxDoorDeliveryConfirmation();
    this.LoadDelivery();
    this.LoadCheckBoxsLateReportReason();
  }
  // Listing
  LateReportReasonList() {
    this.latereportreasonService.GetReportReasonModels().subscribe((res: LateReportReasonModel[]) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.datatable = table.DataTable();
    });
  }

  LoadCheckBoxsLateReportReason() {
    this.LateReportReasonCheckBox = [{
      id: 1,
      Name: "Booking",
      Selected: false,
      formControlName: "Booking"
    }, {
      id: 2,
      Name: "Challan",
      Selected: false,
      formControlName: "Challan"
    }, {
      id: 3,
      Name: "Truck Arrival",
      Selected: false,
      formControlName: "Truck Arrival"
    }, {
      id: 4,
      Name: "Truck Unloading",
      Selected: false,
      formControlName: "Truck Unloading"
    }, {
      id: 5,
      Name: "Godown Delivery",
      Selected: false,
      formControlName: "Godown Delivery",
    }, {
      id: 6,
      Name: "Direct Delivery",
      Selected: false,
      formControlName: "Direct Delivery"
    }];
  }

  LoadDelivery() {
    this.DeliveryCheckbox = [{
      id: 1,
      Name: "Pre Delivery",
      Selected: false,
      formControlName: "Pre Delivery"
    }, {
      id: 2,
      Name: "Door Delivery Confirmation",
      Selected: false,
      formControlName: "Door Delivery Confirmation"
    }];
  }

  // LoadCheckboxDoorDeliveryConfirmation() {
  //   this.ConfirmationCheckBox = [{
  //     id: 1,
  //     Name: "Direct Delivery",
  //     Selected: false,
  //     formControlName:"Direct Delivery"
  //   }];
  // }

  SaveDetail(Data: LateReportReasonModel) {
    debugger
    let obj = Object.assign({}, this.cm, this.LateReportReasonMasterForm.value, {
      reappforpro: this.ChangedDelivCHeckboxes.join(","),
      doordelivery: this.ChangedDeliveryCHeckboxes.join(","),
      // doordeliconfirm: this.ChangedServCHeckboxes.join(","),

    });
    if (this.LateReportReasonMasterForm.dirty) {
      this.latereportreasonService.SavelateReportReason(obj).subscribe((Response: boolean) => {
        this.hidepopup();
        this.Destroy();
        if (Response) {
          Swal({
            position: 'center',
            type: 'success',
            title: 'LateReportReason has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
        this.LateReportReasonList();
      })
    }
  }

  //CHeckBox
  // onCheckboxChange(id, event) {
  //   if (event.currentTarget.checked == false) {
  //     this.ChangedServCHeckboxes = this.ChangedServCHeckboxes.filter(function (index) {
  //       return (index != id.id);
  //     });
  //   } else {
  //     this.ChangedServCHeckboxes.push(id.id)
  //   }
  // }

  // Checkbox
  onServiceCheckboxChange(id, event) {
    debugger
    if (event.currentTarget.checked == false) {
      this.ChangedDelivCHeckboxes = this.ChangedDelivCHeckboxes.filter(function (index) {
        return (index != id.id);
      });
    } else {
      this.ChangedDelivCHeckboxes.push(id.id)
    }
  }

  onDeliveryCheckboxChange(id, event) {
    if (event.currentTarget.checked == false) {
      this.ChangedDeliveryCHeckboxes = this.ChangedDeliveryCHeckboxes.filter(function (index) {
        return (index != id.id);
      });
    }
    else {
      this.ChangedDeliveryCHeckboxes.push(id.id);
    }
  }

  // onCheckboxChange(id, event){
  //   debugger
  //   if(event.currentTarget.checked==false){
  //     this.ChangedServCHeckboxes=this.ChangedServCHeckboxes.filter(function(index){
  //       return (index !=id.id);
  //     });
  //   }
  //   else{
  //     this.ChangedServCHeckboxes.push(id.id);
  //   }
  // }

  ShowData(data: number) {
    this.Title = "Edit";
    this.latereportreasonService.GetReportReasonModel(data).subscribe((res: LateReportReasonModel) => {
      this.LateReportReasonMasterForm.patchValue({
        id: res.id,
        reason: res.reason,
        // reappforpro:res.reappforpro,
        // doordeliconfirm:res.doordeliconfirm,
        // doordelivery:res.doordelivery,
      });
      this.EditCheckboxes(res.reappforpro, res.doordelivery);
      this.ShowPopUp();
    });
  }

  EditCheckboxes(reappfors, doordeliverys) {
    debugger
    if (reappfors != null && reappfors != undefined && reappfors != '') {
      var Sboxes = reappfors.split(",");
      for (var i = 0; i < Sboxes.length; i++) {
        var id = parseInt(Sboxes[i]);
        this.LateReportReasonCheckBox.map((x) => { if (x.id == id) { x.Selected = true; } })
      }
    }

    if (doordeliverys != null && doordeliverys != undefined && doordeliverys != '') {
      var DDboxes = doordeliverys.split(",");
      for (var i = 0; i < DDboxes.length; i++) {
        var id = parseInt(DDboxes[i]);
        this.DeliveryCheckbox.map((x) => { if (x.id == id) { x.Selected = true } })
      }
    }

    // if (doordelis != null && doordelis != undefined && doordelis != '') {
    //   var Dboxes = doordelis.split(",");
    //   for (var i = 0; i < Dboxes.length; i++) {
    //     var id = parseInt(Dboxes[i]);
    //     this.ConfirmationCheckBox.map((x) => { if (x.id == id) { x.Selected = true; } })
    //   }
    // }
  }

  DeleteLateReportReason(id: number) {
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
        this.latereportreasonService.DeleteLateReportReason(id)
          .subscribe(() => {
            this.Destroy();
            this.LateReportReasonList();
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

} 
