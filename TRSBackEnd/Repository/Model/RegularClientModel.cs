using System;

namespace Repository.Model
{
    public class RegularClientModel
    {
        public int id { get; set; }
        public Nullable<int> branchId { get; set; }
        public string clientCode { get; set; }
        public string clientName { get; set; }
        public Nullable<int> clientGroupId { get; set; }
        public string pan { get; set; }
        public string gstIN { get; set; }
        public string address { get; set; }
        public Nullable<int> cityId { get; set; }
        public Nullable<int> pinCode { get; set; }
        public Nullable<int> StateId { get; set; }
        public string phoneNo { get; set; }
        public string mobileNo { get; set; }
        public Nullable<bool> emailAlert { get; set; }
        public Nullable<bool> smsAlert { get; set; }
        public string deliveryAgainstAsCnr { get; set; }
        public string deliveryAgainstAsCne { get; set; }
        public string ledgerName { get; set; }
        public Nullable<int> days { get; set; }
        public string amount { get; set; }
        public Nullable<int> interest { get; set; }
        public Nullable<int> creditGraceDays { get; set; }
        public Nullable<int> bankId { get; set; }
        public string accountNo { get; set; }
        public string chequeInTheNameOf { get; set; }
        public string companyNo { get; set; }
        public string policyNo { get; set; }
        public Nullable<System.DateTime> validFromDate { get; set; }
        public Nullable<System.DateTime> validToDate { get; set; }
        public string insuranceAmount { get; set; }
        public Nullable<bool> isMarineInsured { get; set; }
        public Nullable<bool> isGodownInsured { get; set; }
        public string paymentMode { get; set; }
        public string bookingType { get; set; }
        public string deliveryType { get; set; }
        public string multipleBillingBranches { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }
        public string ifsc { get; set; }
    }
}
