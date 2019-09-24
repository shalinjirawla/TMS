import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BranchRateModel } from '../../shared/model/BranchRateModel';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BranchRateMasterService } from '../../shared/service-proxy/branch-rate-master.service';
import swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-branch-rate-master',
  templateUrl: './branch-rate-master.component.html',
  styleUrls: ['./branch-rate-master.component.scss']
})
export class BranchRateMasterComponent {
  @ViewChild('template') template: TemplateRef<any>;
  BranchRateMasterForm: FormGroup;
  BRM: BranchRateModel;
  rows: any;
  Title: string;
  dataTable: any;
  modalRef: BsModalRef;
  config: ModalOptions = {  
    backdrop: true,
    ignoreBackdropClick: true,
    class: "modal-lg",
  };
  constructor(private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: BsModalService,
    private branchrateservices: BranchRateMasterService
  ) { }

  ngOnInit() {
    this.LoadForm();

  }

  LoadForm() {
    this.Title = "Add New Branch Rate Master";
    this.BranchRateMasterForm = this.fb.group({
      Id: [0],
      General: [''],
      Commodity: [''],
      MinimumChargeWeightin: [''],
      StatisticChargesinRS: [],
      CFTFactorinKG: [],
      FOVin: [],
      HamaliperArticleinRS: [],
      MinimumHamaliinRS: [],
      Surcharges: [],
      CoverCharges: [],
      MiscCharges: [],
      GodownCharges: [],
      CODCharges: [],
      DemurrageExemptDays: [],
      DemurrageRate: [],
      GICharges: [],
      DoorDeliveryCharges: [],
      FirstNoticeDays: [],
      SecondNoticeDays: [],
      FinalNoticeDays: [],
      Discount: [],
      BranchRateParameter: [''],
      OtherBranchCommodity: [''],
    });
    this.GetBranchRateDetails();
  }
  ResetForm()
  {
    this.BranchRateMasterForm.reset();
  }
  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  HidePopUp() {
    this.modalRef.hide();
    this.BranchRateMasterForm.reset();
  }
  SaveBranchRateData(BranchRateMasterForm: BranchRateModel) {
    if (BranchRateMasterForm != null) {
      this.branchrateservices.SaveBranchRateMasterDetails(BranchRateMasterForm).subscribe((res: Boolean) => {
        if (res) {
          swal({
            position: 'center',
            type: 'success',
            title: 'Branch Rate Successfully Saved...!',
            showConfirmButton: false,
            timer: 1500
          });
          this.GetBranchRateDetails();
          this.HidePopUp();
          this.BranchRateMasterForm.reset();
        }
      })
    }
  }
  GetBranchRateDetails() {
    this.branchrateservices.GetBranchRateDetails().subscribe((res: any) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }
  GetEditDetails(id:number)
  {
    if(id!=null && id!=undefined){
      this.branchrateservices.GetEditDetail(id).subscribe((res:BranchRateModel)=>{   
        if(res!=null && res!=undefined)
        {
          this.Title = "Edit Branch Rate Master";
          this.ShowPopUp();
          this.BranchRateMasterForm.patchValue({
            Id: res.Id,
            General: res.General,
            Commodity: res.Commodity,
            MinimumChargeWeightin: res.MinimumChargeWeightin,
            StatisticChargesinRS:res.StatisticChargesinRS,
            CFTFactorinKG: res.CFTFactorinKG,
            FOVin: res.FOVin,
            HamaliperArticleinRS:res.HamaliperArticleinRS,
            MinimumHamaliinRS: res.MinimumHamaliinRS,
            Surcharges:res.Surcharges,
            CoverCharges:res.CoverCharges,
            MiscCharges: res.MiscCharges,
            GodownCharges:res.GodownCharges,
            CODCharges: res.CODCharges,
            DemurrageExemptDays: res.DemurrageExemptDays,
            DemurrageRate: res.DemurrageRate,
            GICharges: res.GICharges,
            DoorDeliveryCharges: res.DoorDeliveryCharges,
            FirstNoticeDays:res.FirstNoticeDays,
            SecondNoticeDays:res.SecondNoticeDays,
            FinalNoticeDays: res.FinalNoticeDays,
            Discount: res.Discount,
            
          })
        }
      })
    }
  }
  DeleteBranchRate(id:number) {
    if (id != null && id != undefined) {
      swalWithBootstrapButtons({
        title: 'Are you sure?',
        text: "you won't be revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          this.branchrateservices.DeleteBranchRateDetails(id).subscribe((res: any) => {
            if (res) {
              swal({
                position: 'center',
                type: 'info',
                title: 'Branch Rate Details Successfully Deleted..!',
                timer: 1500
              })
              this.GetBranchRateDetails();
            }
          })
        } else {
          swal({
            position: 'center',
            type: 'warning',
            title: 'Branch Rate Details Saved..!',
           
          })
        }
       
      })
     
    }
  }
  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }
 
}
