using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
  public class AreaModel
    {
        public int id { get; set; }
        public string areaCode { get; set; }
        public string areaName { get; set; }
        public string address { get; set; }
        public Nullable<int> city { get; set; }
        public string pinCode { get; set; }
        public Nullable<int> state { get; set; }
        public string stdCode { get; set; }
        public Nullable<int> phoneNo { get; set; }
        public Nullable<long> mobileNo { get; set; }

        public string emailId { get; set; }
        public Nullable<int> region { get; set; }
        public string cashBalanceLimit { get; set; }
        public string bankBalanceLimit { get; set; }
        public Nullable<int> defaultCashLedger { get; set; }
        public Nullable<int> deafultBankLedger { get; set; }
        public string remark { get; set; }
        public Nullable<bool> isActive { get; set; }

        public string cityName { get; set; }
        public string regionName { get; set; }
        public string stateName { get; set; }

        public virtual CityMaster CityMaster { get; set; }
        public virtual RegionMaster RegionMaster { get; set; }
        public virtual StateMaster StateMaster { get; set; }
    }
}
