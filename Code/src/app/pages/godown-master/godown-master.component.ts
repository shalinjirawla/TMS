import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { StateModel } from "../../shared/model/StateModel";
import { StateMasterService } from "../../shared/service-proxy/stateMasterService";
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BranchModel } from '../../shared/model/BranchModel';
import { CityModel } from '../../shared/model/CityModel';
import { GodownMasterService } from '../../shared/service-proxy/godownMasterService';
import { GodownModel } from '../../shared/model/GodownModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';
import { CityMasterService } from '../../shared/service-proxy/cityMasterService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});


@Component({
  selector: 'app-godown-master',
  templateUrl: './godown-master.component.html',
  styleUrls: ['./godown-master.component.scss']
})
export class GodownMasterComponent implements OnInit {


  @ViewChild('template') template: TemplateRef<any>;
  GodwonMasterForm: FormGroup;
  GM: GodownModel;
  rows: any[];

  dataTable: any;
  Title: string;

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: "modal-lg"
  };

  cities: CityModel[] = [];
  states: StateModel[] = [];
  AllCities: CityModel[] = [];
  Branches : BranchModel[] = [];

  constructor(private fb: FormBuilder,
    private stateService: StateMasterService,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: BsModalService,
    private branchService: BranchMasterService,
    private cityService: CityMasterService,
    private godownService: GodownMasterService) { }

  ngOnInit() {
    this.CitiesList();
    this.StatesList();
    this.BranchList();
    this.GodownList();
    this.LoadForm();
  }
  
  LoadForm() {
    this.Title = "Add New Godown";
    this.GodwonMasterForm = this.fb.group({
      id: [''],
      godownCode: [''],
      godownName: [''],
      branchId: ['0'],
      address: [''],
      cityId: ['0'],
      pincode: [''],
      stateId: ['0'],
      phoneNo: [''],
      mobileNo: [''],
      storageCapacity: [''],
      remark: ['']
    });
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.Branches = res;
    });
  }

  GodownList(){
   this.godownService.GetGodowns().subscribe((res : GodownModel[])=>{
      this.rows = res;
      console.log(res);
      
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
   });
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  HidePopUp() {
    this.modalRef.hide();
    this.GodwonMasterForm.reset();
  }

  SaveDetail(Data: GodownModel) {
    let obj = Object.assign({}, this.GM, this.GodwonMasterForm.value);
    if (this.GodwonMasterForm.dirty) {
        this.godownService.SaveGodown(obj).subscribe((response: boolean) => {
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
            this.GodownList();
        });
    }
}

  ShowData(data: number) {
    this.Title = "Edit Godown";
    this.cities = this.AllCities;
    this.godownService.GetGodown(data).subscribe((res: GodownModel) => {
        this.GodwonMasterForm.patchValue({
          id :res.id,
          godownCode :res.godownCode,  
          godownName :res.godownName,
          branchId :res.branchId,
          address :res.address,
          cityId :res.cityId,
          pincode :res.pincode,
          stateId :res.stateId,
          phoneNo :res.phoneNo,
          mobileNo :res.mobileNo,
          storageCapacity :res.storageCapacity,
          remark :res.remark,
        });
        this.ShowPopUp();
    });
}

DeleteGodown(id: number) {
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
      this.godownService.DeleteGodown(id)
        .subscribe((Response: boolean) => {
          //this.destroy();
          this.GodownList();
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

  // DeleteGodown(id: number) {
  //   if (confirm('Really want to delete this?')) {
  //     this.godownService.DeleteGodown(id)
  //       .subscribe(() => {
  //         this.Destroy();
  //         this.GodownList();
  //       });
  //   }
  // }

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  CitiesList() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.AllCities = res;
    });
  }

  StatesList() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {
      this.states = res;
    });
  }

  onChange(data) {
    this.cities = this.AllCities.filter(x => x.stateId == parseInt(data));
  }

  public Validator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }
}
