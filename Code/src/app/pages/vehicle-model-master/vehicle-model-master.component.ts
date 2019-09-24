import { Component, OnInit ,ViewChild,ChangeDetectorRef,TemplateRef} from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import {ModalOptions,BsModalService}  from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {VehicleModel}  from '../../shared/model/VehicleModel';
import {VehiclemodelMasterService} from '../../shared/service-proxy/vehiclemodelMasterService';
import {CityModel} from '../../shared/model/CityModel';
import {CityMasterService} from '../../shared/service-proxy/cityMasterService';
import {VendorModel} from '../../shared/model/VendorModel';
import {VendorMasterService} from '../../shared/service-proxy/vendorMasterService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});
@Component({
  selector: 'app-vehicle-model-master',
  templateUrl: './vehicle-model-master.component.html',
  styleUrls: ['./vehicle-model-master.component.scss']
})
export class VehicleMasterComponent implements OnInit {
@ViewChild ('template') template:TemplateRef<any>;
VehicleModelMasterForm:FormGroup;
modalRef:BsModalRef;
rows:any;
dataTable:any;
Title:string;
rcb:VehicleModel;
sum:number;

calculate(first:number,second:number){
  this.sum=+first+ +second
}
items:any;
answer:any;
vehicleweightinMT:number=0;
unladenweightinMT:number=0;
TotalAmount:number;

Vendors:VendorModel[]=[];
cities:CityModel[]=[];

config:ModalOptions={
  backdrop:true,
  ignoreBackdropClick:true,
  class:'modal-lg',
}

  constructor(private vehicletypeService:VehiclemodelMasterService,
              private venderService:VendorMasterService,
              private cityService:CityMasterService,
              private modalService:BsModalService,
              private changeDetectorRef:ChangeDetectorRef,   
              private fb:FormBuilder,
    ) { }

  ngOnInit() {
    this.VehicleTypeList();
    this.LoadForm();
    this.Manufacturename();
    this.CityList();
    // this.onBlurMethods(vehicleweightinMT,unladenweightinMT);
  }

  LoadForm(){
    this.Title="Add Vehicle Model";
    this.VehicleModelMasterForm=this.fb.group({
      id:[0],
      // name:[''],
      modelname:[''],
      manufacturername:['0'],
      vehicleweightinMT:[''],
      unladenweightinMT:[''],
      vehiclecapacity:[''],
      length:[''],
      width:[''],
      height:[''],
    });
    // this.onBlurMethods(vehicleweightinMT,unladenweightinMT);
  }

  ShowPopUp(){
    this.modalRef=this.modalService.show(this.template,this.config);
  }

  Manufacturename(){
    this.venderService.vendorModels().subscribe((res:VendorModel[])=>{
      this.Vendors=res;
    });
  }

  CityList(){
    this.cityService.GetCities().subscribe((res:CityModel[])=>{
      this.cities=res;
    });
  }

  hidepopup(){
    this.modalRef.hide();
    this.LoadForm();
  }

  VehicleTypeList(){
    this.vehicletypeService.GetVehicleModels().subscribe((res:VehicleModel[])=>{
      this.rows=res;

      this.changeDetectorRef.detectChanges();
      const table:any = $('table');
      this.dataTable=table.DataTable();
    })
  }

  // onBlurMethods(vehicleweightinMT,unladenweightinMT){
  //   debugger
  //   this.answer= parseInt(vehicleweightinMT) - parseInt(unladenweightinMT);
  //   this.VehicleModelMasterForm.controls.vehiclecapacity.patchValue(this.answer);
  // }
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
      this.VehicleModelMasterForm.patchValue({
        vehiclecapacity:this.TotalAmount
      })
    }
  }

  SaveDetail(data:VehicleModel){
    let obj=Object.assign({},this.rcb,this.VehicleModelMasterForm.value);
    this.vehicletypeService.SaveVehicleModel(obj).subscribe((response:boolean)=>{
      if(response){
        Swal({
          position: 'center',
          type: 'success',
          title: 'Vehicle Model has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.VehicleTypeList();
      this.hidepopup();
      
    });
  }

  ShowData(data:number){
    this.Title="Edit Vehicle Model";
    this.vehicletypeService.GetVehicleModel(data).subscribe((res:VehicleModel)=>{
      this.VehicleModelMasterForm.patchValue({
        id:res.id,
        // name:res.name,
        modelname:res.modelname,
        manufacturername:res.manufacturername,
        vehicleweightinMT:res.vehicleweightinMT,
        unladenweightinMT:res.unladenweightinMT,
        vehiclecapacity:res.vehiclecapacity,
        length:res.length,
        width:res.width,
        height:res.height,
      });
      this.ShowPopUp();
    })
  }

  DeleteVehicleType(id: number) {
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
        this.vehicletypeService.DeleteVehicleModel(id)
          .subscribe(() => {
            // this.Destroy();
            this.VehicleTypeList();
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
}
