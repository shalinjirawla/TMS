    using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class CommodityModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public int commodityType { get; set; }
        public bool IsRestricted { get; set; }
        public bool IsPerishable { get; set; }
        public bool IsActive { get; set; }
        public string commodityTypename { get; set; }
        public virtual CommodityTypeMaster CommodityTypeMaster { get; set; }
    }
}
