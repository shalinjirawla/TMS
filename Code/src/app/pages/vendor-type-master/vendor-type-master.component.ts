import { Component, OnInit,ViewChild,ChangeDetectorRef,TemplateRef} from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import {ModalOptions, BsModalService} from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {VendorTypeModel} from '../../shared/model/VendorTypeModel';
import {VendorTypeMasterService} from '../../shared/service-proxy/vendortypeMasterService';


const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});


@Component({
  selector: 'app-vendor-type-master',
  templateUrl: './vendor-type-master.component.html',
  styleUrls: ['./vendor-type-master.component.scss']
})
export class VendorTypeMasterComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  VendorTypeMasterForm: FormGroup;
  rows: any;
  dataTable: any;
  Title: string;
  cm: VendorTypeModel;
  modalRef: BsModalRef;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };
  constructor(private fb:FormBuilder,
              private vendortypeService:VendorTypeMasterService,
              private modalService:BsModalService,
              private changeDetectorRef:ChangeDetectorRef,          
    ) { }

  ngOnInit() {
    this.VendorTypeList();
    this.LoadForm();
  }

  LoadForm(){
    this.Title="Add Vender Master";
    this.VendorTypeMasterForm=this.fb.group({
      Name:[''],
      id:[0],
    })
  }

  ShowPopUp(){
    this.modalRef=this.modalService.show(this.template,this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  VendorTypeList(){
    this.vendortypeService.GetVendorTypes().subscribe((res:VendorTypeModel[])=>{
      this.rows=res;
      this.changeDetectorRef.detectChanges();
      const table:any =$('table');
      this.dataTable=table.DataTable();
    })
  }
  SaveDetail() {
    debugger
    let obj = Object.assign({}, this.cm, this.VendorTypeMasterForm.value);
    this.vendortypeService.SaveVendorType(obj).subscribe((Response: boolean) => {
      // this.Destroy();
      if (Response) {
        Swal({
          position: 'center',
          type: 'success',
          title: 'Vendor Type has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      }
      this.VendorTypeList();
      this.hidepopup();
    })
  }

  ShowData(data: number) {
    debugger
    this.Title="Edit Vendor Master";
    this.vendortypeService.GetTypeModel(data).subscribe((res:VendorTypeModel)=>{
      this.VendorTypeMasterForm.patchValue({
        id:res.id,
        Name:res.Name,
      })
      this.ShowPopUp();
    })
  }

  DeleteVendorType(id: number) {
    debugger
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "You Won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.vendortypeService.DeleteVendorType(id)
          .subscribe((Response: boolean) => {
            // this.Destroy();
            this.VendorTypeList();
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
          'Data is safe : )',
          'info'
        )
      }
    });
  }
}
