import { Component, OnInit,ViewChild,ChangeDetectorRef,TemplateRef} from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import {ModalOptions, BsModalService} from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {VehicleModel} from '../../shared/model/VehicleModel';
import {VehicleMasterService} from '../../shared/service-proxy/vehicleMasterService';

import {VehicleTypeModel} from '../../shared/model/VehicleTypeModel';
import {VehicleTypeMasterService} from '../../shared/service-proxy/vehicletypeMasterService';

import {VendorModel} from '../../shared/model/VendorModel';
import {VendorMasterService} from '../../shared/service-proxy/vendorMasterService';

import {VehicleMasterModel} from '../../shared/model/VehicleMasterModel';
import {VehiclemodelMasterService} from '../../shared/service-proxy/vehiclemodelMasterService';

import {VendorTypeModel} from '../../shared/model/VendorTypeModel';
import {VendorTypeMasterService} from '../../shared/service-proxy/vendortypeMasterService';

import {DriverMasterService} from '../../shared/service-proxy/driverMasterService';
import {DriverModel} from '../../shared/model/DriverMasterModule';

import {DatePipe} from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-vehicle-master',
  templateUrl: './vehicle-master.component.html',
  styleUrls: ['./vehicle-master.component.scss']
})
export class VehicleMasterComponent {
  @ViewChild('template') template: TemplateRef<any>;
  VehicleMastersForm: FormGroup;
  
  rows: any;
  dataTable: any;
  Title: string;
  cm: VehicleModel;
  modalRef: BsModalRef;


  VehicleTypes:VehicleTypeModel[]=[];
  Vendor:VendorModel[]=[];
  Vendors:VendorModel[]=[];
  ven:VendorModel[]=[];
  driver:DriverModel[]=[];
  vehicleModels:VehicleModel[]=[];
  VehicleCapacityChechbox=[];
  gm:VehicleMasterModel;
  vehicleweightinMT:number=0;
  unladenweightinMT:number=0;
  TotalAmount:number;


