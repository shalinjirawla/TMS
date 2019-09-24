export class BranchModel {
    id: number;
    branchCode: string;
    branchName: string;
    branchType: number;
    deliveryAgainstAs: string;
    cityId: number;
    pincode: number;
    stateId: number;
    gstNo: string;
    phoneNo: string;
    mobileNo: string;
    regionId: number;
    areaId: number;
    servicesOffered: string;
    cn: string;
    mr: string;
    challan: string;
    freightBill: string;
    expectedUnderLoad: number;
    expectedUnloadingAfterArrival: number;
    maxAdvance: number;
    defaultCashLedger: number;
    defaultBankLedger: number;
    remark: string;
}