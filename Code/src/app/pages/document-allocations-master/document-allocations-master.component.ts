import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DocumentAllocationModel } from '../../shared/model/DocumentAllocationModel';
import { DocumentAllocationMasterService } from '../../shared/service-proxy/documentallocationMasterService';

import { BranchModel } from '../../shared/model/BranchModel';
import { ServiceLocationMaster } from '../../shared/service-proxy/Service-Location-Master.Service';
import { BranchMasterService } from 'app/shared/service-proxy/branchMasterService';

import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-document-allocations-master',
  templateUrl: './document-allocations-master.component.html',
  styleUrls: ['./document-allocations-master.component.scss']
})
export class DocumentAllocationsMasterComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;
  DocumentAllocationMasterForm: FormGroup;
  modalRef: BsModalRef;
  branch: BranchModel[];
  DocumentTypeCheckBox = [];
  rows: any;
  hk: DocumentAllocationModel;

  Title: string;
  answer: any;
  StartSeriesNo: number;
  EndSeriesNo: number;
  TotalAmount: number;

  StartSeriesNo1: number;
  EndSeriesNo1: number;
  TotalAmount1: number;

  StartSeriesNo2: number;
  EndSeriesNo2: number;
  TotalAmount2: number;

  dataTable: any;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(private fb: FormBuilder,
    private documentallocationService: DocumentAllocationMasterService,
    private branchService: BranchMasterService,
    private changedetectorRef: ChangeDetectorRef,
    private modalService: BsModalService,
    private datepipe: DatePipe,
  ) { }

  ngOnInit() {
    this.BranchList();
    this.LoadFrom();
    this.DocumentAllocationList();
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

  LoadFrom() {
    this.Title = "Add Document Allocations"
    this.DocumentAllocationMasterForm = this.fb.group({
      id: [0],
      generationdate: [''],
      documenttype: ['0'],
      startseriesNo: [''],
      endseriesNo: [''],
      count: [''],
      dateofprinting: [''],
      documenttype1: ['0'],
      startseriesNo1: [''],
      endseriesNo1: [''],
      count1: [''],
      dateofallocation: [''],
      branch: ['0'],
      documenettype2: ['0'],
      startseriesNo2: [''],
      endseriesNo2: [''],
      count2: [''],
    });
    this.LoadCheckBoxDataList();
  }

  BranchList() {
    this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
      this.branch = res;
    })
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadFrom();
    // this.DocumentAllocationMasterForm.reset();
  }


  onBlurMethod(values: number) {
    this.StartSeriesNo = values;
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo)
  }

  onBlurMethods(values: number) {
    this.EndSeriesNo = values;
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo)
  }

  CalculateAmount(startseriesNoValues: any, EndSeriesNoValues: any) {
    debugger
    if (startseriesNoValues != null && startseriesNoValues != undefined) {
      this.TotalAmount = parseInt(startseriesNoValues) + parseInt(EndSeriesNoValues);
      this.DocumentAllocationMasterForm.patchValue({
        count: this.TotalAmount,
      })
    }
  }

  onBlurMethod1(values: number) {
    this.StartSeriesNo1 = values;
    this.CalculateAmount1(this.StartSeriesNo1, this.EndSeriesNo1)
  }

  onBlurMethods1(values: number) {
    this.EndSeriesNo1 = values;
    this.CalculateAmount1(this.StartSeriesNo1, this.EndSeriesNo1)
  }

  CalculateAmount1(startseriesNoValues1: any, EndSeriesNoValues1: any) {
    debugger
    if (startseriesNoValues1 != null && startseriesNoValues1 != undefined) {
      this.TotalAmount1 = parseInt(startseriesNoValues1) + parseInt(EndSeriesNoValues1);
      this.DocumentAllocationMasterForm.patchValue({
        count1: this.TotalAmount1,
      })
    }
  }

  onBlurMethod2(values: number) {
    this.StartSeriesNo2 = values;
    this.CalculateAmount2(this.StartSeriesNo2, this.EndSeriesNo2)
  }

  onBlurMethods2(values: number) {
    this.EndSeriesNo2 = values;
    this.CalculateAmount2(this.StartSeriesNo2, this.EndSeriesNo2)
  }

  CalculateAmount2(startseriesNoValues2: any, EndSeriesNoValues2: any) {
    debugger
    if (startseriesNoValues2 != null && startseriesNoValues2 != undefined) {
      this.TotalAmount2 = parseInt(startseriesNoValues2) - parseInt(EndSeriesNoValues2);
      this.DocumentAllocationMasterForm.patchValue({
        count2: this.TotalAmount2,
      })
    }
  }

  DocumentAllocationList() {
    this.documentallocationService.GetDocumentAllocations().subscribe((res: DocumentAllocationModel[]) => {
      debugger
      this.rows = res;

      this.changedetectorRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  SaveDetail() {
    debugger
    if (this.DocumentAllocationMasterForm.valid) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.DocumentAllocationMasterForm.value);
      validation = true;
      if (validation) {
        this.documentallocationService.SaveDocumentAllocation(obj).subscribe((response: boolean) => {
          if (response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'document allocation has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.DocumentAllocationList();
          this.hidepopup();
          this.Destroy();
        });
      }
    }
  }

  Destroy() {
    const table: any = $('table');
    table.DataTable();
    table.DataTable().destroy();
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit New Document Allocation"
    this.documentallocationService.GetDocumentAllocation(data).subscribe((res: DocumentAllocationModel) => {
      var date1 = this.datepipe.transform(res.generationdate, 'yyyy-MM-dd');
      var date2 = this.datepipe.transform(res.dateofprinting, 'yyyy-MM-dd');
      var date3 = this.datepipe.transform(res.dateofallocation, 'yyyy-MM-dd');
      this.DocumentAllocationMasterForm.patchValue({
        id: res.id,
        generationdate: date1,
        documenttype: res.documenttype,
        startseriesNo: res.startseriesNo,
        endseriesNo: res.endseriesNo,
        count: res.count,
        dateofprinting: date2,
        documenttype1: res.documenttype1,
        startseriesNo1: res.startseriesNo1,
        endseriesNo1: res.endseriesNo1,
        count1: res.count1,
        dateofallocation: date3,
        branch: res.branch,
        documenettype2: res.documenettype2,
        startseriesNo2: res.startseriesNo2,
        endseriesNo2: res.endseriesNo2,
        count2: res.count2,
      });
      this.ShowPopUp();
    });
  }

  DeleteDocument(id: number) {
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
        this.documentallocationService.DeleteDocumentAllocation(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.DocumentAllocationList();
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
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
  }
}
