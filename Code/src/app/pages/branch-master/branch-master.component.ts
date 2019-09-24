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
import { BranchModel } from "../../shared/model/BranchModel";
import { BranchMasterService } from "../../shared/service-proxy/branchMasterService";
import { CityMasterService } from "../../shared/service-proxy/cityMasterService";
import { CityModel } from "../../shared/model/CityModel";

const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-raised shadow-z-2 btn-success',
    cancelButtonClass: 'btn btn-raised shadow-z-2 btn-danger',
    buttonsStyling: true,
    customClass: "mycustomBTNclass"
});


@Component({
    selector: 'app-branch-master',
    templateUrl: './branch-master.component.html',
    styleUrls: ['./branch-master.component.scss']
})
export class BranchMasterComponent {
    @ViewChild('template') template: TemplateRef<any>;
    BranchMasterForm: FormGroup;
    BM: BranchModel;
    rows: any[];
    dataTable: any;
    Title: string;
    AllCities: CityModel[] = [];
    modalRef: BsModalRef;
    config: ModalOptions = {
        backdrop: true,
        ignoreBackdropClick: true,
        class: "modal-lg"
    };
    cities: CityModel[] = [];
    states: StateModel[] = [];
    DeliveryCheckboxes = [];
    ServicesCheckboxes = [];

    ChangedDelivCHeckboxes = [];
    ChangedServCHeckboxes = [];

    constructor(private fb: FormBuilder,
        private service: StateMasterService,
        private changeDetectorRef: ChangeDetectorRef,
        private modalService: BsModalService,
        private branchService: BranchMasterService,
        private cityService: CityMasterService) { }

    ngOnInit() {
        this.LoadForm();
        this.BranchList();
        // this.LoadCheckBoxes();
        // this.ServicesBoxes();
        this.CitiesList();
        this.StatesList();
    }

    LoadCheckBoxes() {
        this.DeliveryCheckboxes = [{
            id: 1,
            Name: "CC",
            Selected: false
        }, {
            id: 2,
            Name: "DACC Cancelled",
            Selected: false
        }, {
            id: 3,
            Name: "COD",
            Selected: false
        }, {
            id: 4,
            Name: "Agent Letter",
            Selected: false
        }];
    }

    ServicesBoxes() {
        this.ServicesCheckboxes = [
            {
                id: 1,
                Name: "Booking Allowed?",
                Selected: false
            },
            {
                id: 2,
                Name: "Delivery Allowed?",
                Selected: false
            },
            {
                id: 3,
                Name: "Crossing Branch?",
                Selected: false
            },
            {
                id: 4,
                Name: "Delivery Without MR?",
                Selected: false
            },
            {
                id: 5,
                Name: "Computerized Branch?",
                Selected: false
            }
        ];
    }

    BranchList() {
        this.branchService.GetBranches().subscribe((res: BranchModel[]) => {
            this.rows = res;
            this.changeDetectorRef.detectChanges();
            const table: any = $('table');
            this.dataTable = table.DataTable();
        });
    }

    LoadForm() {
        this.Title = "Add New Branch";
        this.BranchMasterForm = this.fb.group({
            id: [''],
            branchCode: [''],
            branchName: [''],
            branchType: [''],
            deliveryAgainstAs: [''],
            cityId: ['0'],
            pincode: [''],
            stateId: ['0'],
            gstNo: [''],
            phoneNo: [''],
            mobileNo: [''],
            regionId: [''],
            areaId: ['0'],
            servicesOffered: [''],
            cn: [''],
            mr: [''],
            challan: [''],
            freightBill: [''],
            expectedUnderLoad: [''],
            expectedUnloadingAfterArrival: [''],
            maxAdvance: [''],
            defaultCashLedger: [''],
            defaultBankLedger: [''],
            remark: ['']
        });
        this.ServicesBoxes();
        this.LoadCheckBoxes();
    }

