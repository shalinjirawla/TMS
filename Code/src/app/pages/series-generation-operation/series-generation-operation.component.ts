import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SeriesGenerationModel } from '../../shared/model/SeriesGenerationModel';
import { SeriesGenerationOperationService } from '../../shared/service-proxy/seriesgenerationOperationService';

import { DatePipe } from '@angular/common';
import { serviceLocationModel } from 'app/shared/model/ServiceLocationModel';

const swalWithBootstrapButtons = Swal.mixin({
  confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
  cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
  buttonsStyling: true,
  customClass: "mycustomBTNclass",
});

@Component({
  selector: 'app-series-generation-operation',
  templateUrl: './series-generation-operation.component.html',
  styleUrls: ['./series-generation-operation.component.scss']
})
export class SeriesGenerationOperationComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;
  SeriesGenerationOperationForm: FormGroup;

  modalRef: BsModalRef;

  DocumentTypeCheckBox: any[];
  rows: any;
  hk: any;

  Title: string;
  answer: any;
  StartSeriesNo: number;
  EndSeriesNo: number;
  TotalAmount: number;
  series:any[];

  StartSeriesNo1: number;
  EndSeriesNo1: number;
  TotalAmount1: number;

  dataTable: any;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private seriesgenerationService: SeriesGenerationOperationService,
    private datepipe: DatePipe,
    private changedetecoryRef: ChangeDetectorRef,
  ) { }

  config: ModalOptions = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };

  ngOnInit() {
    this.FormLoad();
    this.SeriesGenerationList();
  }

  ShowPopUp() {
    debugger
    this.modalRef = this.modalService.show(this.template, this.config);
    this.OnchengeLoad();
  }

  hidepopup() {
    this.modalRef.hide();
    this.FormLoad();
  }

  FormLoad() {
    this.Title = "Add Series Generation"
    this.SeriesGenerationOperationForm = this.fb.group({
      id: [0],
      generationdate: [''],
      documenttype: [''],
      startseriesNo: [''],
      endseriesNo: [''],
      count: [''],
    })
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
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo)
  }

  onBlurMethods(values: number) {
    this.EndSeriesNo = values;
    this.CalculateAmount(this.StartSeriesNo, this.EndSeriesNo)
  }

  CalculateAmount(startseriesNoValues: any, EndSeriesNoValues: any) {
    debugger
    if (startseriesNoValues != null && startseriesNoValues != undefined) {
      this.TotalAmount = parseInt(EndSeriesNoValues) - parseInt(startseriesNoValues);
      this.SeriesGenerationOperationForm.patchValue({
        count: this.TotalAmount,
      })
    }
  }


  OnchengeLoad() {
    debugger
     this.seriesgenerationService.OnSeriesNo().subscribe((res:any)=>{
        this.series=res;
     })
     this.SeriesGenerationOperationForm.patchValue({
      startseriesNo: this.series,
    })
  }

  SeriesGenerationList() {
    this.seriesgenerationService.GetSeriesGenerationModels().subscribe((res: SeriesGenerationModel[]) => {
      this.rows = res;

      this.changedetecoryRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

  SaveDetail() {
    debugger
    if (this.SeriesGenerationOperationForm.valid) {
      let validation: boolean = false;
      let obj = Object.assign({}, this.hk, this.SeriesGenerationOperationForm.value);
      validation = true;
      if (validation) {
        this.seriesgenerationService.SaveSeriesGeneration(obj).subscribe((response: boolean) => {
          if (response) {
            Swal({
              position: 'center',
              type: 'success',
              title: 'Series Generation has been saved',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.SeriesGenerationList();
          this.hidepopup();
          // this.Destroy();
        });
      }
    }
  }

  ShowData(data: number) {
    debugger
    this.Title = "Edit New Document Allocation"
    this.seriesgenerationService.GetSeriesGenerationModel(data).subscribe((res: SeriesGenerationModel) => {
      var date1 = this.datepipe.transform(res.generationdate, 'yyyy-MM-dd');
      this.SeriesGenerationOperationForm.patchValue({
        id: res.id,
        generationdate: date1,
        documenttype: res.documenttype,
        startseriesNo: res.startseriesNo,
        endseriesNo: res.endseriesNo,
        count: res.count,
      });
      this.ShowPopUp();
    });
  }

  DeleteGeneration(id: number) {
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
        this.seriesgenerationService.DeleteSeriesGeneration(id)
          .subscribe((Response: boolean) => {
            //this.destroy();
            this.SeriesGenerationList();
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
