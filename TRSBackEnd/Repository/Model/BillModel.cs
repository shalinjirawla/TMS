using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class BillModel
    {
        public int id { get; set; }
        public string billNo { get; set; }
        public Nullable<System.DateTime> billdate { get; set; }
        public string CNno { get; set; }
        public Nullable<System.DateTime> CNdate { get; set; }
        public Nullable<int> bookingbranch { get; set; }
        public string deliverybranch { get; set; }
        public string article { get; set; }
        public Nullable<double> actualweight { get; set; }
        public Nullable<double> chargeweight { get; set; }
        public string freightdetails { get; set; }
        public Nullable<bool> paymentmode { get; set; }
        public string amount { get; set; }
        public string chequeNo { get; set; }
        public Nullable<System.DateTime> chequedate { get; set; }
        public string amount1 { get; set; }
        public string remark4 { get; set; }
        public Nullable<bool> isActive { get; set; }
        public string bookingbranchName { get; set; }
    }
}