    SaveDetail(Data: StateModel) {
        debugger
        let obj = Object.assign({}, this.BM, this.BranchMasterForm.value, {
            servicesOffered: this.ChangedServCHeckboxes.join(","),
            deliveryAgainstAs: this.ChangedDelivCHeckboxes.join(",")
        });
        if (this.BranchMasterForm.dirty) {
            this.branchService.SaveBranch(obj).subscribe((response: boolean) => {
                this.HidePopUp();
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
                this.BranchList();
            });
        }
    }

    ShowPopUp() {
        this.modalRef = this.modalService.show(this.template, this.config);
    }
    HidePopUp() {
        this.modalRef.hide();
        this.BranchMasterForm.reset();
        this.ServicesBoxes();
        this.LoadCheckBoxes();
    }

    ShowData(data: number) {
        this.Title = "Edit Branch";
        this.cities = this.AllCities;
        this.branchService.GetBranch(data).subscribe((res: BranchModel) => {
            this.BranchMasterForm.patchValue({
                id: res.id,
                branchCode: res.branchCode,
                branchName: res.branchName,
                branchType: res.branchType,
                cityId: res.cityId,
                pincode: res.pincode,
                stateId: res.stateId,
                gstNo: res.gstNo,
                phoneNo: res.phoneNo,
                mobileNo: res.mobileNo,
                regionId: res.regionId,
                areaId: res.areaId,
                cn: res.cn,
                mr: res.mr,
                challan: res.challan,
                freightBill: res.freightBill,
                expectedUnderLoad: res.expectedUnderLoad,
                expectedUnloadingAfterArrival: res.expectedUnloadingAfterArrival,
                maxAdvance: res.maxAdvance,
                defaultCashLedger: res.defaultCashLedger,
                defaultBankLedger: res.defaultBankLedger,
                remark: res.remark
            });
            this.EditCheckboxes(res.servicesOffered, res.deliveryAgainstAs);
            this.ShowPopUp();
        });
    }


    EditCheckboxes(Serviceboxes, deliveryboxes) {
       
        var Sboxes = Serviceboxes.split(",");
        for (var i = 0; i < Sboxes.length; i++) {
            var id = parseInt(Sboxes[i]);
            this.ServicesCheckboxes.map((x) => { if (x.id == id) { x.Selected = true; } })
        }
        var DBoxes = deliveryboxes.split(',');
        for (var i = 0; i < DBoxes.length; i++) {
            var id = parseInt(DBoxes[i]);
            this.DeliveryCheckboxes.map((x) => { if (x.id == id) { x.Selected = true; } });
        }
    }

    DeleteBranch(id: number) {
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
                this.branchService.DeleteBranch(id)
                    .subscribe(() => {
                        this.Destroy();
                        this.BranchList();
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
    }
    Destroy() {
        const table: any = $('table');
        table.DataTable();
        table.DataTable().destroy();
    }
    onServiceCheckboxChange(id, event) {
        debugger
        if (event.currentTarget.checked == false) {
            this.ChangedServCHeckboxes = this.ChangedServCHeckboxes.filter(function (index) {
                return (index != id.id);
            });
        }
        else {
            this.ChangedServCHeckboxes.push(id.id);
        }
    }
    onCheckboxChange(id, event) {
        if (event.currentTarget.checked == false) {
            this.ChangedDelivCHeckboxes = this.ChangedDelivCHeckboxes.filter(function (index) {
                return (index != id.id);
            });
        }
        else {
            this.ChangedDelivCHeckboxes.push(id.id);
            console.log(this.ChangedDelivCHeckboxes.join(","));
        }
    }

    CitiesList() {
        this.cityService.GetCities().subscribe((res: CityModel[]) => {
            this.AllCities = res;
        });
    }
    StatesList() {
        this.service.GetStates().subscribe((res: StateModel[]) => {
            this.states = res;
        });
    }
    onChange(data) {
        this.cities = this.AllCities.filter(x => x.stateId == parseInt(data));
    }
    public Validator(event: any) {
        const pattern = /^[0-9]*$/;
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
        }
    }
    
}