import { Component, OnInit,ViewChild,ChangeDetectorRef,TemplateRef } from '@angular/core';
import { FormGroup,FormBuilder} from "@angular/forms";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { CrossingModel } from 'app/shared/model/CrossingModel';
import {crossingMasterService} from '../../shared/service-proxy/CrossingMasterService';
import {BranchMasterService} from '../../shared/service-proxy/branchMasterService';
import {BsModalService,ModalOptions} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CrossingMasterModule } from './crossing-master.module';
import { BranchModel } from '../../shared/model/BranchModel';


import { forEach } from '@angular/router/src/utils/collection';



const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-crossing-master',
  templateUrl: './crossing-master.component.html',
  styleUrls: ['./crossing-master.component.scss']
})
export class CrossingMasterComponent implements OnInit {
@ViewChild('template') template: TemplateRef<any>;
CrossingMasterForm:FormGroup;
BRM:CrossingModel;
rows:any;
Title:string;
dataTable:any;
modalRef:BsModalRef;
BookingTypeChechbox=[];
TranspotTypeCheckBox=[];
Branches:BranchModel[]=[];
config:ModalOptions={
  backdrop:true,
  ignoreBackdropClick:true,
  class:"Modal-lg",
};
  constructor(private fb:FormBuilder,
      private changeDetectorRef:ChangeDetectorRef,
      private modelService:BsModalService,
      private crossingService:crossingMasterService,
      private branchService: BranchMasterService,
    ) { }

  ngOnInit() {
    this.LoadCheckBoxesBooking();
    this.LoadCheckBoxesTranspot();
    this.LoadForm();
    this.CrossingList();
    this.BranchList();
  }

  LoadForm(){
    this.Title="Add New Crossing";
    this.CrossingMasterForm=this.fb.group({
      bookingType: ['0'],
      transpotType: ['0'],
      frombranch: ['0'],
      tobranch: ['0'],
      hireperKG: [''],
      hamaliperKG: [''],
      totalcrossingperKG: [''],
      id: [0]
    });  
  }

  LoadCheckBoxesBooking(){
    this.BookingTypeChechbox=[{
      id:1,
      Name:"Sundry"
      // Selected:false,
     // formControlName:'Sundry',
    },{
        id:2,
        Name:"FTL"
        // Selected:false
    }];
  }

  LoadCheckBoxesTranspot(){
    this.TranspotTypeCheckBox=[{
      id:1,
      Name:"Air"
    },{
      id:2,
      Name:"Rail"
    },{
      id:3,
      Name:"Road"
    },{
      id:4,
      Name:"Express"
    },{
      id:5,
      Name:"Premium"
    }]
  }


  ShowPopUp(){
    this.modalRef=this.modelService.show(this.template,this.config);
  }
  HidePopup(){
    this.modalRef.hide();
    this.LoadForm();
    this.LoadCheckBoxesTranspot();
    this.LoadCheckBoxesBooking();
  }
  BranchList(){
    this.branchService.GetBranches().subscribe((res:BranchModel[])=>{
    this.Branches=res;
    });
  }

  CrossingList(){
    this.crossingService.GetCrossings().subscribe((res:CrossingModel[])=>{
      this.rows=res;
      this.changeDetectorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail(Data:CrossingModel){
    let bookingType=this.CrossingMasterForm.controls.bookingType.value;
    let traspotType=this.CrossingMasterForm.controls.bookingType.value;
    let obj=Object.assign({},this.BRM,this.CrossingMasterForm.value);
    this.crossingService.SaveCrossing(obj).subscribe((Response:boolean)=>{
      this.HidePopup();
      this.destroy();
      if(Response){
        Swal({
          position:'center',
          type:'success',
          title:'Crossing has been success',
          showConfirmButton:false,
          timer:1500
        });
      }
      this.CrossingList();
      this.LoadForm();
    })
  }

  ShowData(data:number){
    this.Title="Edit Crossing";
    this.crossingService.GetCrossing(data).subscribe((res:CrossingModel)=>{
      this.CrossingMasterForm.patchValue({
        id:res.id,
        bookingType:res.bookingType,
        transpotType:res.transpotType,
        frombranch:res.frombranch,
        tobranch:res.tobranch,
        hireperKG:res.hireperKG,
        hamaliperKG:res.hamaliperKG,
        totalcrossingperKG:res.totalcrossingperKG,
      });
      this.ShowPopUp();
    });
  }

  destroy(){
    const table:any=$('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  DeleteCrossing(id:number){
    debugger
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
      this.crossingService.DeleteCrossing(id)
      .subscribe((Response:boolean)=>{
        this.destroy();
        this.CrossingList();
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

  public Validator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }
}
