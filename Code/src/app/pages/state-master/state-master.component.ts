import { Component, ChangeDetectorRef, TemplateRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { StateModel } from "../../shared/model/StateModel";
import { StateMasterService } from "../../shared/service-proxy/stateMasterService";
import Swal from 'sweetalert2';
import 'datatables.net';
import 'datatables.net-bs4';
import * as $ from 'jquery';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
    cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
    buttonsStyling: true,
    customClass: "mycustomBTNclass"
  });

@Component({
    selector: 'app-state-master',
    templateUrl: './state-master.component.html',
    styleUrls: ['./state-master.component.scss']
})
export class StateMasterComponent {
    @ViewChild('template') template : TemplateRef<any>;
    StateMasterForm: FormGroup;
    SM: StateModel;
    rows: any[];
    dataTable: any;
    Title: string;
    modalRef: BsModalRef;    
    config:ModalOptions = {
        backdrop: true,
        ignoreBackdropClick: true,
      };

    constructor(private fb: FormBuilder,
        private service: StateMasterService,
        private changeDetectorRef: ChangeDetectorRef,
        private modalService : BsModalService) { }

    ngOnInit() {
        this.LoadForm();
        this.StatesList();
    }

    StatesList() {
        this.service.GetStates().subscribe((res: StateModel[]) => {
            this.rows = res;
            this.changeDetectorRef.detectChanges();
            const table: any = $('table');
            this.dataTable = table.DataTable();
        });
    }

    LoadForm() {
        this.Title = "Add New State";
        this.StateMasterForm = this.fb.group({
            GstCode: [''],
            StateName: [''],
            StateRtoCode: [''],
            Remark: [''],
            id: [0]
        });
    }

    SaveDetail(Data: StateModel) {
        let obj = Object.assign({}, this.SM, this.StateMasterForm.value);
        this.service.SaveStates(obj).subscribe((response: boolean) => {
            this.Destroy();
            if (response) {
                Swal({
                    position: 'center',
                    type: 'success',
                    title: 'State has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            this.modalRef.hide();
            this.StatesList();
        });
    }

    ShowPopUp() {
        this.modalRef = this.modalService.show(this.template,this.config);
    }

    HidePopUp(){
        this.modalRef.hide();
        this. LoadForm();
    }
    
    ShowData(data: number) {
        this.Title = "Edit State";
        this.service.getState(data).subscribe((res: StateModel) => {
            this.StateMasterForm.patchValue({
                GstCode: res.GSTCode,
                StateName: res.StateName,
                StateRtoCode: res.StateRtoCode,
                Remark: res.Remark,
                id: res.id
            });
           this.ShowPopUp();
        });
    }

    DeleteState(id: number) {
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
                this.service.DeleteState(id)
                .subscribe(() => {
                    this.Destroy();
                    this.StatesList();
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
          })

        // if (confirm('Really want to delete this?')) {
        //     this.service.DeleteState(id)
        //         .subscribe(() => {
        //             this.Destroy();
        //             this.StatesList();
        //         });
        // }
    }

    Destroy(){
        debugger
        const table: any = $('table');
        table.DataTable();
        table.DataTable().destroy();
    }
    
    public Validator(event: any) {
        const pattern = /^[0-9]*$/;
        if (!pattern.test(event.target.value)) {
          event.target.value = event.target.value.replace(/[^0-9]/g, "");
        }
      }
}