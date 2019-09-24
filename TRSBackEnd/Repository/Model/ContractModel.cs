using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
    public class ContractModel
    {
        public int id { get; set; }
        public string no { get; set; }
        public string name { get; set; }
        public System.DateTime date { get; set; }
        public int branch { get; set; }
        public int clientname { get; set; }
        public string pono { get; set; }
        public string podate { get; set; }
        public System.DateTime validfromdate { get; set; }
        public System.DateTime validtodate { get; set; }
        public string rateapplicableon { get; set; }
        public double weight { get; set; }
        public double freight { get; set; }
        public int branchfrom { get; set; }
        public int branchto { get; set; }
        public string freightperKG { get; set; }
        public double statisticalcharges { get; set; }
        public double FOV { get; set; }
        public double hamaliperKG { get; set; }
        public double hamaniperArt { get; set; }
        public double localcharges { get; set; }
        public double doordeliverychargesKG { get; set; }
        public double doordeliverychargesart { get; set; }
        public double gicharges { get; set; }
        public string demurragedays { get; set; }
        public double demurragerate { get; set; }
        public string fileupload { get; set; }
        public bool isActive { get; set; }

        public string branchfromname { get; set; }
        public string branchtoname { get; set; }
        public string branchname { get; set; }
        public string clientnames { get; set; }

        //public virtual BranchMaster BranchMaster { get; set; }
        //public virtual BranchMaster BranchMaster1 { get; set; }
        //public virtual BranchMaster BranchMaster2 { get; set; }
        //public virtual RegularClientMaster RegularClientMaster { get; set; }
    }
}
