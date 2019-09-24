using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class AccountModel
    {
        public int id { get; set; }
        public string ledgergroupname { get; set; }
        public string nature { get; set; }
        public string ledgername { get; set; }
        public string PAN { get; set; }
        public string GSTIN { get; set; }
        public string accountno { get; set; }
        public string address { get; set; }
        public Nullable<int> city { get; set; }
        public string pincode { get; set; }
        public Nullable<int> state { get; set; }
        public string STDcode { get; set; }
        public string phoneno { get; set; }
        public string mobileno { get; set; }
        public string emailid { get; set; }
        public Nullable<bool> emailalert { get; set; }
        public Nullable<bool> mobilealert { get; set; }
        public string openingbalance { get; set; }
        public string openingamount { get; set; }
        public string applicablelocation { get; set; }
        public string remark { get; set; }
        public string costcentrename { get; set; }
        public string remark1 { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
