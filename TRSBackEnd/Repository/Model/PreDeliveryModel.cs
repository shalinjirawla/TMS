using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class PreDeliveryModel
    {
        public int id { get; set; }
        public string predeliveryNo { get; set; }
        public Nullable<System.DateTime> predeliverydate { get; set; }
        public string paymentmode { get; set; }
        public Nullable<int> deliveryparty { get; set; }
        public string deliverypartydetails { get; set; }
        public Nullable<int> contractparty { get; set; }
        public string contractpartydetails { get; set; }
        public string CNno { get; set; }
        public Nullable<System.DateTime> CNdate { get; set; }
        public Nullable<int> bookingbranch { get; set; }
        public string consignoor { get; set; }
        public string item { get; set; }
        public Nullable<int> packingType { get; set; }
        public Nullable<int> godownname { get; set; }
        public Nullable<int> virtualgodownname { get; set; }
        public Nullable<double> deliveryarticle { get; set; }
        public Nullable<double> deliveryweight { get; set; }
        public Nullable<double> balancearticle { get; set; }
        public Nullable<double> balanceweight { get; set; }
        public string rollNo { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
