import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CommodityModel } from '../../shared/model/Commoditymodel';
import { CommoditymasterService } from '../../shared/service-proxy/commodityMasterService';
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
  templateUrl: './commodity-master.component.html',
  styleUrls: ['./commodity-master.component.scss']
})
export class CommodityMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  CommodityMasterForm: FormGroup;
  rows: any;
  dataTable: any;
  Title: string;
  cm: CommodityModel;
  modalRef: BsModalRef;
  CommodityCheckBox: any[];
  commoditys: CommodityTypeModel[];
  commodityModel: CommodityModel[];


  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };
  constructor(private commodityService: CommoditymasterService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private commodityName: CommodityTypemasterService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.AllCommodity();
    this.CommodityList();
    this.OnLoadCheckboxRestricted();
  }

  OnLoadCheckboxRestricted() {
    this.CommodityCheckBox = [{
      id: 1,
      Name: "Is Restricted",
      Selected: false,
      formControlName: "IsRestricted",
    }, {
      id: 2,
      Name: "Is Perishable",
      Selected: false,
      formControlName: "IsPerishable",
    }];

  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
    this.OnLoadCheckboxRestricted();
  }

  AllCommodity() {
    this.commodityName.GetCommodityTypes().subscribe((res: CommodityTypeModel[]) => {
      this.commoditys = res;
    })
  }

  LoadForm() {
    this.Title = "Add New Commodity"
    this.CommodityMasterForm = this.fb.group({
      name: [''],
      commodityType: ['0'],
      IsRestricted: [''],
      IsPerishable: [''],
      id: [0],
    });
    // this.OnLoadCheckboxRestricted();
  }

  CommodityList() {
    debugger
    this.commodityService.GetCommodities().subscribe((res: CommodityModel[]) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.dataTable();
    })
  }

  SaveDetail() {
    debugger
    let obj = Object.assign({}, this.cm, this.CommodityMasterForm.value);
    this.commodityService.SaveCommodity(obj).subscribe((Response: boolean) => {
      debugger

      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Commodity has been saved',
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
    this.Title = "Edit New Commodity";
    this.commodityService.GetCommodity(data).subscribe((res: CommodityModel) => {
      this.CommodityMasterForm.patchValue({
        id: res.id,
        name: res.name,
        commodityType: res.commodityType,
        // IsRestricted:res.IsRestricted,
        // IsPerishable:res.IsPerishable,
      });
      this.ShowPopUp();
      this.EditCheckboxes(res.IsPerishable, res.IsRestricted);
    });
  }

  EditCheckboxes(IsPerish, IsRestri) {
    if (this.CommodityCheckBox != null && this.CommodityCheckBox != undefined && this.CommodityCheckBox.length > 0) {
      for (var a = 0; a < this.CommodityCheckBox.length; a++) {
        debugger
        if (IsPerish && this.CommodityCheckBox[a]['id'] == 1) {
          this.CommodityCheckBox[a]['Selected'] = true;
        } else if (IsRestri && this.CommodityCheckBox[a]['id'] == 2) {
          this.CommodityCheckBox[a]['Selected'] = true;
        }
      }
    }
  }
  DeleteCommodity(id: number) {
    debugger
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
        this.commodityService.DeleteCommodity(id)
          .subscribe(() => {
            // this.Destroy();
            this.CommodityList();
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

  public Validator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }
}
