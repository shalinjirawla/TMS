import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import *  as $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { DocumentSeriesAllocationModel } from '../../shared/model/DocumentSeriesAllocationModel';
import { DocumentSeriesAllocationOperationService } from '../../shared/service-proxy/documentseriesallocationOperationService';

import { BranchModel } from '../../shared/model/BranchModel';
import { BranchMasterService } from '../../shared/service-proxy/branchMasterService';

import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-document-series-allocation-operation',
  templateUrl: './document-series-allocation-operation.component.html',
  styleUrls: ['./document-series-allocation-operation.component.scss']
})
export class DocumentSeriesAllocationOperationComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  DocumentSeriesAllocationOperationForm: FormGroup;

  DocumentTypeCheckBox: any[];
  modalRef: BsModalRef;

  hk: any;
  rows: any;
  Title: string;
  branch: any[];
  dataTable:any;

  StartSeriesNo: number;
  EndSeriesNo: number;
  TotalAmount: number;
  answer: any;
  series:any[];

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private documentSeriesAllocationService: DocumentSeriesAllocationOperationService,
    private datepipe: DatePipe,
    private branchService: BranchMasterService,
    private changedetectoryRef:ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.BranchList();
    this.DocumentSeriesAllocationList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config)
    this.OnchengeLoad();
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Document Series Allocation"
    this.DocumentSeriesAllocationOperationForm = this.fb.group({
      id: [0],
      dateofallocation: [''],
      branch: [''],
      documenettype: [''],
      startseriesNo: [''],
      endseriesNo: [''],
      count: [''],
    });
    this.LoadCheckBoxDataList();
    this.OnchengeLoad();
  }

  LoadCheckBoxDataList() {
    this.DocumentTypeCheckBox = [
      {
        id: 1,
        Name: 'CN',
      }, {
        id: 2,
        Name: 'Challan',
      }, {
        id: 3,
        Name: 'MR',
      }, {
        id: 4,
        Name: 'Bill',
      }
    ]
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.branch = res;
    })
  }

  DocumentSeriesAllocationList() {
    this.documentSeriesAllocationService.GetDocumentSeriesAllocationModels().subscribe((res: DocumentSeriesAllocationModel[]) => {
      this.rows = res;

      this.changedetectoryRef.detectChanges();
      const table:any = $('table');
      this.dataTable=table.DataTable();
    })
  }

  onBlurMethod(values: number) {
    this.StartSeriesNo = values;
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo);
  }

  onBlurMethods(values: number) {
    this.EndSeriesNo = values;
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo);
  }

  CalculateAmount(startseriesNoValues: any, EndSeriesNoValues: any) {
    debugger
    if (startseriesNoValues != null && startseriesNoValues != undefined) {
      this.TotalAmount = parseInt(EndSeriesNoValues) - parseInt(startseriesNoValues);
      // this.TotalAmount=parseInt()
      // this.TotalAmount=parseInt()
      this.DocumentSeriesAllocationOperationForm.patchValue({
        count: this.TotalAmount,
      })
    }
  }

  OnchengeLoad() {
    debugger
     this.documentSeriesAllocationService.OnSeriesNo().subscribe((res:any)=>{
        this.series=res;
     })
     this.DocumentSeriesAllocationOperationForm.patchValue({
      startseriesNo: this.series,
    })
  }

  SaveDetail(){
    if(this.DocumentSeriesAllocationOperationForm.value){
      let validation:boolean=false;
      let obj=Object.assign({},this.hk,this.DocumentSeriesAllocationOperationForm.value);
      validation=true;
      if(validation){
        this.documentSeriesAllocationService.SaveDocumentSeriesAllocation(obj).subscribe((Response:Boolean)=>{
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Document Series Allocation has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.DocumentSeriesAllocationList();
        });
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit New Document Allocation"
    this.documentSeriesAllocationService.GetDocumentSeriesAllocationModel(data).subscribe((res: DocumentSeriesAllocationModel) => {
      var date1 = this.datepipe.transform(res.dateofallocation, 'yyyy-MM-dd');
      this.DocumentSeriesAllocationOperationForm.patchValue({
        id: res.id,
        dateofallocation: date1,
        branch:res.branch,
        documenettype: res.documenettype,
        startseriesNo: res.startseriesNo,
        endseriesNo: res.endseriesNo,
        count: res.count,
      });
      this.ShowPopUp();
    });
  }

  DeleteAllocation(id: number) {
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
        this.documentSeriesAllocationService.DeleteDocumentSeriesAllocation(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.DocumentSeriesAllocationList();
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
