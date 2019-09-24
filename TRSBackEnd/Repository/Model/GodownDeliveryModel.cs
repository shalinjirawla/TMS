using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class GodownDeliveryModel
    {
        public int id { get; set; }
        public string gatepassNo { get; set; }
        public Nullable<System.DateTime> gatepassdate { get; set; }
        public string paymentmode { get; set; }
        public Nullable<int> deliveryparty { get; set; }
        public string deliverypartydetails { get; set; }
        public Nullable<int> contractparty { get; set; }
        public string contractpartydetails { get; set; }
        public string CNno { get; set; }
        public Nullable<System.DateTime> CNdate { get; set; }
        public Nullable<int> bookingbranch { get; set; }
        public string consignor { get; set; }
        public string item { get; set; }
        public Nullable<int> packingType { get; set; }
        public Nullable<int> godownname { get; set; }
        public Nullable<int> virtualgodownname { get; set; }
        public Nullable<double> deliveryarticle { get; set; }
        public Nullable<double> deliveryweight { get; set; }
        public Nullable<double> balancearticle { get; set; }
        public Nullable<double> balanceweight { get; set; }
        public string rollno { get; set; }
        public string handedoverto { get; set; }
        public string contractNo { get; set; }
        public string vehicleNo { get; set; }
        public string GUTKANo { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
