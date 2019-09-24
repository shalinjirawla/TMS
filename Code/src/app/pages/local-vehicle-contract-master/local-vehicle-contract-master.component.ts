import { Component, OnInit, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LocalVehicleContractModel } from '../../shared/model/LocalVehicleContractModel'
import { LocalVelicleContractMasterService } from '../../shared/service-proxy/localvehiclecontractMasterService';

import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';

import { VehicleMasterModel } from '../../shared/model/VehicleMasterModel';
import { VehicleMasterService } from '../../shared/service-proxy/vehicleMasterService'

import { VendorModel } from '../../shared/model/VendorModel';
import { VendorMasterService } from '../../shared/service-proxy/vendorMasterService'

import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons=Swal.mixin({
  confirmButtonClass:'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass:'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling:true,
  customClass:"mycustomeBTNclass",
})

@Component({
  selector: 'app-local-vehicle-contract-master',
  templateUrl: './local-vehicle-contract-master.component.html',
  styleUrls: ['./local-vehicle-contract-master.component.scss']
})
export class LocalVehicleContractMasterComponent implements OnInit {
  @ViewChild('template') tempalte: TemplateRef<any>;
  LocalVehicleContractMasterForm: FormGroup;
  modalRef: BsModalRef;
  Title: string;

  FreightSattlement = [];
  hirechassis = [];
  hk: LocalVehicleContractModel;

  branch: BranchModel[];
  vehicle: VehicleMasterModel[];
  vendor: VendorModel[];
  rows: LocalVehicleContractModel[];
  datatbale: any;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  constructor(private fb: FormBuilder,
    private localvehiclecontractService: LocalVelicleContractMasterService,
    private modalService: BsModalService,
    private branchService: BranchMasterService,
    private vehicleService: VehicleMasterService,
    private vendorService: VendorMasterService,
    private chengedectorRef: ChangeDetectorRef,
    private datapipe: DatePipe,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.branchList();
    this.VehicleList();
    this.VendorList();
    this.LoadCheckboxfreight();
    this.LoadCheckboxHire();
    this.LocalVehicleContractList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.tempalte, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Local Vehicle Contract"
    this.LocalVehicleContractMasterForm = this.fb.group({
      id: [0],
      branch: ['0'],
      vehicleNo: ['0'],
      vendorDetail: ['0'],
      fromdate: [''],
      todate: [''],
      freightsettlement: ['0'],
      hirebasis: ['0'],
      hirerate: [''],
    });
  }

  branchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.branch = res;
    })
  }

  VehicleList() {
    this.vehicleService.GetVehicleMasters().subscribe((res: VehicleMasterModel[]) => {
      this.vehicle = res;
    })
  }

  VendorList() {
    this.vendorService.vendorModels().subscribe((res: VendorModel[]) => {
      this.vendor = res;
    })
  }

  LocalVehicleContractList() {
    debugger
    this.localvehiclecontractService.GetVehicleContractModels().subscribe((res: LocalVehicleContractModel[]) => {
      this.rows = res;

      this.chengedectorRef.detectChanges();
      const table: any = $('table');
      this.datatbale = table.DataTable();
    })
  }

  LoadCheckboxfreight() {
    this.FreightSattlement = [{
      id: 1,
      Name: 'Daily',
    }, {
      id: 2,
      Name: 'Weekly',
    }, {
      id: 3,
      Name: 'Fortnightly',
    }, {
      id: 4,
      Name: 'Monthly',
    }]
  }

  LoadCheckboxHire() {
    this.hirechassis = [{
      id: 1,
      Name: 'KGs',
    }, {
      id: 2,
      Name: 'KMs',
    }, {
      id: 3,
      Name: 'Article',
    }, {
      id: 4,
      Name: 'Trip',
    }]
  }

  SaveDetail(data: LocalVehicleContractModel) {
    let freightsettlement = this.LocalVehicleContractMasterForm.controls.freightsettlement.value;
    let hirebasis = this.LocalVehicleContractMasterForm.controls.hirebasis.value;
    let obj = Object.assign({}, this.hk, this.LocalVehicleContractMasterForm.value);
    this.localvehiclecontractService.SaveLocalVehicleContract(obj).subscribe((Response: boolean) => {

      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Local Vehicle Contract has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.LocalVehicleContractList();
      this.hidepopup();
    })
  }

  ShowData(data: number) {
    this.Title = "Edit Local Vehicle Contract";
    this.localvehiclecontractService.GetVehicleContractModel(data).subscribe((res: LocalVehicleContractModel) => {
      var data1 = this.datapipe.transform(res.fromdate, 'yyyy-MM-dd');
      var data2 = this.datapipe.transform(res.todate, 'yyyy-MM-dd');
      this.LocalVehicleContractMasterForm.patchValue({
        id: res.id,
        branch: res.branch,
        vehicleNo: res.vehicleNo,
        vendorDetail: res.vendorDetail,
        fromdate: data1,
        todate: data2,
        freightsettlement: res.freightsettlement,
        hirebasis: res.hirebasis,
        hirerate: res.hirerate,
      });
      this.ShowPopUp();
    })
  }

  DeleteLocalVehicleContract(id:number ) {
    swalWithBootstrapButtons({
      title:'Are you sure?',
      text:"You won't be able to revert this!",
      type:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes, delete it!',
      cancelButtonText:'No, cancel!',
      reverseButtons:true
    }).then((result)=>{
      if(result.value){
        this.localvehiclecontractService.DeleteLocalVehicleContract(id)
        .subscribe(()=>{
          this.LocalVehicleContractList();
        });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }else if(
        result.dismiss===Swal.DismissReason.cancel
      ){
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
