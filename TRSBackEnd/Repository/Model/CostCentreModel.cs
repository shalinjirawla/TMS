using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class CostCentreModel
    {
        public int id { get; set; }
        public string costcentrename { get; set; }
        public string remark { get; set; }
        public Nullable < bool > isActive { get; set; }
    }
}
