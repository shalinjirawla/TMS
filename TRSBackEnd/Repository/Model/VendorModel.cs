using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class VendorModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public int vendorType { get; set; }
        public string address { get; set; }
        public int city { get; set; }
        public string pincode { get; set; }
        public int state { get; set; }
        public string STDcode { get; set; }
        public string phoneno { get; set; }
        public string mobileno { get; set; }
        public string emailid { get; set; }
        public bool emailalert { get; set; }
        public bool mobilealert { get; set; }
        public string PAN { get; set; }
        public string GSTIN { get; set; }
        public string referencename { get; set; }
        public string referphoneno { get; set; }
        public string refermobileno { get; set; }
        public string creditdays { get; set; }
        public string creditamount { get; set; }
        public int bankname { get; set; }
        public int bankbranch { get; set; }
        public int IFSC { get; set; }
        public string accountno { get; set; }
        public string chequename { get; set; }
        public string fileupload { get; set; }
        public bool isActive { get; set; }

        //public virtual BankMaster BankMaster { get; set; }
        //public virtual BankMaster BankMaster1 { get; set; }
        //public virtual BankMaster BankMaster2 { get; set; }
        //public virtual CityMaster CityMaster { get; set; }
        //public virtual StateMaster StateMaster { get; set; }
         public virtual VendorTypeMaster VendorTypeMaster { get; set; }
    }
}
