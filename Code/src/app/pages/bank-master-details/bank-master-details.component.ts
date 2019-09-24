import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { CityModel } from "../../shared/model/CityModel";
import { CityMasterService } from "../../shared/service-proxy/cityMasterService";
import { StateMasterService } from "../../shared/service-proxy/stateMasterService";
import { StateModel } from "../../shared/model/StateModel";
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BankMasterServiceService } from "app/shared/service-proxy/bank-master-service.service";
import { BankMasterModel } from "app/shared/model/BankMasterModel";
import swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-bank-master-details',
  templateUrl: './bank-master-details.component.html',
  styleUrls: ['./bank-master-details.component.scss']
})
export class BankMasterDetailsComponent {
  @ViewChild('template') template: TemplateRef<any>;
  BankMasterForm: FormGroup;
  modalRef: BsModalRef;
  BM: BankMasterModel;
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };
  Title: string;
  rows: any[];
  dataTable: any;
  States: StateModel[] = [];
  cities: CityModel[] = [];
  constructor(private fb: FormBuilder,
    private cityservice: CityMasterService,
    private changeDetectorRef: ChangeDetectorRef,
    private stateService: StateMasterService,
    private modalService: BsModalService,
    private bankservice: BankMasterServiceService
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.allStates();
    this.GetBankMasterDetails();
  }
  LoadForm() {
    this.Title = "Add Bank Details";
    this.BankMasterForm = this.fb.group({
      id: [0],
      Bank_Name: [''],
      Bank_Branch: [''],
      IFSC_code: [''],
      state: [0],
      city: [0],
      Address: [''],
      Contact: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],

    });
  }
  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  HidePopUp() {
    this.modalRef.hide();
    this.LoadForm();
  }
  allStates() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {
      if (res != null && res.length > 0) {
        this.States = [];
        this.States = res;
      }
    });
  }
  citiesList() {
    this.cityservice.GetCities().subscribe((res: CityModel[]) => {
      if (res != undefined && res != null && res.length > 0) {
        this.cities = res;
      }
    });
  }
  onChange(data: number) {
    var id: number = data;
    if (data != null) {
      this.cityservice.GetStateWiseCity(id).subscribe((res: CityModel[]) => {
        if (res != null && res.length > 0) {
          this.cities = res;
        }
      })
    }
  }

  GetBankMasterDetails() {
    this.bankservice.GetBankMasterDetails().subscribe((responce: BankMasterModel[]) => {
      this.rows = responce;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })

  }
  ResetForm() {
    this.BankMasterForm = this.fb.group({
      id: [0],
      Bank_Name: [''],
      Bank_Branch: [''],
      IFSC_code: [''],
      state: [0],
      city: [0],
      Address: [''],
      Contact: [''],

    });
  }
  SaveBankMasterDetails(input: BankMasterModel) {
    let obj = Object.assign({}, this.BM, this.BankMasterForm.value);
    this.bankservice.SaveBankMasterDetails(obj).subscribe((responce: boolean) => {
      if (responce) {
        
        swal({
          position: 'center',
          type: 'success',
          title: 'Bank Details Successfully Saved...!',
          showConfirmButton: false,
          timer: 1500
        });
        this.GetBankMasterDetails();
        this.HidePopUp();
        this.ResetForm();
      }
    })
  }
  GetEditBankMasterDetail(id) {

    this.bankservice.GetEditBankMasterDetail(id).subscribe((res: BankMasterModel) => {
      this.Title = "Edit Bank Details";
      this.citiesList();
      this.BankMasterForm.patchValue({
        id: res.id,
        Bank_Name: res.Bank_Name,
        Bank_Branch: res.Bank_Branch,
        IFSC_code: res.IFSC_code,
        state: res.state,
        city: res.city,
        Address: res.Address,
        Contact: parseInt(res.Contact)
      });
      this.ShowPopUp();

    })
  }
  DeleteBankMasterDetails(id:number) {
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
          this.bankservice.DeleteBankMaster(id).subscribe((res: any) => {
            if (res) {
              swal({
                position: 'center',
                type: 'info',
                title: 'Bank Successfully Deleted..!',
                timer: 1500
              })
              this.GetBankMasterDetails();
            }
          })
        } else {
          swal({
            position: 'center',
            type: 'warning',
            title: 'Bank Details Saved..!',
           
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
