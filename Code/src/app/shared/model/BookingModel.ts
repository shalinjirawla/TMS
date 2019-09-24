import { PackingModel } from "./PackingModel";

export class BookingModel{
    id:number;
    cn:Date;
    expectedDelivery:Date;
    from:number;
    to:number;
    godownNo:number;
    paymentType:string;
    actualWeight:number;
    consignee:number;
    clientName:string;
    godownName:string;
    branchName:number;
    //second day
    cnNo:number;
    virtualGoddownNo:number;
    consignorDetails:string;
    consignor:number;
    agentName:number;
    agentDetails:number;
    bookingType:string;
    deliveryType:string;
    modeOfTransport:string;
    invoiceNo:string;
    invoiceValue:string;
    consignorInvoice:string;
    freightBasis:string;
    ftl:string;
    isCcAttached:boolean;
    isCod:boolean;
    chargeWeight:number;
    freightRate:number;
    privateMark:string;
    insuredBy:string;
    freight:number;
    surcharge:number;
    hamaliCharge:number;
    localCartages:string;
    doorDeliveryCharge:number;
    statisticalCharges:number;
    miscellaneousCharges:number;
    godownCharges:number;
    cod:number;
    deliveryBranch:number;
    riskCharge:string;
    //foreign key names
    fromName:string;
    toName:string;
    consigneeName:string;
    deliveryBranchName:string;
    consignorName:string;
    virtualGoddownName:string;
    
    branch:string;
    reserveReason:number;
    cnFrom:Date;
    cnTo:Date;
    srtoNo:string;
    lotNo:string;
    rollNo:string;
    meter:number;
    weightInKg:number;
    actualWeight1:number;
    payment:any[];
    singleCn:PackingModel[];
}
