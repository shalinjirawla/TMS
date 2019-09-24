using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class LocalVehicleContractModel
    {
        public int id { get; set; }
        public int branch { get; set; }
        public int vehicleNo { get; set; }
        public int vendorDetail { get; set; }
        public System.DateTime fromdate { get; set; }
        public System.DateTime todate { get; set; }
        public string freightsettlement { get; set; }
        public string hirebasis { get; set; }
        public string hirerate { get; set; }
        public bool IsActive { get; set; }
        public string vehicleName { get; set; }
        public string branchName { get; set; }
    }
}
