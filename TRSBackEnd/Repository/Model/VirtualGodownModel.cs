using System;

namespace Repository.Model
{
    public class VirtualGodownModel
    {
        public int id { get; set; }
        public string virtualGodownCode { get; set; }
        public Nullable<int> branchId { get; set; }
        public Nullable<int> godownId { get; set; }
        public string storageCapacity { get; set; }
        public string remark { get; set; }
    }
}