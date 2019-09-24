using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
   public class RTOModel
    {
        public int id { get; set; }
        public string rtoCode { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public Nullable<int> city { get; set; }
        public string pinCode { get; set; }
        public Nullable<int> state { get; set; }
        public string stdCode { get; set; }
        public Nullable<int> phoneNo { get; set; }
        public string emailId { get; set; }
        public string website { get; set; }
        public string remark { get; set; }
        public string stateName { get; set; }
        public string cityName { get; set; }
        public Nullable<bool> isActive { get; set; }
        public Nullable<int> mobileNo { get; set; }

        public virtual CityMaster CityMaster { get; set; }
        public virtual StateMaster StateMaster { get; set; }
    }
}