  private base64textString:String="";
  public imagePath;
  imgURL: any;
  Fileuploadstring:any;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };
  constructor(
    private fb:FormBuilder,
              private vehicleService:VehicleMasterService,
              private modalService:BsModalService,
              private changeDetectorRef:ChangeDetectorRef,
              private vehicletypeService:VehicleTypeMasterService,
              private vendorService:VendorMasterService,
              private vehiclemodelService:VehiclemodelMasterService,
              private vendertypeService:VendorTypeMasterService,
              private datePipe:DatePipe,
              private driverService:DriverMasterService,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.LoadCheckBoxesBooking();
    this.VehicleType();
    this.Manufacturer();
    this.VehicleModel();
    this.DriverList();
    this.Vehicle();
  }

  LoadCheckBoxesBooking(){
    this.VehicleCapacityChechbox=[{
      id:1,
      Name:"Own"
    },{
        id:2,
        Name:"Attached"
    },{
      id:2,
      Name:"Market"
    }];
  }

  LoadForm(){
    this.Title="Add Vehicle";
    this.VehicleMastersForm=this.fb.group({
      id:[0],
      vehiclecategory:['0'],
      vehicleNo:[''],
      vehicleType:['0'],
      manufacturer:['0'],
      vehiclemodel:['0'],
      yearofmanufacturing:[''],
      GPSID:[''],
      drivername:['0'],
      ownerdetails:[''],
      chassisNo:[''],
      engineNo:[''],
      trollychassisNo:[''],
      fueltankCapacity:[''],
      vehicleweightinMT:[''],
      unladenweightinMT:[''],
      vehicleCapacity:[''],
      wheelbaseinMM:[''],
      lengthinFt:[''],
      widthinft:[''],
      heightinft:[''],
      powerinCC:[''],
      paintCode:[''],
      paintColour:[''],
      ignitionkey:[''],
      doorkeycode:[''],
      bankfanainstuName:[''],
      loanaccountNo:[''],
      fileUpload:[''],
      wheelsize:[''],
      tyresize:[''],
      psi:[''],
      registrationDate:[''],
      fitnessDate:[''],
      permitfromdate:[''],
      insurancefromdate:[''],
    })
  }

  ShowPopUp(){
    this.modalRef=this.modalService.show(this.template,this.config);
  }

  HidePopUp() {
    this.modalRef.hide();
    this.LoadForm();
  }

  VehicleType(){
    this.vehicletypeService.GetVehicleTypeModels().subscribe((res:VehicleTypeModel[])=>{
      this.VehicleTypes=res;
    })
  }

  DriverList(){
    this.driverService.GetDriverModels().subscribe((res:DriverModel[])=>{
      this.driver=res;
    })
  }

  Manufacturer(){
    this.vendorService.vendorModels().subscribe((res:VendorModel[])=>{
      this.Vendor=res;
      return this.Vendors=res;
    })
  }

  onChange(data){
    debugger
    var Venid=0;
    this.Vendor = this.Vendors.filter(x => x.id == parseInt(data));
    if(this.Vendor.length>0){
      Venid=this.Vendor[0].id;
    }
    this.VehicleMastersForm.patchValue({
      ownerdetails:Venid,
    })
  }

  // OwnerDetails(){
  //   this.vendorService.vendorModels().subscribe((res:VendorModel[])=>{
  //     this.Vendors=res;
  //   })
  // }

  VehicleModel(){
    this.vehiclemodelService.GetVehicleModels().subscribe((res:VehicleModel[])=>{
      this.vehicleModels=res;

    })
  }

  

  onBlurMethod(values:number){
    this.vehicleweightinMT=values;
    this.CalculateAmount(this.vehicleweightinMT,this.unladenweightinMT)
  }

  onBlurMethods(values:number){
    this.unladenweightinMT=values;
    this.CalculateAmount(this.vehicleweightinMT,this.unladenweightinMT)
  }

  CalculateAmount(vehicleweightinMTValues:number,unladenweightinMTValues:number){
    if(vehicleweightinMTValues != null && vehicleweightinMTValues != undefined){
      this.TotalAmount=vehicleweightinMTValues-unladenweightinMTValues;
      this.VehicleMastersForm.patchValue({
        vehicleCapacity:this.TotalAmount
      })
    }
  }

  Vehicle(){
    this.vehicleService.GetVehicleMasters().subscribe((res:VehicleMasterModel[])=>{
      this.rows=res;

      this.changeDetectorRef.detectChanges();
      const table: any =$('table');
      this.dataTable=table.DataTable();
    });
  }

  SaveDetail(data:VehicleMasterModel){
    let ownerdetails = 0;
    let vehicleCapacity=this.VehicleMastersForm.controls.vehicleCapacity.value;
    let obj=Object.assign({},this.gm,this.VehicleMastersForm.value);
    obj.fileUpload=this.Fileuploadstring;
   
    this.vehicleService.SaveVehicleMaster(obj).subscribe((Response:boolean)=>{  
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Vehicle has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.Vehicle();
      this.HidePopUp();
      this.handleFileSelect(event);
    });
  }

  ShowData(data:number){
    debugger
    this.Title="Edit Vehicle";
    this.vehicleService.GetVehicleModel(data).subscribe((res:VehicleMasterModel)=>{
      var data1=this.datePipe.transform(res.registrationDate,'yyyy-MM-dd');
      var data2=this.datePipe.transform(res.fitnessDate,'yyyy-MM-dd');
      var data3=this.datePipe.transform(res.permitfromdate,'yyyy-MM-dd');
      var data4=this.datePipe.transform(res.insurancefromdate,'yyyy-MM-dd');
      this.imgURL=res.fileUpload;
      this.VehicleMastersForm.patchValue({
        id:res.id,
        vehiclecategory:res.vehiclecategory,
        vehicleNo:res.vehicleNo,
        vehicleType:res.vehicleType,
        manufacturer:res.manufacturer,
        vehiclemodel:res.vehiclemodel,
        yearofmanufacturing:res.yearofmanufacturing,
        GPSID:res.GPSID,
        drivername:res.drivername,
        ownerdetails:res.ownerdetails,
        chassisNo:res.chassisNo,
        engineNo:res.engineNo,
        trollychassisNo:res.trollychassisNo,
        fueltankCapacity:res.fueltankCapacity,
        vehicleweightinMT:res.vehicleweightinMT,
        unladenweightinMT:res.unladenweightinMT,
        vehicleCapacity:res.vehicleCapacity,
        wheelbaseinMM:res.wheelbaseinMM,
        lengthinFt:res.lengthinFt,
        widthinft:res.widthinft,
        heightinft:res.heightinft,
        powerinCC:res.powerinCC,
        paintCode:res.paintCode,
        paintColour:res.paintColour,
        ignitionkey:res.ignitionkey,
        doorkeycode:res.doorkeycode,
        bankfanainstuName:res.bankfanainstuName,
        loanaccountNo:res.loanaccountNo,
        wheelsize:res.wheelsize,
        tyresize:res.tyresize,
        psi:res.psi,
        registrationDate:data1,
        fitnessDate:data2,
        permitfromdate:data3,
        insurancefromdate:data4,
      });
      this.ShowPopUp();
    });
  }

  DeleteVehilce(id:number){
    swalWithBootstrapButtons({
      title:'Are you sure?',
      text:"You Won't be able to revert this!",
      type:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes, delete it!',
      cancelButtonText:'No, cancel!',
      reverseButtons:true
    }).then((result)=>{
      if(result.value){
        this.vehicleService.DeleteVehicle(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.Vehicle();
        });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }else if(
        result.dismiss === Swal.DismissReason.cancel
      ){
        swalWithBootstrapButtons(
          'Cancelled',
          'Data is safe : )',
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
  public Validator(event: any) {
    const pattern = /^[0-9.]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
  }
}
