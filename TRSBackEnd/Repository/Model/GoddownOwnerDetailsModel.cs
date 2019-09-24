using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
   public class GoddownOwnerDetailsModel
    {
        public int id { get; set; }
        public string goddownOwnerCode { get; set; }
        public Nullable<int> branch { get; set; }
        public Nullable<int> goddown { get; set; }
        public string ownerName { get; set; }
        public string address { get; set; }
        public Nullable<int> city { get; set; }
        public string pinCode { get; set; }
        public Nullable<int> state { get; set; }
        public string stdCode { get; set; }
        public string phoneNo { get; set; }
        public string mobileNo { get; set; }
        public string emailId { get; set; }
        public string sqft { get; set; }
        public string ratePerSqft { get; set; }
        public Nullable<decimal> rentAmount { get; set; }
        public Nullable<decimal> gst { get; set; }
        public Nullable<decimal> totalRent { get; set; }
        public Nullable<decimal> tds { get; set; }
        public Nullable<decimal> netRent { get; set; }
        public string pan { get; set; }
        public string gstin { get; set; }
        public Nullable<int> bank { get; set; }
        public string ifsc { get; set; }
        public string a_cno { get; set; }
        public string chequeInTheNameOf { get; set; }
        public Nullable<System.DateTime> nextVersionDate { get; set; }
        public Nullable<bool> holdPaymentInstruction { get; set; }
        public string reamrk { get; set; }
        public Nullable<bool> isRented { get; set; }
        public string rentPaymentType { get; set; }
        public string securityDeposit { get; set; }
        public Nullable<System.DateTime> agreementStartDate { get; set; }
        public Nullable<System.DateTime> agreementEndDate { get; set; }
        public string noticePeriodInDays { get; set; }
        public Nullable<bool> isActive { get; set; }

    }
}
