import { RouteInfo } from './sidebar.metadata';

let UserType = localStorage.getItem("Type");

let R: RouteInfo[] = [];

this.R = [
    // {
    //     path: '/full-layout', title: 'Full Layout', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    {
        path: '/home', AccessAllow: true, title: 'Home Page', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/dashboard', AccessAllow: true, title: 'DashBoard', icon: 'ft-airplay', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', AccessAllow: true, title: 'Masters', icon: 'ft-menu', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '/statemaster', title: 'State', icon: 'icon-crop', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/citymaster', title: 'City', icon: 'icon-plane', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/regionmaster', title: 'Region', icon: 'icon-energy', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/branchmaster', title: 'Branch', icon: 'icon-anchor', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/godownmaster', title: 'Godown', icon: 'ft-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/virtualgodownmaster', title: 'Virtual Godown', icon: 'ft-globe', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/regularclientmaster', title: 'Regular Client', icon: 'ft-sliders', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },

            {
                path: '/rtomaster', title: 'RTO', icon: 'ft-move', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/areamaster', title: 'Area', icon: 'ft-pie-chart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/goddownownerdetailmaster', title: 'Godown Owner Detail', badge: '', icon: 'ft-pocket', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/bankmasterdetails', title: 'Bank', badge: '', icon: 'ft-box', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/branchratemaster', title: 'Branch Rate', badge: '', icon: 'ft-command', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/freightmaster', title: 'Freight', badge: '', icon: 'ft-life-buoy', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/crossingmaster', title: 'Crossing', badge: '', icon: 'ft-x', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/servicelocationmaster', title: 'Service Location', badge: '', icon: 'ft-map', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/contractmaster', title: 'Contract', badge: '', icon: 'ft-cloud', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/walkinclientmaster', title: 'Walk-In Client', badge: '', icon: 'ft-user', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/CommodityTypeMaster', title: 'Commodity Type', badge: '', icon: 'ft-shopping-cart', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/CommodityMaster', title: 'Commodity', badge: '', icon: 'ft-shopping-cart', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/PackingTypeMaster', title: 'Packing Type', badge: '', icon: 'ft-package', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/DepartmentMaster', title: 'Department', badge: '', icon: 'ft-cpu', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/LateReportReasonMaster', title: 'Late Report Reason', badge: '', icon: 'ft-file', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/VendorTypeMaster', title: 'Vendor Type', badge: '', icon: 'ft-file', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/VendorMaster', title: 'Vendor', badge: '', icon: 'ft-file', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/VehicleTypeMaster', title: 'Vehicle Type', badge: '', icon: 'ft-cpu', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/VehicleModelMaster', title: 'Vehicle Model', badge: '', icon: 'ft-file', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/VehicleMaster', title: 'Vehicle', badge: '', icon: 'ft-package', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/LocalVehicleContractMaster', title: 'LocalVehicleContract', badge: '', icon: 'ft-cpu', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/StandardLorryHireMaster', title: 'Standard Lorry Hire', badge: '', icon: 'ft-cpu', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/DriverMaster', title: 'Driver Master', badge: '', icon: 'ft-cpu', class: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/registration', title: 'Registration', badge: '', icon: 'ft-user-plus', class: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', AccessAllow: true, title: 'Operations', icon: 'ft-anchor', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Document Allocation', icon: 'icon-crop', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
                submenu: [
                    {
                        path: '/seriesgeneration', title: 'Series Generation', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                        path: '/printingstationary', title: 'Printing Stationary', icon: 'ft-package', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                        path: '/documentseriesallocation', title: 'Document Series Allocation', icon: 'ft-package', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                ]
            },
            {
                path: '/bookingmaster', title: 'Booking', icon: 'ft-plus-circle', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
                submenu: [
                    {
                        path: '/consignmentoperation', title: 'Consignment', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                        path: '/reserveoperation', title: 'Reserve', icon: 'ft-package', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                        path: '/uploadpackingslip', title: 'Upload Packing Slip', icon: 'ft-package', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                ]
            },
            {
                path: '/outward', title: 'Outward', icon: 'ft-arrow-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/inward', title: 'Inward', icon: 'ft-arrow-down', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
                submenu: [
                    {
                        path: '/truckarrival', title: 'Truck Arrival', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                        path: '/truckunloading', title: 'Truck Unloading', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    }
                ]
            },
            {
                path: '/delivery', title: 'Delivery', icon: 'ft-crosshair', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
                submenu: [
                    {
                        path: '/godowndelivery', title: 'Godown Delivery', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    // {
                    //     path: '/predelivery', title: 'Pre Delivery', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    // },
                    // {
                    //     path: '/ddlocalchallan', title: 'DD Local Challan', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    // },
                    // {
                    //     path: '/doordeliveryconfirm', title: 'Door Delivery Confirm', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    // },
                    // {
                    //     path: '/bill', title: 'bill', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    // },
                    {
                        path: 'delivery',  title: 'Door Delivery', icon: 'ft-crosshair', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1 ', isExternalLink: false,
                        submenu: [
                            {
                                path: '/predelivery', title: 'Pre Delivery', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                            },
                            {
                                path: '/ddlocalchallan', title: 'DD Local Challan', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                            },
                            {
                                path: '/doordeliveryconfirm', title: 'Door Delivery Confirm', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                            },
                            {
                                 path: '/bill', title: 'bill', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                             },
                        ]
                    },
                ]
            },
            {
                path: '/receipt', title: 'Receipt', icon: 'ft-crosshair', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },
    {
        path: '', AccessAllow: true, title: 'Finance', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '/account', title: 'Account', icon: 'icon-crop', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
                 submenu: [
                    {
                        path: '/ledgergroup', title: 'Ledger group', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                        path: '/ledger', title: 'Ledger', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                        path: '/costcentre', title: 'Cost Centre', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                 ]
            },
            {
                path: '/accountingvouchers', title: 'Accounting Vouchers', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },
   
];

export const ROUTES: RouteInfo[] = this.R;

