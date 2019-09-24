using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class LateReportReasonModel
    {
        public int id { get; set; }
        public string reason { get; set; }
        public string reappforpro { get; set; }
        //public string doordeliconfirm { get; set; }
        public string doordelivery { get; set; }
        public bool isActive { get; set; }
    }
}
