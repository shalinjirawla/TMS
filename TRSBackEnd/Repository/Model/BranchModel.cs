using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.DB;

namespace Repository.Model
{
    public class BranchModel
    {
        public int id { get; set; }
        public string branchCode { get; set; }
        public string branchName { get; set; }
        public Nullable<int> branchType { get; set; }
        public string deliveryAgainstAs { get; set; }
        public int cityId { get; set; }
        public Nullable<int> pincode { get; set; }
        public int stateId { get; set; }
        public string gstNo { get; set; }
        public string phoneNo { get; set; }
        public string mobileNo { get; set; }
        public int regionId { get; set; }
        public Nullable<int> areaId { get; set; }
        public string servicesOffered { get; set; }
        public string cn { get; set; }
        public string mr { get; set; }
        public string challan { get; set; }
        public string freightBill { get; set; }
        public Nullable<int> expectedUnderLoad { get; set; }
        public Nullable<int> expectedUnloadingAfterArrival { get; set; }
        public Nullable<int> maxAdvance { get; set; }
        public Nullable<int> defaultCashLedger { get; set; }
        public Nullable<int> defaultBankLedger { get; set; }
        public string remark { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
