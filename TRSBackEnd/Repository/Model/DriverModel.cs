using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class DriverModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string drivercategory { get; set; }
        public Nullable<bool> isreliable { get; set; }
        public Nullable<System.DateTime> DOB { get; set; }
        public string Religion { get; set; }
        public string qualification { get; set; }
        public string maritalstatus { get; set; }
        public string drivinglicencecategory { get; set; }
        public string drivinglicenceNo { get; set; }
        public string drivLiceIssueAuthoLoca { get; set; }
        public Nullable<System.DateTime> drivLiceExDate { get; set; }
        public string bloodgroup { get; set; }
        public string Address { get; set; }
        public Nullable<int> state { get; set; }
        public Nullable<int> city { get; set; }
        public string STDcode { get; set; }
        public string phoneno { get; set; }
        public string mobileno { get; set; }
        public string referencename { get; set; }
        public string referenceaddress { get; set; }
        public Nullable<int> referencecity { get; set; }
        public string referencepincode { get; set; }
        public string referencephoneno { get; set; }
        public string referencemobileno { get; set; }
        public string policyno { get; set; }
        public string insurancecompany { get; set; }
        public string insurancevalue { get; set; }
        public string nomination { get; set; }
        public Nullable<System.DateTime> insuranceexpirydate { get; set; }
        public string fileupload { get; set; }
        public Nullable<bool> isActive { get; set; }

    }
}
