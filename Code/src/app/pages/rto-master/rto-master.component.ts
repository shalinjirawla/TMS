import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap';
import { RtoServiceService } from 'app/shared/service-proxy/rto-service.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CityModel } from 'app/shared/model/CityModel';
import { CityMasterService } from 'app/shared/service-proxy/cityMasterService';
import { StateMasterService } from 'app/shared/service-proxy/stateMasterService';
import { StateModel } from 'app/shared/model/StateModel';
import { RTOModel } from 'app/shared/model/RTOModel';
import { identifierModuleUrl, debugOutputAstAsTypeScript } from '@angular/compiler';
import swal from 'sweetalert2';
const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});
@Component({
  selector: 'app-rto-master',
  templateUrl: './rto-master.component.html',
  styleUrls: ['./rto-master.component.scss']
})
export class RtoMasterComponent implements OnInit {
  modalRef: BsModalRef;
  RTOForm: FormGroup;
  citySetting: any;
  RTO: RTOModel;
  dataTable: any;
  cityName: CityModel[];
  AllCity: CityModel[] = [];
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };
  rows: any[];
  @ViewChild('template') template: TemplateRef<any>;
  Title: any;
  AllState: any;
  stateSetting: { singleSelection: boolean; idField: string; textField: string; allowSearchFilter: boolean; };
  constructor(private changeDetectorRef: ChangeDetectorRef, private stateService: StateMasterService, private rtoService: RtoServiceService, private modalService: BsModalService, private fb: FormBuilder, private cityService: CityMasterService) { }

  ngOnInit() {
    this.GetRtoList();
    this.LoadForm();
    this.cityAll();
    this.stateAll();
  }
  ShowPopUp() {

    this.modalRef = this.modalService.show(this.template, this.config);
  }
  HidePopUp() {
    this.modalRef.hide();
    this.LoadForm();
  }
  LoadForm() {
    this.Title = "Add New RTO Master";
    this.RTOForm = this.fb.group({
      id: [0],
      rtoCode: [''],
      name: [''],
      address: [''],
      city: [''],
      pinCode: [''],
      state: [''],
      stdCode: [''],
      phoneNo: [''],
      emailId: [''],
      website: [''],
      remark: [''],
      mobileNo: ['']
    });
  }
  cityAll() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.AllCity = res;
      this.CitySetting();
      console.log("res", this.AllCity);
    });

  }
  CitySetting() {
    this.citySetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'cityName',
      allowSearchFilter: true,
    }
  }
  stateAll() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {

      this.AllState = res;
      this.StateSetting();
    })
  }
  StateSetting() {
    this.stateSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'StateName',
      allowSearchFilter: true,
    }
  }
  SaveRTO(Data) {
    let city, state;
    let id = Data.id;
    let rtoCode = Data.rtoCode;
    let name = Data.name;
    let address = Data.address;
    let ci = Data.city;
    let pinCode = Data.pinCode;
    let st = Data.state;
    let stdCode = Data.stdCode;
    let phoneNo = Data.phoneNo;
    let emailId = Data.emailId;
    let website = Data.website;
    let remark = Data.remark;
    let mobileNo = Data.mobileNo;
    if (ci != "" && ci != 0) {
      ci.forEach(x => {
        if (x.id != undefined)
          city = x.id;
        else {
          city = x;
          for (var i = 0; i < city.length; i++) {
            if (this.AllCity[i].cityName == ci)
              city = this.AllCity[i].id;
          }
        }
      });
    }

    if (st != "" && st != 0) {
      st.forEach(x => {
        if (x.id != undefined)
          state = x.id;
        else {
          state = x;
          for (var i = 0; i < state.length; i++) {
            if (this.AllState[i].StateName == state)
              state = this.AllState[i].id;

          }
        }


      });
    }

    let obj = Object.assign({}, this.RTO, {
      id: id,
      rtoCode: rtoCode,
      name: name,
      address: address,
      city: city,
      pinCode: pinCode,
      state: state,
      stdCode: stdCode,
      phoneNo: phoneNo,
      emailId: emailId,
      website: website,
      remark: remark,
      mobileNo: mobileNo
    });
    if (this.RTOForm.dirty) {
      this.rtoService.SaveRTO(obj).subscribe((response: any) => {
        this.HidePopUp();
        if (response) {
          swal({
            position: 'center',
            type: 'success',
            title: 'RTO has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
        this.LoadForm();
        this.GetRtoList();
        this.Destroy();

      })
    }
  }

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }
  GetRtoList() {
    this.rtoService.GetRTOs().subscribe((res: RTOModel[]) => {
      this.rows = res;
      this.changeDetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }
  DeleteRTOS(id: number) {

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
        this.rtoService.DeleteRTO(id).subscribe(() => {
          this.LoadForm();
          this.GetRtoList();
          this.Destroy();
        });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
      else if (result.dismiss === swal.DismissReason.cancel) {
        swalWithBootstrapButtons(
          'Cancelled',
          'Data is safe :)',
          'info'
        )
      }
    })
  }

  ShowData(id: number) {
    this.Title = "Edit RTO Master";
    this.rtoService.GetRTO(id).subscribe((res: RTOModel) => {

      this.RTOForm.patchValue({
        id: res.id,
        rtoCode: res.rtoCode,
        name: res.name,
        address: res.name,

        pinCode: res.pinCode,
        city: [res.cityName],
        state: [res.stateName],
        stdCode: res.stdCode,
        phoneNo: res.phoneNo,
        emailId: res.emailId,
        website: res.website,
        remark: res.remark,
        mobileNo: res.mobileNo
      });
      this.ShowPopUp();
    })
  }
}
