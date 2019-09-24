import { Component, OnInit,ViewChild,TemplateRef,ChangeDetectorRef } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import  Swal from 'sweetalert2';
import {BsModalService,ModalOptions} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ContractMasterModule} from './contract-master.module';
import {BranchModel} from '../../shared/model/BranchModel';
import {BranchMasterService} from '../../shared/service-proxy/branchMasterService';
import {ContractMasterService} from '../../shared/service-proxy/contractmasterservice';
import {ContractModel} from 'app/shared/model/ContractModel';
import {RegularClientMasterService} from '../../shared/service-proxy/regularClientMasterService';
import {RegularClientModel} from '../../shared/model/RegularClientModel';
import {DatePipe} from '@angular/common'
import { pluck } from 'rxjs/operators';



import {forEach} from '@angular/router/src/utils/collection';
import { CrossingModel } from 'app/shared/model/CrossingModel';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs/observable/fromEvent';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-contract-master',
  templateUrl: './contract-master.component.html',
  styleUrls: ['./contract-master.component.scss']
})
export class ContractMasterComponent implements OnInit {
  selecetdFile : File;
@ViewChild('template') template:TemplateRef<any>;
modalRef:BsModalRef;
Title:string;
rows:ContractModel[];
dataTable: any;
Fileuploadstring:any;
ContractMasterForm:FormGroup;
gm:CrossingModel;
LoadDefaultDeliveryTypeCheckBox=[];
Branches:BranchModel[]=[];
RegularClient:RegularClientModel[]=[];
imageSrc:string="";

private base64textString:String="";
public imagePath;
imgURL: any;

config: ModalOptions = {
  backdrop: true,
  ignoreBackdropClick: true,
  class: 'modal-lg'
};

  constructor(private fb:FormBuilder,
    private modalService:BsModalService,
    private ContractService:ContractMasterService,
    private changeDetecterRef:ChangeDetectorRef,
    private branchService:BranchMasterService,
    private consigneeService:RegularClientMasterService,
    private datePipe:DatePipe,
  ) { }

  ngOnInit() {
    this.LoadForm();
  }
  
  LoadDefaultDeliveryType(){
    this.LoadDefaultDeliveryTypeCheckBox=[{
      id:1,
      name:"Actual Wt"
    },{
      id:2,
      name:"Charged Wt"
    }]; 
  }



  ShowPopUp(){
    this.modalRef=this.modalService.show(this.template,this.config);
  }
  HidePoPup(){
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm(){
    this.Title="Add New Contract";
    this.LoadDefaultDeliveryType();
     this.BranchList();
     this.RegularClientList();
    this.contractList();
    this.ContractMasterForm=this.fb.group({
      name:[''],
      no:[''],
      date:[''],
      branch:['0'],
      clientname:['0'],
      pono:[''],
      podate:[''],
      validtodate:[''],
      validfromdate:[''],
      rateapplicableon:['0'],
     // probusipermonth:[''],
      weight:[''],
      freight:[''],
      branchfrom:['0'],
      branchto:['0'],
      freightperKG:[''],
      statisticalcharges:[''],
      FOV:[''],
      hamaliperKG:[''],
      hamaniperArt:[''],
      localcharges:[''],
      doordeliverychargesKG:[''],
      doordeliverychargesart:[''],
      gicharges:[''],
      demurragedays:[''],
      demurragerate:[''],
      fileupload:[''],
      id:[0],
    })
  }

  BranchList(){
    this.branchService.GetBranches().subscribe((res:BranchModel[])=>{
      this.Branches=res;
    })
  }

  RegularClientList(){
    this.consigneeService.GetRegularClients().subscribe((res:RegularClientModel[])=>{
      this.RegularClient=res;
    })
  }

  SaveDetail(data:ContractModel){
    let validfromdate=this.ContractMasterForm.controls.validfromdate.value;
    let validtodate=this.ContractMasterForm.controls.validtodate.value;
    let date=this.ContractMasterForm.controls.date.value;
    let podate=this.ContractMasterForm.controls.podate.value;
    let rateapplicableon=this.ContractMasterForm.controls.rateapplicableon.value;
    let obj=Object.assign({},this.gm,this.ContractMasterForm.value);
    obj.fileupload=this.Fileuploadstring;
  debugger
    this.ContractService.SaveContract(obj).subscribe((Response:boolean)=>{
      this.HidePoPup();
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'contract has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.RegularClientList();
      this.BranchList();
      this. handleFileSelect(event);
    });
  }
  
  ShowData(data:number){
    debugger
    this.Title="Edit New Contract";
    this.ContractService.GetContract(data).subscribe((res:ContractModel)=>{
      var date1=this.datePipe.transform(res.date,'yyyy-MM-dd');
      var date2=this.datePipe.transform(res.podate,'yyyy-MM-dd');
      var date3=this.datePipe.transform(res.validfromdate,'yyyy-MM-dd');
      var date4=this.datePipe.transform(res.validtodate,'yyyy-MM-dd');
      this.imgURL=res.fileupload;
      debugger
      this.ContractMasterForm.patchValue({
        id:res.id,
        name:res.name,
        no:res.no,
        date:date1,
        branch:res.branch,
        clientname:res.clientname,
        pono:res.pono,
        podate:date2,
        validfromdate:date3,
        validtodate:date4,
        rateapplicableon:res.rateapplicableon,
        weight:res.weight,
        freight:res.freight,
        branchfrom:res.branchfrom,
        branchto:res.branchto,
        freightperKG:res.freightperKG,
        statisticalcharges:res.statisticalcharges,
        FOV:res.FOV,
        hamaliperKG:res.hamaliperKG,
        hamaniperArt:res.hamaniperArt,
        localcharges:res.localcharges,
        doordeliverychargesKG:res.doordeliverychargesKG,
        doordeliverychargesart:res.doordeliverychargesart,
        gicharges:res.gicharges,
        demurragedays:res.demurragedays,
        demurragerate:res.demurragerate,
        //imgURL:res.fileupload,
      });
      this.ShowPopUp();
    });
  }
  
  DeleteContract(id:number){
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
        this.ContractService.DeleteContract(id)
        .subscribe((Response:boolean)=>{
          //this.destroy();
          this.contractList();
        });
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }else if(
        result.dismiss === swal.DismissReason.cancel
      ){
        swalWithBootstrapButtons(
          'Cancelled',
          'Data is safe : )',
          'info'
        )
      }
    });
  }
  
  contractList(){
    this.ContractService.GetContracts().subscribe((res:ContractModel[])=>{
      this.rows=res;

      this.changeDetecterRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();  
    })
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
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }
}


// https://plnkr.co/edit/PFfebmnqH0eQR9I92v0G?p=preview
// https://stackoverflow.com/questions/52036667/angular-5-how-to-download-a-remote-image