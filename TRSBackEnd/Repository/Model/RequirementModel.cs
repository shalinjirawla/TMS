using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class RequirementModel
    {
        public int id { get; set; }
        public string requirementNo { get; set; }
        public Nullable<System.DateTime> requirementDate { get; set; }
        public string requirementType { get; set; }
        public Nullable<int> DRLedgerNameTo { get; set; }
        public string DRAmount { get; set; }
        public Nullable<int> DRLedgerNameFrom { get; set; }
        public string DRAmount1 { get; set; }
        public string remark { get; set; }
        public string referenceNo { get; set; }
        public string challanNo { get; set; }
        public string RENT { get; set; }
        public string SALARY { get; set; }
        public string ADMIN { get; set; }
        public string fileupload { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
