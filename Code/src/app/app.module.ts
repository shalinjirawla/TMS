import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { StateMasterService } from './shared/service-proxy/stateMasterService';
import { CityMasterService } from './shared/service-proxy/cityMasterService';
import { RegionMasterService } from './shared/service-proxy/regionMasterService';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BranchMasterService } from './shared/service-proxy/branchMasterService';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GodownMasterService } from './shared/service-proxy/godownMasterService';
import { VirtualGodownMasterService } from './shared/service-proxy/virtualGodownMasterService';
import { RegularClientMasterService } from './shared/service-proxy/regularClientMasterService';
import { BookingMasterService } from './shared/service-proxy/bookingMasterService';
import { } from './shared/service-proxy/bank-master-service.service';
import { DatePipe } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PackingMasterServiceService } from './shared/service-proxy/packing-master-service.service';
import { RtoMasterComponent } from './pages/rto-master/rto-master.component';
import { RtoMasterModule } from './pages/rto-master/rto-master.module';
import { RtoMasterRoutingModule } from './pages/rto-master/rto-master-routing.module'; import { RtoServiceService } from './shared/service-proxy/rto-service.service';
import { AreaMasterService } from './shared/service-proxy/area-master.service';
import { GodownOwnerDetailMasterModule } from './pages/goddown-owner-details-master/godown-owner-detail-master.module';
import { GodownOwnerDetailMasterRoutingModule } from './pages/goddown-owner-details-master/godown-owner-detail-master-routing.module';
import { GoddownOwnerDetailService } from './shared/service-proxy/goddown-owner-detail.service';
import { BankMasterServiceService } from './shared/service-proxy/bank-master-service.service';
import { BranchRateMasterService } from './shared/service-proxy/branch-rate-master.service';
import { BankMasterModule } from './pages/bank-master-details/bank-master.module';
import { BranchRateMasterComponent } from './pages/branch-rate-master/branch-rate-master.component';
import { BranchRateMasterModule } from './pages/branch-rate-master/branch-rate-master.module';
import { LoginMasterComponent } from './pages/login-master/login-master.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginServicesService } from './shared/service-proxy/login-services.service';
import { FullLayoutPageComponent } from './pages/full-layout-page/full-layout-page.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RegistrationService } from 'app/shared/service-proxy/registrationService.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { freightMasterService } from './shared/service-proxy/FreightMasterService';
import { crossingMasterService } from './shared/service-proxy/CrossingMasterService';
import { ServiceLocationMaster } from './shared/service-proxy/Service-Location-Master.Service';
import { ContractMasterService } from './shared/service-proxy/contractmasterservice';
import { WalkInClientMasterService } from './shared/service-proxy/walkinclientMasterService';
import { CommodityTypemasterService } from './shared/service-proxy/commoditytypemasterService';
import { CommoditymasterService } from './shared/service-proxy/commodityMasterService';
import { PackingTypemasterService } from './shared/service-proxy/packingtypeMasterService';
import { DepartmentmasterService } from './shared/service-proxy/departmentMasterService';
import { LateReportReasonMasterService } from './shared/service-proxy/LateReportReasonMasterService';
import { VendorTypeMasterService } from './shared/service-proxy/vendortypeMasterService';
import { VendorMasterService } from './shared/service-proxy/vendorMasterService';
import { VehiclemodelMasterService } from './shared/service-proxy/vehiclemodelMasterService';
import { VehicleTypeMasterService } from './shared/service-proxy/vehicletypeMasterService';
import { VehicleMasterService } from './shared/service-proxy/vehicleMasterService';
import { LocalVelicleContractMasterService } from './shared/service-proxy/localvehiclecontractMasterService';
import { StandardLorryHireService } from './shared/service-proxy/standardlorryhireMasterService';
import { DriverMasterService } from './shared/service-proxy/driverMasterService';
import { DocumentAllocationMasterService } from './shared/service-proxy/documentallocationMasterService';
import { OutwardMasterService } from './shared/service-proxy/outwardMasterService';
import { InwardMasterService } from './shared/service-proxy/inward-master.service';
import { DeliveryMasterService } from './shared/service-proxy/deliverymasterservice';
import { ReceiptMasterService } from './shared/service-proxy/receiptMasterService';
import { AccountMasterService } from './shared/service-proxy/accountMasterService';
import { SeriesGenerationOperationService } from './shared/service-proxy/seriesgenerationOperationService';
import { PrintingStationaryOperationService } from './shared/service-proxy/printingstationaryOperationService';
import { DocumentSeriesAllocationOperationService } from './shared/service-proxy/documentseriesallocationOperationService';
import { ConsignmentOperationService } from './shared/service-proxy/consignmentOperationService';
import { ReserveOperationService } from './shared/service-proxy/reserveoperationService';
import { UploadPackingSlipService } from './shared/service-proxy/uploadpackingslipService';
import { TruckArrivalService } from './shared/service-proxy/truckarrivalService';
import { TruckUnloadingService } from './shared/service-proxy/truckunloadingService';
import { GodownDeliveryService } from './shared/service-proxy/godowndeliveryService';
import { PreDeliveryService } from './shared/service-proxy/predeliveryService';
import { DDLocalChallanService } from './shared/service-proxy/ddlocalchallanService';
import { DoorDeliveryConfirmService } from './shared/service-proxy/doordeliveryconfirmService';
import { BillService } from './shared/service-proxy/billService';
import { LedgerGroupService } from './shared/service-proxy/ledgergroupService';
import { LedgerService } from './shared/service-proxy/ledgerService';
import { CostCentreService } from './shared/service-proxy/costcentreService';
import {AccountingVouchersService} from './shared/service-proxy/accountingvouchersService';

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        LoginMasterComponent,
        // AccountingVouchersComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        NgMultiSelectDropDownModule.forRoot(),
        SharedModule,
        NgbModule.forRoot(),
        HttpClientModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        ReactiveFormsModule,

    ],

    providers: [StateMasterService, CityMasterService
        , RegionMasterService, BranchMasterService,
        GodownMasterService, VirtualGodownMasterService,
        RegularClientMasterService, BookingMasterService, DatePipe, PackingMasterServiceService, RtoServiceService, AreaMasterService, GoddownOwnerDetailService, BankMasterServiceService, BranchRateMasterService, LoginServicesService, RegistrationComponent, RegistrationService, DashboardComponent, freightMasterService, crossingMasterService, ServiceLocationMaster, ContractMasterService, WalkInClientMasterService, CommodityTypemasterService, CommoditymasterService, PackingTypemasterService, DepartmentmasterService, LateReportReasonMasterService, VendorTypeMasterService, VendorMasterService, VehiclemodelMasterService, VehicleTypeMasterService, VehicleMasterService, LocalVelicleContractMasterService, StandardLorryHireService, DriverMasterService, DocumentAllocationMasterService, OutwardMasterService, InwardMasterService, DeliveryMasterService, ReceiptMasterService, AccountMasterService, SeriesGenerationOperationService, PrintingStationaryOperationService, DocumentSeriesAllocationOperationService, ConsignmentOperationService, ReserveOperationService, UploadPackingSlipService, TruckArrivalService, TruckUnloadingService, GodownDeliveryService, PreDeliveryService, DDLocalChallanService, DoorDeliveryConfirmService, BillService, LedgerGroupService, LedgerService, CostCentreService,AccountingVouchersService],
    bootstrap: [AppComponent]

})
export class AppModule { }