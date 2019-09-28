import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../SessionHandler/auth-gard.service';
//Route for content layout with sidebar, navbar and footer

export const Full_ROUTES: Routes = [

  // {
  //   path: 'full-pages',
  //   loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule',
  //   canActivate: [AuthGuardService]
  // },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'statemaster',

    loadChildren: './pages/state-master/state-master.module#StateMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'citymaster',
    loadChildren: './pages/city-master/city-master.module#CityMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'regionmaster',
    loadChildren: './pages/region-master/region-master.module#RegionMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'branchmaster',
    loadChildren: './pages/branch-master/branch-master.module#BranchMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'godownmaster',
    loadChildren: './pages/godown-master/godown-master.module#GodownMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'virtualgodownmaster',
    loadChildren: './pages/virtual-godown-master/virtual-godown-master.module#VirtualGodownMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'regularclientmaster',
    loadChildren: './pages/regular-client-master/regular-client-master.module#RegularClientMasterModule',
    canActivate: [AuthGuardService]
  },

  {
    path: 'rtomaster',
    loadChildren: './pages/rto-master/rto-master.module#RtoMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'areamaster',
    loadChildren: './pages/area-master/area-master.module#AreaMasterModule'
  },
  {
    path: 'goddownownerdetailmaster',
    loadChildren: './pages/goddown-owner-details-master/godown-owner-detail-master.module#GodownOwnerDetailMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'bankmasterdetails',
    loadChildren: './pages/bank-master-details/bank-master.module#BankMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'branchratemaster',
    loadChildren: './pages/branch-rate-master/branch-rate-master.module#BranchRateMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'freightmaster',
    loadChildren: './pages/freight-master/freight-master.module#freightMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'crossingmaster',
    loadChildren: './pages/crossing-master/crossing-master.module#CrossingMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'servicelocationmaster',
    loadChildren: './pages/service-location-master/Service-Location-master.module#ServiceLocationMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'contractmaster',
    loadChildren: './pages/contract-master/contract-master.module#ContractMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'walkinclientmaster',
    loadChildren: './pages/walk-in-client-master/walk-in-client-master.module#WalkInClientMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'CommodityTypeMaster',
    loadChildren: './pages/commodity-type-master/commodity-type-master.module#CommodityTypeMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'CommodityMaster',
    loadChildren: './pages/commodity-master/commodity-master.module#CommodityMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'PackingTypeMaster',
    loadChildren: './pages/packing-type-master/packing-type-master.module#PackingTypeMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'DepartmentMaster',
    loadChildren: './pages/department-master/department-master.module#DepartmentMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'LateReportReasonMaster',
    loadChildren: './pages/late-report-reason-master/late-report-reason-master.module#LateReportReasonMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'VendorTypeMaster',
    loadChildren: './pages/vendor-type-master/vendor-type-master.module#VendorTypeMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'VendorMaster',
    loadChildren: './pages/vendor-master/vendor-master.module#VendorMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'VehicleTypeMaster',
    loadChildren: './pages/vehicle-type-master/vehicle-type-master.module#VehicleTypeMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'VehicleModelMaster',
    loadChildren: './pages/vehicle-model-master/vehicle-model-master.module#VehicleModelMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'VehicleMaster',
    loadChildren: './pages/vehicle-master/vehicle-master.module#VehicleMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'LocalVehicleContractMaster',
    loadChildren: './pages/local-vehicle-contract-master/local-vehicle-contract-master.module#LocalVehicleContractMasteModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'StandardLorryHireMaster',
    loadChildren: './pages/standard-lorry-hire-master/standard-lorry-hire-master.module#StandardLorryHireMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'DriverMaster',
    loadChildren: './pages/driver-master/driver-master.module#DriverMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'registration',
    loadChildren: './pages/registration/registration.module#RegistrationModule',
    canActivate: [AuthGuardService]
  },

  // {
  //   path: 'documentallocations',
  //   loadChildren: './pages/document-allocations-master/document-alloctions-master.module#DocumentAllocationsMasterModule',
  //   canActivate: [AuthGuardService]
  // },
  {
    path: 'seriesgeneration',
    loadChildren: './pages/series-generation-operation/series-generation-operation.module#SeriesGenerationOperationModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'printingstationary',
    loadChildren: './pages/printing-stationary-operation/printing-stationary-operation.module#PrintingStationaryOperationModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'documentseriesallocation',
    loadChildren: './pages/document-series-allocation-operation/document-series-alloction-master.module#DocumentSeriesAllocationOperationModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'bookingmaster',
    loadChildren: './pages/booking-master/booking-master.module#BookingMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'consignmentoperation',
    loadChildren: './pages/consignment-operation/consignment-operation.module#ConsignmentOperationModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'reserveoperation',
    loadChildren: './pages/reserve-operation/reserve-operation.module#ReserveOperationModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'uploadpackingslip',
    loadChildren: './pages/upload-packing-slip-operation/upload-packing-slip-operation.module#UploadPackingSlipOperationModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'outward',
    loadChildren: './pages/outward-master/outward-master.module#OutwardMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'inward',
    loadChildren: './pages/inward-master/inward-master.module#InwardMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'truckarrival',
    loadChildren: './pages/truck-arrival/truck-arrival.module#TruckArrivalModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'truckunloading',
    loadChildren: './pages/truck-unloading/truck-unloading.module#TruckUnloadingModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'delivery',
    loadChildren: './pages/delivery-master/delivery-master.module#DeliveryMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'godowndelivery',
    loadChildren: './pages/godown-delivery/godown-delivery.module#GodownDeliveryModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'predelivery',
    loadChildren: './pages/pre-delivery/pre-delivery.module#PreDeliveryModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'ddlocalchallan',
    loadChildren: './pages/dd-local-challan/dd-local-challan.module#DdLocalChallanModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'doordeliveryconfirm',
    loadChildren: './pages/door-delivery-confirm/door-delivery-confirm.module#DoorDeliveryConfirmModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'bill',
    loadChildren: './pages/bill/bill.module#BillModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'receipt',
    loadChildren: './pages/receipt-master/receipt-master.module#ReceiptMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'account',
    loadChildren: './pages/account-master/account-master.module#AccountMasterModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'ledgergroup',
    loadChildren: './pages/ledger-group/ledger-group.module#LedgerGroupModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'ledger',
    loadChildren: './pages/ledger/ledger.module#LedgerModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'costcentre',
    loadChildren: './pages/cost-centre/cost-centre.module#CostCentreModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'requirement',
    loadChildren: './pages/accounting-vouchers/accounting-vouchers.module#AccountingVouchersModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'payment',
    loadChildren: './pages/payment/payment.module#PaymentModule',
    canActivate: [AuthGuardService]
  },
];