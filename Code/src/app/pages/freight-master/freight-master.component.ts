import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { freightMasterModule } from './freight-master.module';
import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';
import { freightMasterService } from '../../shared/service-proxy/FreightMasterService';
import { FreightModel } from 'app/shared/model/FreightModel';
import { forEach } from '@angular/router/src/utils/collection';
import swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-freight-master',
  templateUrl: './freight-master.component.html',
  styleUrls: ['./freight-master.component.scss']
})
export class FreightMasterComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;
  freightMasterForm: FormGroup;
  gm: FreightModel;
  rows: FreightModel[];
  dataTable: any;
  modalRef: BsModalRef;
  Title: String;
  BookingTypeChechbox = [];
  TranspotTypeCheckBox = [];
  BranchMaster = [];

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  }

  Branches: BranchModel[] = [];

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private FreightService: freightMasterService,
    private branchService: BranchMasterService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.LoadCheckBoxesBooking();
    this.LoadCheckBoxesTranspot();
    this.BranchList();
    this.freightList();
  }

  LoadCheckBoxesBooking() {
    this.BookingTypeChechbox = [{
      id: 1,
      Name: "Sundry"
      // Selected:false,
      // formControlName:'Sundry',
    }, {
      id: 2,
      Name: "FTL"
      // Selected:false
    }];
  }

  LoadCheckBoxesTranspot() {
    this.TranspotTypeCheckBox = [{
      id: 1,
      Name: "Air"
    }, {
      id: 2,
      Name: "Rail"
    }, {
      id: 3,
      Name: "Road"
    }, {
      id: 4,
      Name: "Express"
    }, {
      id: 5,
      Name: "Premium"
    }]
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.Branches = res;
    });
  }


  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  hidepopup() {
    debugger
    this.modalRef.hide();
    this.LoadForm();
    this.LoadCheckBoxesTranspot();
    this.LoadCheckBoxesBooking();
    //this.LoadForm();
  }
  LoadForm() {
    this.Title = "Add New Freigh";
    this.freightMasterForm = this.fb.group({
      bookingType: ['0'],
      transpotType: ['0'],
      frombranch: ['0'],
      tobranch: ['0'],
      rateperKG: [''],
      distance: [''],
      transitdays: [''],
      id: [0]
    });
  }

  freightList() {
    this.FreightService.GetFreights().subscribe((res: FreightModel[]) => {
      this.rows = res;
      debugger
      // console.log(res);

      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  SaveDetail(Data: FreightModel) {
    debugger
    let bookingType = this.freightMasterForm.controls.bookingType.value;
    let transpotType = this.freightMasterForm.controls.transpotType.value;
    let obj = Object.assign({}, this.gm, this.freightMasterForm.value);
    this.FreightService.SaveFreight(obj).subscribe((Response: boolean) => {
      this.hidepopup();
      this.destroy();
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Freight has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      //this.freightMasterForm.reset();
      this.freightList();
      this.LoadForm();

    });
  }


  ShowData(data: number) {
    this.Title = "Edit Freight";
    this.FreightService.GetFreight(data).subscribe((res: FreightModel) => {
      this.freightMasterForm.patchValue({
        id: res.id,
        bookingType: res.bookingType,
        transpotType: res.transpotType,
        frombranch: res.frombranch,
        tobranch: res.tobranch,
        rateperKG: res.rateperKG,
        distance: res.distance,
        transitdays: res.transitdays,
      });
      this.ShowPopUp();
    });
  }

  destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  DeleteFreight(id: number) {
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
        this.FreightService.DeleteFreight(id)
          .subscribe((Response: boolean) => {
            this.destroy();
            this.freightList();
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

  public Validator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }

}
