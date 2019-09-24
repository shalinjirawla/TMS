using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class ServiceLocationModel
    {
        public int Id { get; set; }
        public string servicelocationcode { get; set; }
        public string servicelocationname { get; set; }
        public string defaultdeliverytype { get; set; }
        public int controllingbranch { get; set; }
        public int deliveryat { get; set; }
        public string distancefrombranch { get; set; }
        public string istodaybooking { get; set; }
        public string pickupcharges { get; set; }
        public string DDCharges { get; set; }
       // public bool isActive { get; set; }
        public string controllingbranchname { get; set; }
        public string deliveryatname { get; set; }
        public virtual BranchMaster BranchMaster { get; set; }
        public virtual BranchMaster BranchMaster1 { get; set; }
    }
}
