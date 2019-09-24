using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class UploadPackingSlipModel
    {
        public int id { get; set; }
        public Nullable<int> cnNo { get; set; }
        public string rollNo { get; set; }
        public Nullable<int> srtoNo { get; set; }
        public Nullable<int> lotNo { get; set; }
        public Nullable<double> meter { get; set; }
        public Nullable<double> weightInKg { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}
