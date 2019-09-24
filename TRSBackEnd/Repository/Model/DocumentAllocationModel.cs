using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class DocumentAllocationModel
    {
        public int id { get; set; }
        public System.DateTime generationdate { get; set; }
        public string documenttype { get; set; }
        public double startseriesNo { get; set; }
        public double endseriesNo { get; set; }
        public double count { get; set; }
        public System.DateTime dateofprinting { get; set; }
        public string documenttype1 { get; set; }
        //public double documenttypeNo1 { get; set; }
        public double startseriesNo1 { get; set; }
        public double endseriesNo1 { get; set; }
        public double count1 { get; set; }
        public System.DateTime dateofallocation { get; set; }
        public int branch { get; set; }
        public string documenettype2 { get; set; }
        public double startseriesNo2 { get; set; }
        public double endseriesNo2 { get; set; }
        public double count2 { get; set; }
        public bool isActive { get; set; }
    }
}
