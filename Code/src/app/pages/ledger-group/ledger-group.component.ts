import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { LedgerGroupModel } from '../../shared/model/LedgerGroupModel';
import { LedgerGroupService } from '../../shared/service-proxy/ledgergroupService';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass"
});

@Component({
  selector: 'app-ledger-group',
  templateUrl: './ledger-group.component.html',
  styleUrls: ['./ledger-group.component.scss']
})
export class LedgerGroupComponent {
  @ViewChild('template') template: TemplateRef<any>;
  LedgerGroupForm: FormGroup;

  modalRef:BsModalRef;
  Title:string;
  nature:any[];
  hk:any;
  rows:any[];
  dataTable:any;

  config:ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
  };

  constructor(
    private fb:FormBuilder,
    private modalService:BsModalService,
    private ledgergroupService:LedgerGroupService,
    private changedetectorRef:ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.LedgerGroupList();
  }

  ShowPopUp(){
    this.modalRef=this.modalService.show(this.template,this.config);
  }

  hidepopup(){
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm(){
    this.Title="Add Ledger Group";
    this.LedgerGroupForm=this.fb.group({
      id:[0],
      ledgergroupname:[''],
      nature:[''],
    });
    this.OnLoadCheckbox();
  }

  OnLoadCheckbox(){
    this.nature=[{
      id:1,
      name:'Assets',
    },{
      id:2,
      name:'Liabilities',
    },{
      id:3,
      name:'Income',
    },{
      id:4,
      name:'Expenses',
    }]
  }

  LedgerGroupList(){
    this.ledgergroupService.GetLedgerGroupFinanceModels().subscribe((res:LedgerGroupModel[])=>{
      this.rows=res;

      this.changedetectorRef.detectChanges();
      const table:any=$('table');
      this.dataTable=table.DataTable();
    })
  }

  SaveDetail(){
    if (this.LedgerGroupForm.value) {
      let validation:boolean=false;
      let obj=Object.assign({},this.hk,this.LedgerGroupForm.value)
      validation=true;
      if (validation) {
        this.ledgergroupService.SaveLedgerGroupFinance(obj).subscribe((Response: boolean) => {
          this.hidepopup();
          // this.Destroy();
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Outward has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.LedgerGroupList();
        })
      }
    }
  }

  ShowData(data:number){
    this.Title="Edit Ledger Group";
    this.ledgergroupService.GetLedgerGroupFinanceModel(data).subscribe((res:LedgerGroupModel)=>{
      this.LedgerGroupForm.patchValue({
        id:res.id,
        ledgergroupname:res.ledgergroupname,
        nature:res.nature,
      })
      this.ShowPopUp();
    })
  }

  DeleteLedgerGroup(id: number) {
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
        this.ledgergroupService.DeleteLedgerGroupFinance(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.LedgerGroupList();
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


  public Validator(event: any) {
    const pattern = /^[0-9.]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
  }

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

}
