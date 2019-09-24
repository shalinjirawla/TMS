using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class FreightModel
    {
        public int id { get; set; }
        public string bookingType { get; set; }
        public string transpotType { get; set; }
        public int frombranch { get; set; }
        public int tobranch { get; set; }
        public double rateperKG { get; set; }
        public double distance { get; set; }
        public double transitdays { get; set; }
        public bool isActive { get; set; }
        public string frombracnhname { get; set; }
        public string tobranchname { get; set; }
        public virtual BranchMaster BranchMaster { get; set; }
        public virtual BranchMaster BranchMaster1 { get; set; }

    }
}
