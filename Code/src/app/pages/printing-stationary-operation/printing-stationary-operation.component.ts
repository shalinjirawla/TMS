import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PrintingStationaryModel } from '../../shared/model/PrintingStationaryModel';
import { PrintingStationaryOperationService } from '../../shared/service-proxy/printingstationaryOperationService';


import { DatePipe } from '@angular/common';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-printing-stationary-operation',
  templateUrl: './printing-stationary-operation.component.html',
  styleUrls: ['./printing-stationary-operation.component.scss']
})
export class PrintingStationaryOperationComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;
  modalRef: BsModalRef;
  printingStationaryOperationForm: FormGroup;

  Title: string;

  DocumentTypeCheckBox: any[];

  rows: any;
  hk: any;

  StartSeriesNo: number;
  EndSeriesNo: number;
  TotalAmount: number;
  answer: any;
  series: any[];

  dataTable: any;

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private printingstationaryService: PrintingStationaryOperationService,
    private datepipe: DatePipe,
    private changedetecoryRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.LoadForm();
    this.PrintingStationaryList();
  }

  ShowPopUp() {
    this.modalRef = this.modalService.show(this.template, this.config);
    this.OnchengeLoad();
  }

  hidepopup() {
    this.modalRef.hide();
    this.LoadForm();
  }

  LoadForm() {
    this.Title = "Add Printing Stationary";
    this.printingStationaryOperationForm = this.fb.group({
      id: [0],
      dateofprinting: [''],
      documenttype: [''],
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

  onBlurMethod(values: number) {
    this.StartSeriesNo = values;
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo);
  }

  onBlurMethods(values: number) {
    this.EndSeriesNo = values;
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo);
  }

  CalculateAmount(startseriesNoValues: any, EndSeriesNoValues: any) {
    if (startseriesNoValues != null && startseriesNoValues != undefined) {
      this.TotalAmount = parseInt(EndSeriesNoValues) - parseInt(startseriesNoValues);
      this.printingStationaryOperationForm.patchValue({
        count: this.TotalAmount,
      })
    }
  }

  PrintingStationaryList() {
    this.printingstationaryService.GetPrintingStationaryModels().subscribe((res: PrintingStationaryModel[]) => {
      this.rows = res;

      this.changedetecoryRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  OnchengeLoad() {
    debugger
    this.printingstationaryService.OnSeriesNo().subscribe((res: any) => {
      this.series = res;
    })
    this.printingStationaryOperationForm.patchValue({
      startseriesNo: this.series,
    })
  }

  SaveDetail() {
    debugger
    if (this.printingStationaryOperationForm.value) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.printingStationaryOperationForm.value);
      validation = true;
      if (validation) {
        this.printingstationaryService.SavePrintingStationary(obj).subscribe((Response: Boolean) => {
          if (Response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Series Generation has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.hidepopup();
          this.PrintingStationaryList();
        });
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit New Document Allocation"
    this.printingstationaryService.GetPrintingStationaryModel(data).subscribe((res: PrintingStationaryModel) => {
      var date1 = this.datepipe.transform(res.dateofprinting, 'yyyy-MM-dd');
      this.printingStationaryOperationForm.patchValue({
        id: res.id,
        dateofprinting: date1,
        documenttype: res.documenttype,
        startseriesNo: res.startseriesNo,
        endseriesNo: res.endseriesNo,
        count: res.count,
      });
      this.ShowPopUp();
    });
  }

  DeleteStationary(id: number) {
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
        this.printingstationaryService.DeletePrintingStationary(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.PrintingStationaryList();
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
