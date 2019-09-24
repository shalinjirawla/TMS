using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
  public class BranchRateModel
	{
		public int Id { get; set; }
		public string General { get; set; }
		public string Commodity { get; set; }
		public string MinimumChargeWeightin { get; set; }
		public Nullable<decimal> StatisticChargesinRS { get; set; }
		public Nullable<decimal> CFTFactorinKG { get; set; }
		public Nullable<decimal> FOVin { get; set; }
		public Nullable<decimal> HamaliperArticleinRS { get; set; }
		public Nullable<decimal> MinimumHamaliinRS { get; set; }
		public string Surcharges { get; set; }
		public Nullable<decimal> CoverCharges { get; set; }
		public Nullable<decimal> MiscCharges { get; set; }
		public Nullable<decimal> GodownCharges { get; set; }
		public Nullable<decimal> CODCharges { get; set; }
		public string DemurrageExemptDays { get; set; }
		public Nullable<decimal> DemurrageRate { get; set; }
		public Nullable<decimal> GICharges { get; set; }
		public Nullable<decimal> DoorDeliveryCharges { get; set; }
		public string FirstNoticeDays { get; set; }
		public string SecondNoticeDays { get; set; }
		public string FinalNoticeDays { get; set; }
		public string Discount { get; set; }
		public string BranchRateParameter { get; set; }
		public string OtherBranchCommodity { get; set; }
		public Nullable<System.DateTime> DOC { get; set; }
		public Nullable<System.DateTime> DOM { get; set; }
		public Nullable<bool> IsActive { get; set; }
		public Nullable<decimal> NetTotal { get; set; }
	}
}
