using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
   public class BookingModel
    {
        public int id { get; set; }
        public Nullable<System.DateTime> cn { get; set; }
        public Nullable<System.DateTime> expectedDelivery { get; set; }
        public Nullable<int> from { get; set; }
        public Nullable<int> to { get; set; }
        public Nullable<int> godownNo { get; set; }
        public string paymentType { get; set; }
        public Nullable<decimal> actualWeight { get; set; }
        public Nullable<int> consignee { get; set; }

        //foriegn key name
        public string clientName { get; set; }
        public string godownName { get; set; }
        public string branchName { get; set; }
        public string fromName { get; set; }
        public string consigneeName { get; set; }
        public string deliveryBranchName{ get; set; }
        public string consignorName{ get; set; }
        public string virtualGoddownName { get; set; }
    


        public string toName { get; set; }
        public Nullable<bool> isActive { get; set; }

        //Next day
        public Nullable<int> cnNo { get; set; }
        public Nullable<int> deliveryBranch { get; set; }
        public Nullable<int> virtualGoddownNo { get; set; }
        public string consignorDetails { get; set; }
        public Nullable<int> consignor { get; set; }
        public Nullable<int> agentName { get; set; }
        public string agentDetails { get; set; }
        public string bookingType { get; set; }
        public string deliveryType { get; set; }
        public string modeOfTransport { get; set; }
        public string invoiceNo { get; set; }
        public string invoiceValue { get; set; }
        public string consignorInvoice { get; set; }
        public string freightBasis { get; set; }
        public string ftl { get; set; }
        public Nullable<bool> isCcAttached { get; set; }
        public Nullable<bool> isCod { get; set; }
        public Nullable<decimal> chargeWeight { get; set; }
        public Nullable<decimal> freightRate { get; set; }
        public string privateMark { get; set; }
        public string insuredBy { get; set; }
        public Nullable<decimal> freight { get; set; }
        public Nullable<decimal> surcharge { get; set; }
        public Nullable<decimal> hamaliCharge { get; set; }
        public string localCartages { get; set; }
        public Nullable<decimal> doorDeliveryCharge { get; set; }
        public Nullable<decimal> statisticalCharges { get; set; }
        public Nullable<decimal> miscellaneousCharges { get; set; }
        public Nullable<decimal> godownCharges { get; set; }
        public Nullable<decimal> cod { get; set; }
        public string riskCharge { get; set; }

        //third day
        public string branch { get; set; }
        public Nullable<int> reserveReason { get; set; }
        public Nullable<System.DateTime> cnFrom { get; set; }
        public Nullable<System.DateTime> cnTo { get; set; }
        public Nullable<int> srtoNo { get; set; }
        public Nullable<int> lotNo { get; set; }
        public string rollNo { get; set; }
        public Nullable<decimal> meter { get; set; }
        public Nullable<decimal> weightInKg { get; set; }
        public List<PackingModel> singleCn { get; set; }
       
    }
}
