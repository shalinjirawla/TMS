import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DriverModel } from '../../shared/model/DriverMasterModule';
import { DriverMasterService } from '../../shared/service-proxy/driverMasterService'

import { StateModel } from '../../shared/model/StateModel';
import { StateMasterService } from '../../shared/service-proxy/stateMasterService';

import { CityModel } from '../../shared/model/CityModel';
import { CityMasterService } from '../../shared/service-proxy/cityMasterService';

import {DatePipe} from  '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-driver-master',
  templateUrl: './driver-master.component.html',
  styleUrls: ['./driver-master.component.scss']
})

export class DriverMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  modalRef: BsModalRef;
  DriverMasterForm: FormGroup;
  Title: string;
  rows: any;
  States: StateModel[]=[];
  Cities: CityModel[]=[];
  Citys: CityModel[]=[];
  DriverCategoryCheckBox = [];
  DriverLicenceCategoryCheckBox = [];
  hk: DriverModel;
  dataTable:any;

  private base64textString: String = "";
  public imagePath;
  imgURL: any;
  Fileuploadstring:any;
  imageSrc:string="";
  selecetdFile : File;


  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(private fb: FormBuilder,
    private driverService: DriverMasterService,
    private changedectetoryRef:ChangeDetectorRef,
    private modalService: BsModalService,
    private stateService: StateMasterService,
    private cityService: CityMasterService,
    private datepipe:DatePipe,
  ) { }

  ngOnInit() {
    this.LoadFrom();
    this.StateList();
    this.CityList();
    this.DriverList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadFrom();
  }

  LoadFrom() {
    this.Title = "Add Driver"
    this.DriverMasterForm = this.fb.group({
      id: [0],
      name: [''],
      drivercategory: [''],
      isreliable: [''],
      DOB: [''],
      Religion: [''],
      qualification: [''],
      maritalstatus: [''],
      drivinglicencecategory: [''],
      drivinglicenceNo: [''],
      drivLiceIssueAuthoLoca: [''],
      drivLiceExDate: [''],
      bloodgroup: [''],
      Address: [''],
      state: [''],
      city: [''],
      STDcode: [''],
      phoneno: [''],
      mobileno: [''],
      referencename: [''],
      referenceaddress: [''],
      referencecity: [''],
      referencepincode: [''],
      referencephoneno: [''],
      referencemobileno: [''],
      policyno: [''],
      insurancecompany: [''],
      insurancevalue: [''],
      nomination: [''],
      insuranceexpirydate: [''],
      fileupload: [''],
    });
    this.LoadChechboxCategory();
    this.LoadCheckBocLicenceCategory();
  }

  StateList() {
    this.stateService.GetStates().subscribe((res: StateModel[]) => {
      this.States = res;
    })
  }

  CityList() {
    this.cityService.GetCities().subscribe((res: CityModel[]) => {
      this.Citys = res;
    })
  }


  onChange(data) {
    this.Cities = this.Citys.filter(x => x.stateId == parseInt(data));
  }


  DriverList() {
    this.driverService.GetDriverModels().subscribe((res: DriverModel[]) => {
      this.rows = res;

      this.changedectetoryRef.detectChanges();
      const  table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  LoadChechboxCategory() {
    this.DriverCategoryCheckBox = [{
      id: 1,
      Name: 'Permanent',
    }, {
      id: 2,
      Name: 'Temporary',
    }, {
      id: 3,
      Name: 'Market',
    }]
  }

  LoadCheckBocLicenceCategory() {
    this.DriverLicenceCategoryCheckBox = [{
      id: 1,
      Name: 'LCV',
    }, {
      id: 2,
      Name: 'LMV',
    }, {
      id: 3,
      Name: 'HCV',
    }]
  }

  SaveDetail() {
    debugger
    let drivercategory = this.DriverMasterForm.controls.drivercategory.value;
    let drivinglicencecategory = this.DriverMasterForm.controls.drivinglicencecategory.value;
    let obj = Object.assign({}, this.hk, this.DriverMasterForm.value);
    obj.fileupload=this.Fileuploadstring;
    this.driverService.SaveDriver(obj).subscribe((Response: DriverModel[]) => {
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Driver has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.hidepopup();
      this.DriverList();
      this.handleFileSelect(event);
    });
  }

  ShowData(data:number){
    this.Title="Edit New Driver"
    this.Cities=this.Citys;
    this.driverService.GetDriverModel(data).subscribe((res:DriverModel)=>{
      var data1=this.datepipe.transform(res.DOB,'yyyy-MM-dd');
      var data2=this.datepipe.transform(res.drivLiceExDate,'yyyy-MM-dd');
      var data3=this.datepipe.transform(res.insuranceexpirydate,'yyyy-MM-dd');
      this.imgURL=res.fileupload;
      this.DriverMasterForm.patchValue({
        id:res.id,
        name:res.name,
        drivercategory:res.drivercategory,
        isreliable:res.isreliable,
        DOB:data1,
        Religion:res.Religion,
        qualification:res.qualification,
        maritalstatus:res.maritalstatus,
        drivinglicencecategory:res.drivinglicencecategory,
        drivinglicenceNo:res.drivinglicenceNo,
        drivLiceIssueAuthoLoca:res.drivLiceIssueAuthoLoca,
        drivLiceExDate:data2,
        bloodgroup:res.bloodgroup,
        Address:res.Address,
        state:res.state,
        city:res.city,
        STDcode:res.STDcode,
        phoneno:res.phoneno,
        mobileno:res.mobileno,
        referencename:res.referencename,
        referenceaddress:res.referenceaddress,
        referencecity:res.referencecity,
        referencepincode:res.referencepincode,
        referencephoneno:res.referencephoneno,
        referencemobileno:res.referencemobileno,
        policyno:res.policyno,
        insurancecompany:res.insurancecompany,
        insurancevalue:res.insurancevalue,
        nomination:res.nomination,
        insuranceexpirydate:data3,
      });
      this.ShowPopUp();
    });
  }

  DeleteDriver(id: number) {
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
        this.driverService.DeleteDriver(id)
          .subscribe(() => {
            // this.Destroy();
            this.DriverList();
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

 //File Upload
 handleFileSelect(evt){
    
  debugger
  var files=evt.target.files;
  var file=files[0];
  if(files && file){
    var a = this.getBase64(file);
  }
}

_handleReaderLoaded(readerEvt){
  var binaryString=readerEvt.target.result;
  this.base64textString=(btoa(binaryString));
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

preview(files,evt) {
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
    this.Fileuploadstring=this.imgURL;
  }
}

downloadFile(imgURL: string, fileName: string) {
  debugger
  fileName=new Date().getUTCDate().toString();
  let a: any = document.createElement('a');
  a.href = imgURL;
  a.download = fileName;
  document.body.appendChild(a);
  a.style = 'display: none';
  a.click();
  a.remove();
};

  public Validator(event: any) {
    const pattern = /^[0-9.]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
  }
}
