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
import { RegionModel } from "../../shared/model/RegionModel";
import { RegionMasterService } from "../../shared/service-proxy/regionMasterService";
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-region-master',
    templateUrl: './region-master.component.html',
    styleUrls: ['./region-master.component.scss']
})
export class RegionMasterComponent {
    @ViewChild('template') template: TemplateRef<any>;
    RegionMasterForm: FormGroup;
    RM: RegionModel;
    cities: CityModel[] = [];
    AllCities: CityModel[] = [];
    dataTable: any;
    Title: string;
    States: StateModel[] = [];
    Regions: RegionModel[] = [];
    modalRef: BsModalRef;
    config: ModalOptions = {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg'
    };

    constructor(private fb: FormBuilder,
        private service: CityMasterService,
        private changeDetectorRef: ChangeDetectorRef,
        private stateService: StateMasterService,
        private regionService: RegionMasterService,
        private modalService: BsModalService) { }

    ngOnInit() {
        this.LoadForm();
        this.allStates();
        this.citiesList();
        this.getRegions();
    }
    allStates() {
        this.stateService.GetStates().subscribe((res: StateModel[]) => {
            this.States = res;
        });
    }
    citiesList() {
        this.service.GetCities().subscribe((res: CityModel[]) => {
            this.AllCities = res;
        });
    }
    getRegions() {
        this.regionService.GetRegions().subscribe((res: RegionModel[]) => {
            this.Regions = res;
            this.changeDetectorRef.detectChanges();
            const table: any = $('table');
            this.dataTable = table.DataTable();
        });
    }

    LoadForm() {
        this.Title = "Add New Region";
        this.RegionMasterForm = this.fb.group({
            regionCode: [''],
            regionName: [''],
            address: [''],
            cityId: ['0'],
            pincode: [''],
            stateId: ['0'],
            phoneNo: [''],
            mobileNo: [''],
            emailId: [''],
            cashBalanceLimit: [''],
            bankBalanceLimit: [''],
            defaultCashLedger: [''],
            defaultBankLegder: [''],
            id: [''],
        });
    }

    SaveDetail(Data: CityModel) {
     
        let obj = Object.assign({}, this.RM, this.RegionMasterForm.value);
        this.regionService.SaveRegion(obj).subscribe((response: boolean) => {
            this.Destroy();
            if (response) {
                Swal({
                    position: 'center',
                    type: 'success',
                    title: 'Region has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            this.getRegions();
        });
    }

    ShowPopUp() {
        this.modalRef = this.modalService.show(this.template, this.config);
    }

    HidePopUp(){
        this.LoadForm();
        this.modalRef.hide();
    }

    ShowData(data: number) {
        this.Title = "Edit Region";
        this.allStates();
        this.citiesList();
        this.cities = this.AllCities;
        this.regionService.GetRegion(data).subscribe((res: RegionModel) => {
            this.RegionMasterForm.patchValue({
                id: res.id,
                regionCode: res.regionCode,
                regionName: res.regionName,
                address: res.address,
                cityId: res.cityId,
                pincode: res.pincode,
                stateId: res.stateId,
                phoneNo: res.phoneNo,
                mobileNo: res.mobileNo,
                emailId: res.emailId,
                cashBalanceLimit: res.cashBalanceLimit,
                bankBalanceLimit: res.bankBalanceLimit,
                defaultCashLedger: res.defaultCashLedger,
                defaultBankLegder: res.defaultBankLegder
            });
            this.ShowPopUp();
        });
    }
    DeleteRegion(id: number) {
        if (confirm('Really want to delete this?')) {
            this.regionService.DeleteRegion(id)
                .subscribe((response: boolean) => {
                    this.Destroy();
                    if (response) {
                        Swal({
                            position: 'center',
                            type: 'success',
                            title: 'Region Deleted!',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                    this.getRegions();
                });
        }
    }
    Destroy() {
        const table: any = $('table');
        table.DataTable();
        table.DataTable().destroy();
    }

    onChange(data) {
        console.log(data);
        this.cities = this.AllCities.filter(x => x.stateId == parseInt(data));
    }
}