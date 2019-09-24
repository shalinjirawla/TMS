using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class DDLocalChallanModel
    {
        public int id { get; set; }
        public string DDlocalchallanNo { get; set; }
        public Nullable<System.DateTime> DDlocalchallanDate { get; set; }
        public string prideliveryNo { get; set; }
        public Nullable<double> Hirecharges { get; set; }
        public Nullable<int> vehicleNo { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
