import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CommodityTypeModel } from '../../shared/model/CommodityTypemodel';
import { CommodityTypemasterService } from '../../shared/service-proxy/commoditytypemasterService';
import swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-commodity-master',
  templateUrl: './commodity-Type-master.component.html',
  styleUrls: ['./commodity-Type-master.component.scss']
})
export class CommodityTypeMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  CommodityTypeMasterForm: FormGroup;
  rows: any;
  dataTable: any;
  Title: string;
  cm: CommodityTypeModel;
  modalRef: BsModalRef;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  constructor(private commodityService: CommodityTypemasterService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.CommodityList();
    this.LoadForm();
  }

  CommodityList() {
    this.commodityService.GetCommodityTypes().subscribe((res: CommodityTypeModel[]) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  LoadForm() {
    this.Title = "Add"
    this.CommodityTypeMasterForm = this.fb.group({
      Name: [''],
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
    let obj = Object.assign({}, this.cm, this.CommodityTypeMasterForm.value);
    this.commodityService.SaveCommodityType(obj).subscribe((Response: boolean) => {
      this.Destroy();
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Commodity Type has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal({
          position: 'center',
          type: 'error',
          title: 'Name already exists...!',
          showConfirmButton: false,
          timer: 1500
        });
      }

      this.CommodityList();
      this.hidepopup();
    })
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit";
    this.commodityService.GetCommodityType(data).subscribe((res: CommodityTypeModel) => {
      this.CommodityTypeMasterForm.patchValue({
        id: res.id,
        Name: res.Name,
      });
      this.ShowPopUp();
    });
  }

  DeleteCommodity(id: number) {
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
        this.commodityService.DeleteCommodityType(id)
          .subscribe((Response: boolean) => {
            this.Destroy();
            this.CommodityList();
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
