using System;

namespace Repository.Model
{
    public class GodownModel
    {
        public int id { get; set; }
        public string godownCode { get; set; }
        public string godownName { get; set; }
        public int branchId { get; set; }
        public string address { get; set; }
        public int cityId { get; set; }
        public Nullable<int> pincode { get; set; }
        public int stateId { get; set; }
        public string phoneNo { get; set; }
        public string mobileNo { get; set; }
        public string storageCapacity { get; set; }
        public string remark { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
