using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
  public class PackingModel
    {
        public int id { get; set; }
        public Nullable<int> article { get; set; }
        public Nullable<int> item { get; set; }
        public Nullable<decimal> actualWeight1 { get; set; }
        public string packingType { get; set; }
        public Nullable<int> bookingId { get; set; }
        public Nullable<bool> isActive { get; set; }

    }
}
