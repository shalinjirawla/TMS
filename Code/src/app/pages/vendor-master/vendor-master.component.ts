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
import { VendorModel } from '../../shared/model/VendorModel';
import { VendorMasterService } from '../../shared/service-proxy/vendorMasterService';
import { StateModel } from 'app/shared/model/StateModel';
import { CityModel } from 'app/shared/model/CityModel';
import { StateMasterService } from 'app/shared/service-proxy/stateMasterService';
import { CityMasterService } from 'app/shared/service-proxy/cityMasterService';
import { VendorTypeModel } from 'app/shared/model/VendorTypeModel';
import { VendorTypeMasterService } from 'app/shared/service-proxy/vendortypeMasterService';
import { BankMasterModel } from 'app/shared/model/BankMasterModel';
import { BankMasterServiceService } from 'app/shared/service-proxy/bank-master-service.service';

import { pluck } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';


const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});


@Component({
  selector: 'app-vendor-master',
  templateUrl: './vendor-master.component.html',
  styleUrls: ['./vendor-master.component.scss']
})
export class VendorMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  VendorMasterForm: FormGroup;

  Banks: BankMasterModel[] = [];
  BankBranchs: BankMasterModel[] = [];
  BankIFSCs: BankMasterModel[] = [];
  BankIFSC: BankMasterModel[] = [];
  States: StateModel[] = [];
  Cities: CityModel[] = [];
  Citys: CityModel[] = [];
  Vendortypes: VendorTypeModel[] = [];
  AlertChechbox: any[];
  rbc: VendorModel;
  rows: any;
  dataTable: any;

  Title: string;

  private base64textString: String = "";
  public imagePath;
  imgURL: any;
  fileUploadString: any;
  selecetdFile: File;
  imageSrc: string = "";

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,
    private stateService: StateMasterService,
    private cityService: CityMasterService,
    private vendortypeService: VendorTypeMasterService,
    private vendorService: VendorMasterService,
    private BankService: BankMasterServiceService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.BankList();
    this.BankBranchList();
    this.BankIFSCList();
    this.StateList();
    this.CityList();
    this.VendorTypeList();
    this.LoadCheckBoxesAlertchechbox();
    this.LoadFrom();
    this.VendorList();
    // this.VendorTypeList();
  }

  LoadFrom() {
    this.Title = "Add Vendor Master"
    this.VendorMasterForm = this.fb.group({
      id: [0],
      name: [''],
      vendorType: ['0'],
      address: [''],
      city: ['0'],
      pincode: [''],
      state: [''],
      STDcode: [''],
      phoneno: [''],
      mobileno: [''],
      emailid: [''],
      emailalert: [''],
      mobilealert: [''],
      PAN: [''],
      GSTIN: [''],
      referencename: [''],
      referphoneno: [''],
      refermobileno: [''],
      creditdays: [''],
      creditamount: [''],
      bankname: ['0'],
      bankbranch: ['0'],
      IFSC: ['0'],
      accountno: [''],
      chequename: [''],
      fileupload: [''],
    });
    // this.LoadCheckBoxesAlertchechbox();
  }

  LoadCheckBoxesAlertchechbox() {
    this.AlertChechbox = [{
      id: 1,
      Name: "Email Alert",
      Selected: false,
      formControlName: 'emailalert',
    }, {
      id: 2,
      Name: "Mobile Alert",
      Selected: false,
      formControlName: 'mobilealert',
    }];
  }

  StateList() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {
      this.States = res;
    })
  }

  CityList() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.Cities = res;
    })
  }

  onChange(data) {
    this.Citys = this.Cities.filter(x => x.stateId == parseInt(data));
  }

  VendorTypeList() {
    this.vendortypeService.GetVendorTypes().subscribe((res: VendorTypeModel[]) => {
      this.Vendortypes = res;
    })
  }

  BankList() {
    this.BankService.GetBankMasterDetails().subscribe((res: BankMasterModel[]) => {
      this.Banks = res;
    })
  }

  BankBranchList() {
    this.BankService.GetBankMasterDetails().subscribe((res: BankMasterModel[]) => {
      this.BankBranchs = res;
    })
  }

  onChangeBank(data) {
    this.BankIFSC = this.BankIFSCs.filter(x => x.id == parseInt(data));
  }
  BankIFSCList() {
    this.BankService.GetBankMasterDetails().subscribe((res: BankMasterModel[]) => {
      this.BankIFSCs = res;
    })
  }

  VendorList() {
    this.vendorService.vendorModels().subscribe((res: VendorModel[]) => {
      this.rows = res;

      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.dataTable();
    })
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
  }

  HidePopUp() {
    this.modalRef.hide();
    this.LoadFrom();
    this.LoadCheckBoxesAlertchechbox();
  }

  SaveDetail(data: VendorModel) {
    debugger
    let obj = Object.assign({}, this.rbc, this.VendorMasterForm.value)
    // obj.stateid = parseInt(obj.stateid);
    // obj.cityid = parseInt(obj.cityid);
    obj.fileupload = this.fileUploadString;
    if (this.VendorMasterForm.dirty) {
      this.vendorService.SaveVender(obj).subscribe((Response: boolean) => {
        this.HidePopUp();
        if (Response) {
          Swal({
            position: 'center',
            type: 'success',
            title: 'Vendor has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
        this.VendorList();
        this.handleFileSelect(event);
      });
    }
  }

  ShowData(data: number) {
    this.Title = "Edit Vendor Master";
    this.Citys = this.Cities;
    this.BankIFSC = this.BankIFSCs;
    this.vendorService.GetVendorModel(data).subscribe((res: VendorModel) => {
      this.imgURL = res.fileupload;
      this.VendorMasterForm.patchValue({
        id: res.id,
        name: res.name,
        vendorType: res.vendorType,
        address: res.address,
        city: res.city,
        pincode: res.pincode,
        state: res.state,
        STDcode: res.STDcode,
        phoneno: res.phoneno,
        mobileno: res.mobileno,
        emailid: res.emailid,
        // emailalert:res.emailalert,
        // mobilealert:res.mobilealert,
        PAN: res.PAN,
        GSTIN: res.GSTIN,
        referencename: res.name,
        referphoneno: res.refermobileno,
        refermobileno: res.refermobileno,
        creditdays: res.creditdays,
        creditamount: res.creditamount,
        bankname: res.bankname,
        bankbranch: res.bankbranch,
        IFSC: res.IFSC,
        accountno: res.accountno,
        chequename: res.chequename,
        // fileupload:res.fileupload,
      });
      this.ShowPopUp();
      this.EditCheckboxes(res.mobilealert, res.emailalert);
    })
  }
  EditCheckboxes(mobile, email) {
    if (this.AlertChechbox != null && this.AlertChechbox != undefined && this.AlertChechbox.length > 0) {
      for (var a = 0; a < this.AlertChechbox.length; a++) {
        debugger
        if (email && this.AlertChechbox[a]['id'] == 1) {
          this.AlertChechbox[a]['Selected'] = true;
        } else if (mobile && this.AlertChechbox[a]['id'] == 2) {
          this.AlertChechbox[a]['Selected'] = true;
        }
      }
    }
  }

  handleFileSelect(evt) {

    debugger
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var a = this.getBase64(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = (btoa(binaryString));
  }

  Base64File

  getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.Base64File = reader.result;
      console.log(this.Base64File)
    };
  }

  preview(files, evt) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.fileUploadString = this.imgURL;
    }
  }





  DeleteVendor(id: number) {
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
        this.vendorService.DeleteVendor(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.VendorList();
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
