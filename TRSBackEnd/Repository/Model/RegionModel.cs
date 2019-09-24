using System;

namespace Repository.Model
{
    public class RegionModel
    {
        public int id { get; set; }
        public string regionCode { get; set; }
        public string regionName { get; set; }
        public string address { get; set; }
        public int cityId { get; set; }
        public Nullable<int> pincode { get; set; }
        public int stateId { get; set; }
        public string phoneNo { get; set; }
        public string mobileNo { get; set; }
        public string emailId { get; set; }
        public string cashBalanceLimit { get; set; }
        public string bankBalanceLimit { get; set; }
        public Nullable<int> defaultCashLedger { get; set; }
        public Nullable<int> defaultBankLegder { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
