using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class TruckArrivalModel
    {
        public int id { get; set; }
        public string truckArrivalNo { get; set; }
        public Nullable<System.DateTime> truckArrivalDate { get; set; }
        public Nullable<int> vehicleNo { get; set; }
        public string challanNo { get; set; }
        public Nullable<System.DateTime> challanDate { get; set; }
        public Nullable<int> challanFrom { get; set; }
        public Nullable<int> challanTo { get; set; }
        public Nullable<System.DateTime> scheduledArriDate { get; set; }
        public Nullable<int> expectedUnloadingTime { get; set; }
        public string Remark { get; set; }
        public Nullable<bool> isActive { get; set; }
        public string vehicleName { get; set; }
    }
}
