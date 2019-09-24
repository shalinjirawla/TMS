using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
	public class BankMasterModel
	{
		public int id { get; set; }
		public string Bank_Name { get; set; }
		public string IFSC_code { get; set; }
		public string Bank_Branch { get; set; }
		public string Address { get; set; }		
		public int state { get; set; }
		public int city { get; set; }
		public Nullable<System.DateTime> DOC { get; set; }
		public Nullable<System.DateTime> DOM { get; set; }
		public Nullable<bool> IsActive { get; set; }
		public string Contact { get; set; }
		public virtual StateMaster StateMaster { get; set; }
		public virtual CityMaster CityMaster { get; set; }
	}
}
