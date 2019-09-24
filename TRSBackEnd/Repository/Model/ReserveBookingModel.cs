using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class ReserveBookingModel
    {
        public int id { get; set; }
        public Nullable<int> branch { get; set; }
        public Nullable<int> Consignor { get; set; }
        public string CNfrom { get; set; }
        public string CNto { get; set; }
        public Nullable<bool> isActive { get; set; }
        public string branchName { get; set; }
        public string consignorName { get; set; }
    }
}
