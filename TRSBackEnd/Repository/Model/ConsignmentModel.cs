using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class ConsignmentModel
    {
        public int id { get; set; }
        public Nullable<System.DateTime> cndate { get; set; }
        public Nullable<System.DateTime> expectedDelivery { get; set; }
        public Nullable<int> from { get; set; }
        public Nullable<int> to { get; set; }
        public Nullable<int> godownNo { get; set; }
        public string paymentType { get; set; }
        public Nullable<double> actualWeight { get; set; }
        public Nullable<int> consignee { get; set; }
        public Nullable<bool> isActive { get; set; }
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
        public Nullable<System.DateTime> consignorInvoice { get; set; }
        public string freightBasis { get; set; }
        public Nullable<int> ftl { get; set; }
        public Nullable<bool> isCcAttached { get; set; }
        public Nullable<bool> isCod { get; set; }
        public Nullable<double> chargeWeight { get; set; }
        public Nullable<double> freightRate { get; set; }
        public string privateMark { get; set; }
        public string insuredBy { get; set; }
        public Nullable<double> freight { get; set; }
        public Nullable<double> surcharge { get; set; }
        public Nullable<double> hamaliCharge { get; set; }
        public string localCartages { get; set; }
        public Nullable<double> doorDeliveryCharge { get; set; }
        public Nullable<double> statisticalCharges { get; set; }
        public Nullable<double> miscellaneousCharges { get; set; }
        public Nullable<double> godownCharges { get; set; }
        public Nullable<double> cod { get; set; }
        public Nullable<bool> financeEffect { get; set; }
        public string packingtype { get; set; }

        public string godownName { get; set; }
        public string fromName { get; set; }
    }
}
