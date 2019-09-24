import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
import { CityModel } from "../../shared/model/CityModel";
import { CityMasterService } from "../../shared/service-proxy/cityMasterService";
import { StateMasterService } from "../../shared/service-proxy/stateMasterService";
import { StateModel } from "../../shared/model/StateModel";
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
    cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
    buttonsStyling: true,
    customClass: "mycustomBTNclass"
});

@Component({
    selector: 'app-city-master',
    templateUrl: './city-master.component.html',
    styleUrls: ['./city-master.component.scss']
})
export class CityMasterComponent {
    @ViewChild('template') template: TemplateRef<any>;
    cityMasterForm: FormGroup;
    CM: CityModel;
    rows: any[];
    dataTable: any;
    Title: string;
    States: StateModel[] = [];
    modalRef: BsModalRef;
    config: ModalOptions = {
        backdrop: true,
        ignoreBackdropClick: true,
    };

    constructor(private fb: FormBuilder,
        private service: CityMasterService,
        private changeDetectorRef: ChangeDetectorRef,
        private stateService: StateMasterService,
        private modalService: BsModalService) { }

    ngOnInit() {
        this.LoadForm();
        this.citiesList();
        this.allStates();
    }

    allStates() {
        this.stateService.GetStates().subscribe((res: StateModel[]) => {
            this.States = [];
            this.States = res;
        });
    }

    citiesList() {
        this.service.GetCities().subscribe((res: CityModel[]) => {
            this.rows = res;
            this.changeDetectorRef.detectChanges();
            const table: any = $('table');
            this.dataTable = table.DataTable();
        });
    }

    LoadForm() {
        this.Title = "Add New City";
        this.cityMasterForm = this.fb.group({
            CityCode: [''],
            CityName: [''],
            StateId: ['0'],
            Remark: [''],
            id: ['']
        });
    }

    SaveDetail(Data: CityModel) {
        let obj = Object.assign({}, this.CM, this.cityMasterForm.value);
        this.service.SaveCity(obj).subscribe((response: boolean) => {
            this.Destroy();
            if (response) {
                Swal({
                    position: 'center',
                    type: 'success',
                    title: 'City has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            this.hidepopup();
            this.citiesList();
        });
    }

    ShowPopUp() {
        this.modalRef = this.modalService.show(this.template, this.config);
    }

    hidepopup() {
        this.modalRef.hide();
        this.LoadForm();
    }

    ShowData(data: number) {
        this.Title = "Edit City";
        this.allStates();
        this.service.GetCity(data).subscribe((res: CityModel) => {
            this.cityMasterForm.patchValue({
                CityCode: res.cityCode,
                CityName: res.cityName,
                StateId: res.stateId,
                Remark: res.remark,
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
                this.service.DeleteCity(id)
                    .subscribe((response: boolean) => {
                        this.Destroy();
                        this.citiesList();
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
        // if (confirm('Really want to delete this?')) {
        //     this.service.DeleteCity(id)
        //         .subscribe((response: boolean) => {
        //             this.Destroy();
        //             if (response) {
        //                 Swal({
        //                     position: 'center',
        //                     type: 'success',
        //                     title: 'City Deleted!',
        //                     showConfirmButton: false,
        //                     timer: 1000
        //                 });
        //             }
        //             this.citiesList();
        //         });
        // }
    }

    Destroy() {
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