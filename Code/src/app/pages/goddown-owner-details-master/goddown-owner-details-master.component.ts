import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl } from "@angular/forms";
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { DatePipe } from '@angular/common';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GoddownOwnerDetailsModel } from 'app/shared/model/GoddownOwnerDetailsModel';
import { BranchMasterService } from 'app/shared/service-proxy/branchMasterService';
import { BranchModel } from 'app/shared/model/BranchModel';
import { GodownMasterService } from 'app/shared/service-proxy/godownMasterService';
import { GodownModel } from 'app/shared/model/GodownModel';
import { StateMasterService } from 'app/shared/service-proxy/stateMasterService';
import { StateModel } from 'app/shared/model/StateModel';
import { CityMasterService } from 'app/shared/service-proxy/cityMasterService';
import { CityModel } from 'app/shared/model/CityModel';
import { GoddownOwnerDetailService } from 'app/shared/service-proxy/goddown-owner-detail.service';
import { BankMasterServiceService } from "app/shared/service-proxy/bank-master-service.service";
import { from } from 'rxjs/observable/from';
import { BankMasterModel } from 'app/shared/model/BankMasterModel';
import { element } from 'protractor';
const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});
@Component({
  selector: 'app-goddown-owner-details-master',
  templateUrl: './goddown-owner-details-master.component.html',
  styleUrls: ['./goddown-owner-details-master.component.scss']
})
export class GoddownOwnerDetailsMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  GodwonOwnerDetailsForm: FormGroup;
  GM: GoddownOwnerDetailsModel;
  rows: any[];

  dataTable: any;
  Title: string;
  SQFT: number=0;
 TotalAmount: number;
  GST:number;
  RATE_PER_SQFT: number=0;
  TotalRent:number=0;
  TDS:number=10;
  NetRent:number;
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: "modal-lg"
  };
  Branches: BranchModel[];
  Godowns: GodownModel[];
  States: StateModel[];
  cities: any;
  AllCities: CityModel[];
  Bank: BankMasterModel[];
  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private GoddownOwnerSerives: GoddownOwnerDetailService,
    private branchService: BranchMasterService, private godownService: GodownMasterService,
    private datePipe: DatePipe,
    private service: CityMasterService,
    private stateService: StateMasterService,
    private BankMasterServiceService: BankMasterServiceService
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.BranchList();
    this.GodownList();
    this.allStates();
    this.GetDetails();
    this.GetBankList();
  }

  LoadForm() {
    this.Title = "Add New Godown Owner Details";
    this.GodwonOwnerDetailsForm = this.fb.group({
      id: [0],
      goddownOwnerCode: [],
      branch: [0],
      goddown: [0],
      ownerName: [''],
      address: [''],
      state: [0],
      city: [0],
      pinCode: [],
      stdCode: [],
      phoneNo: [],
      mobileNo: [],
      emailId: [''],
      sqft: [''],
      ratePerSqft: [''],
      rentAmount: [''],
      gst:[],
      totalRent:[],
      tds:[10],
      netRent:[],
      pan: [''],
      gstin: [''],
      bank: [0],
      ifsc: [],
      a_cno: [],
      chequeInTheNameOf: [''],
      nextVersionDate: [''],
      holdPaymentInstruction: [''],
      reamrk: [''],
      isRented: [],
      rentPaymentType:[''],
      securityDeposit: [''],
      agreementStartDate: [''],
      agreementEndDate: [''],
      noticePeriodInDays: [''],
    });
  }
  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  HidePopUp() {
    this.modalRef.hide();
    // this.GodwonOwnerDetailsForm.reset();
  }
  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      if (res != undefined && res != null && res.length > 0) {
        this.Branches = res;
      }
    });
  }
  GodownList() {
    this.godownService.GetGodowns().subscribe((res: GodownModel[]) => {
      if (res != undefined && res != null && res.length > 0) {
        this.Godowns = res;
      }
    });
  }
  allStates() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {
      if (res != undefined && res != null && res.length > 0) {
        this.States = res;
      }
    });
  }
  citiesList() {
    this.service.GetCities().subscribe((res: CityModel[]) => {
      if (res != undefined && res != null && res.length > 0) {
        this.cities = res;
      }
    });
  }
  onChange(data) {
    if (data != null && data != undefined) {
      this.service.GetStateWiseCity(parseInt(data)).subscribe((res: CityModel[]) => {
        this.cities = res;
      });
    }
  }

  GetBankList() {
    this.BankMasterServiceService.GetBankMasterDetails().subscribe((res: BankMasterModel[]) => {
      this.Bank = res;
    })
  }
  OnBankChange(data) {
    if (data != null && data != undefined) {
      if (this.Bank != null && this.Bank != undefined && this.Bank.length > 0) {
        for (var i = 0; i < this.Bank.length; i++) {
          if (data == this.Bank[i]["id"]) {
            this.GodwonOwnerDetailsForm.patchValue({
              ifsc: this.Bank[i]["IFSC_code"]
            })
          }
        }
      }
    }
  }
  SetSQFTValues(values:number)
  {
    this.SQFT=values;
    this.CalculateRentAmount(this.SQFT,this.RATE_PER_SQFT)
  }
  SetRate_per_SQFT(values:number)
  {
    this.RATE_PER_SQFT=values;
    this.CalculateRentAmount(this.SQFT,this.RATE_PER_SQFT)
  }
  
  CalculateRentAmount(SQFTvalues: number,RATE_PER_SQFTvalues: number) {  
   debugger
    if (SQFTvalues != null && SQFTvalues != undefined) {
      this.TotalAmount = SQFTvalues * RATE_PER_SQFTvalues;
      this.GodwonOwnerDetailsForm.patchValue({
        rentAmount: this.TotalAmount
      })
    }

  }
  SetGSTValues(values:number)
  {
    this.GST=values;
    this.TotalRent=((this.TotalAmount * this.GST/100)+this.TotalAmount);
    this.TDS=(this.TotalRent*10)/100;
    this.NetRent=this.TotalRent-this.TDS;
    this.GodwonOwnerDetailsForm.patchValue({
      totalRent:this.TotalRent,
      netRent:this.NetRent,
    })
  }
  SaveDetail(Data: GoddownOwnerDetailsModel) {
    let obj = Object.assign({}, this.GM, this.GodwonOwnerDetailsForm.value);
    this.GoddownOwnerSerives.SaveGoddownOwnerDetails(obj).subscribe((response: boolean) => {

      if (response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Godown Owner Details has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.HidePopUp();
      this.GetDetails();
      this.Destroy();

    });
  }
  GetDetails() {

    this.GoddownOwnerSerives.GetGoddownOwnerDetails().subscribe((res: GoddownOwnerDetailsModel[]) => {
      this.rows = res;
      if (this.rows != undefined && this.rows != null) {
        this.changeDetectorRef.detectChanges();
        const table: any = $('table');
        this.dataTable = table.DataTable();
      }
    });

  }


  GetEditDetails(id: number) {
    if (id != undefined && id != null) {
      this.GoddownOwnerSerives.GetGoddownOwnerDetail(id).subscribe((res: GoddownOwnerDetailsModel) => {
        let data = res;
       // var date1 = this.datePipe.transform(res.nextVersionDate, 'yyyy-MM-dd');
        if (res != undefined && res != null) {
          if (res.agreementStartDate != undefined && res.agreementStartDate != null) {
            var agreementStartDate = this.datePipe.transform(res.agreementStartDate, 'yyyy-MM-dd');
          }
          if (res.agreementEndDate != undefined && res.agreementEndDate != null) {
            var agreementEndDate = this.datePipe.transform(res.agreementEndDate, 'yyyy-MM-dd');
          }
          if (res.nextVersionDate != undefined && res.nextVersionDate != null) {
            var nextVersionDate = this.datePipe.transform(res.nextVersionDate, 'yyyy-MM-dd');
          }
          this.ShowPopUp();
          if (res.branch != null && res.branch != undefined) {
            this.citiesList();
          } else {
            res.branch = 0;
          }
          if (res.goddown != null && res.goddown != undefined) {
            this.citiesList();
          } else {
            res.goddown = 0;
          }
          if (res.state != null && res.state != undefined) {
            this.citiesList();
          } else {
            res.state = 0;
          }
          if (res.city != null && res.city != undefined) {
            this.citiesList();
          } else {
            res.city = 0;
          }
          this.Title = "Update Godown Owner Details";
          this.GodwonOwnerDetailsForm.patchValue({
            id: res.id,
            goddownOwnerCode: res.goddownOwnerCode,
            branch: res.branch,
            goddown: res.goddown,
            ownerName: res.ownerName,
            address: res.address,
            state: res.state,
            city: res.city,
            pinCode: res.pinCode,
            stdCode: res.stdCode,
            phoneNo: res.phoneNo,
            mobileNo: res.mobileNo,
            emailId: res.emailId,
            sqft: res.sqft,
            ratePerSqft: res.ratePerSqft,
            rentAmount: res.rentAmount,
            gst:res.gst,
            totalRent:res.totalRent,
            pan: res.pan,
            gstin: res.gstin,
            bank: res.bank,
            ifsc: res.ifsc,
            a_cno: res.a_cno,
            chequeInTheNameOf: res.chequeInTheNameOf,
            nextVersionDate: nextVersionDate,
            holdPaymentInstruction: res.holdPaymentInstruction,
            reamrk: res.reamrk,
            isRented: res.isRented,
            rentPaymentType:res.rentPaymentType,
            securityDeposit: res.securityDeposit,
            agreementStartDate: agreementStartDate,
            agreementEndDate: agreementEndDate,
            noticePeriodInDays: res.noticePeriodInDays,
          });
        }
      });
    }
  }
  DeleteGoddownOwnerDetails(id: number) {
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
        this.GoddownOwnerSerives.DeleteGoddownOwnerDetails(id).subscribe((res: any) => {
          let result = res;
          if (result != undefined && result != null) {
            this.GetDetails();
            this.Destroy();
          }
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
    })

  }
  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }
}
