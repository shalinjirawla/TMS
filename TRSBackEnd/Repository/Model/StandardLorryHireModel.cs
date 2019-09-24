using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class StandardLorryHireModel
    {
        public int id { get; set; }
        public System.DateTime date { get; set; }
        public int vehicleType { get; set; }
        public double vehiclecpacityMT { get; set; }
        public int from { get; set; }
        public int to { get; set; }
        public string lorryhire { get; set; }
        public bool isActive { get; set; }
        public string vehicleTypename { get; set; }
    }
}
