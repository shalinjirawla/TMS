import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap';
import { RtoServiceService } from 'app/shared/service-proxy/rto-service.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AreaMasterService } from 'app/shared/service-proxy/area-master.service';
import { CityMasterService } from 'app/shared/service-proxy/cityMasterService';
import { CityModel } from 'app/shared/model/CityModel';
import { StateMasterService } from 'app/shared/service-proxy/stateMasterService';
import { StateModel } from 'app/shared/model/StateModel';
import { RegionMasterService } from 'app/shared/service-proxy/regionMasterService';
import { RegionModel } from 'app/shared/model/RegionModel';
import { AreaModel } from 'app/shared/model/AreaModel';
import swal from 'sweetalert2';
const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});
@Component({
  selector: 'app-area-master',
  templateUrl: './area-master.component.html',
  styleUrls: ['./area-master.component.scss']
})
export class AreaMasterComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('template') template: TemplateRef<any>;
  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };
  Area:AreaModel;
  submitted = false;
  rows:AreaModel[];
  AreaForm: FormGroup;
  Title: string;
  AllCity: any[];
  citySetting: { singleSelection: boolean; idField: string; textField: string; allowSearchFilter: boolean; };
  AllState: StateModel[];
  stateSetting: { singleSelection: boolean; idField: string; textField: string; allowSearchFilter: boolean; };
  regionAll: RegionModel[];
  regionSetting: {};
  constructor(private regionService: RegionMasterService, private changeDetectorRef: ChangeDetectorRef, private modalService: BsModalService, private fb: FormBuilder, private areaService: AreaMasterService, private cityService: CityMasterService, private stateService: StateMasterService) { }

  ngOnInit() {
    this.LoadForm();
    this.cityAll();
    this.stateAll();
    this.RegionAll();
    this.GetAreas();
  }
  ShowPopUp() {
  
    this.LoadForm();
    this.modalRef = this.modalService.show(this.template, this.config);
  
  }
  HidePopUp() {
    this.modalRef.hide();
    // this.submitted=false;
    // this.LoadForm();
    // this.AreaForm.reset();
    this.submitted=false;
  }
  LoadForm() {
    this.Title = "Add New Area Master";
    this.AreaForm = this.fb.group({
      id: [0],
      areaCode: [''],
      areaName: [''],
      address: [''],
      city: [''],
      pinCode: [''],
      state: [''],
      stdCode: [''],
      phoneNo: ['',],
      mobileNo: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      emailId: ['',[Validators.required,Validators.pattern("^[^@]+@[^@]+\.[^@]+$")]],
      region: [''],
      cashBalanceLimit: [''],
      bankBalanceLimit: [''],
      remark: [''],
    
    });
  }
  get f() {  return this.AreaForm.controls; }
  cityAll() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.AllCity = res;
      this.CitySetting();
      // console.log("res", this.AllCity);
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
  RegionAll() {
    this.regionService.GetRegions().subscribe((res: RegionModel[]) => {
      this.regionAll = res;
      this.RegionSetting();
    })
  }
  RegionSetting() {
    this.regionSetting = {
      singleSelection: true,
      idField: 'id',
      textField: 'regionName',
      allowSearchFilter: true,
    }
  }
  SaveArea(Data: AreaModel) {
   
   this.submitted=true;
   if (this.AreaForm.invalid) {
    return ;
}
   
      let city, state,region;
      let ci,st,re;
      // if(Data.city.constructor===Array && Data.city[0]!=null)
      // {
      //   ci=Data.city[0];
      // }
      // else
        ci=Data.city;
      // if(Data.state.constructor===Array && Data.state[0]!=null){
      //   st=Data.state[0];
      // }
      // else
        st=Data.state;
     
      if (ci!=null && ci!=0) {
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
  
      if (st != null && st!=0) {
        st.forEach(x => {
          if (x.id != undefined)
            state = x.id;
          else {
            state = x;
            for (var i = 0; i < state.length; i++) {
              if (this.AllState[i].StateName == st)
                state = this.AllState[i].id;
  
            }
          }
  
  
        });
      }
      let id=Data.id;
     let areaCode=Data.areaCode
    let areaName=Data.areaName;
    let address=Data.address;
    let pinCode=Data.pinCode;
    let stdCode=Data.stdCode;
    let phoneNo=Data.phoneNo;
    let mobileNo=Data.mobileNo;
    let emailId=Data.emailId;
    // if(Data.region.constructor===Array && Data.region[0]!=null){
    //   re=Data.region[0];
    // }
    // else{
      re=Data.region;
    // }
   
    if (re != null && re!=0) {
      re.forEach(x => {
        if (x.id != undefined)
        region = x.id;
        else {
          region = x;
          for (var i = 0; i < region.length; i++) {
            if (this.regionAll[i].regionName == re){
              region = this.regionAll[i].id;
  
          }
        }
      }
  
      });
    }
    let cashBalanceLimit=Data.cashBalanceLimit;
    let bankBalanceLimit=Data.bankBalanceLimit;
    let remark=Data.remark;
    let obj=Object.assign({},this.Area,{
      id:id,
      areaCode:areaCode,
      areaName:areaName,
      address:address,
      pinCode:pinCode,
      stdCode:stdCode,
      phoneNo:phoneNo,
      mobileNo:mobileNo,
      emailId:emailId,
      region:region,
      cashBalanceLimit:cashBalanceLimit,
      bankBalanceLimit:bankBalanceLimit,
      remark:remark,
      city:city,
      state:state
    });
    if(this.AreaForm.dirty){
      this.areaService.SaveArea(obj).subscribe((response:any)=>{
        this.HidePopUp();
        
        if(response){
          swal({
            position:'center',
            type: 'success',
            title: 'Area has been saved',
            showConfirmButton: false,
          timer: 1500
          })
         
       this.GetAreas();
        }
        
      });
    
    }
    
  }
  GetAreas(){
    this.areaService.GetAreas().subscribe((res:any)=>{
      this.rows=res;
    })
  }
  GetArea(id:number){
   
  this.Title="Edit Area Master";
    this.areaService.GetArea(id).subscribe((res:AreaModel)=>{
      this.AreaForm.patchValue({
        id:id,
        city:[res.cityName],
        state:[res.stateName],
        region:[res.regionName],
        address:res.address,
        areaCode:res.areaCode,
        areaName:res.areaName,
        pinCode:res.pinCode,
        stdCode:res.stdCode,
        phoneNo:res.phoneNo,
        mobileNo:res.mobileNo,
        emailId:res.emailId,
        cashBalanceLimit:res.cashBalanceLimit,
        bankBalanceLimit:res.bankBalanceLimit,
        remark:res.remark
      });
    this.modalRef = this.modalService.show(this.template, this.config);
    })
  }
  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }
 
  DeleteArea(id){
   
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "you won't be revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
        if(result.value){
          this.areaService.DeleteAreas(id).subscribe(()=>{
            // this.Destroy();
            this.GetAreas();
            this.LoadForm();
          })
        }
    })
  }
}
