using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class DoorDeliveryConfirmModel
    {
        public int id { get; set; }
        public string doordeliveryNo { get; set; }
        public Nullable<int> predeliveryNo { get; set; }
        public string CNno { get; set; }
        public Nullable<System.DateTime> CNdate { get; set; }
        public Nullable<int> bookingbranch { get; set; }
        public string consignor { get; set; }
        public string item { get; set; }
        public Nullable<double> deliveryarticle { get; set; }
        public Nullable<double> deliveryweight { get; set; }
        public Nullable<double> undeliveredarticle { get; set; }
        public Nullable<double> undeliveredweight { get; set; }
        public Nullable<double> balancearticle { get; set; }
        public Nullable<double> balanceweight { get; set; }
        public string rollno { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }
        public string predeliveryNoName { get; set; }
        public string bookingbranchname { get; set; }
    }
}
