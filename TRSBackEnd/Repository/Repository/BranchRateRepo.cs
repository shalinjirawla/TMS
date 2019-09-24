using Repository.DB;
using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Repository.Repository
{
	public class BranchRateRepo:IBranchRateRepo
	{
		private readonly TRSEntities4 _TRSEntities2;
		public BranchRateRepo()
		{
			_TRSEntities2 = new TRSEntities4();
		}
		public bool SaveBranchRateDetails(BranchRateModel item)
		{
			try
			{
				if (item != null)
				{
					BranchRate model = new BranchRate();
					model.Id = item.Id;
					model.General = item.General;
					model.Commodity = item.Commodity;
					model.MinimumChargeWeightin = item.MinimumChargeWeightin;
					model.StatisticChargesinRS = item.StatisticChargesinRS;
					model.CFTFactorinKG = item.CFTFactorinKG;
					model.FOVin = item.FOVin;
					model.HamaliperArticleinRS = item.HamaliperArticleinRS;
					model.MinimumHamaliinRS = item.MinimumHamaliinRS;
					model.Surcharges = item.Surcharges;
					model.CoverCharges = item.CoverCharges;
					model.MiscCharges = item.MiscCharges;
					model.GodownCharges = item.GodownCharges;
					model.CODCharges = item.CODCharges;
					model.DemurrageExemptDays = item.DemurrageExemptDays;
					model.DemurrageRate = item.DemurrageRate;
					model.GICharges = item.GICharges;
					model.DoorDeliveryCharges = item.DoorDeliveryCharges;
					model.FirstNoticeDays = item.FirstNoticeDays;
					model.SecondNoticeDays = item.SecondNoticeDays;
					model.FinalNoticeDays = item.FinalNoticeDays;
					model.Discount = item.Discount;
					model.BranchRateParameter = item.BranchRateParameter;
					model.OtherBranchCommodity = item.OtherBranchCommodity;
					model.DOC = DateTime.Now;
					model.DOM = DateTime.Now;
					model.IsActive = true;
					_TRSEntities2.BranchRates.Add(model);
					_TRSEntities2.SaveChanges();
					return true;
				}
				else {
					return false;
				}
				
			}
			catch (Exception e)
			{
				throw e;
			}
		}
		public List<BranchRateModel> GetBranchRateDetails()
		{
			try
			{
				List<BranchRateModel> branchrate = new List<BranchRateModel>();
				var data = _TRSEntities2.BranchRates.Where(x=>x.IsActive==true).ToList();
				
				if (data != null)
				{
					foreach (var item in data)
					{
						BranchRateModel model = new BranchRateModel();
						model.Id = item.Id;
						model.General = item.General;
						model.Commodity = item.Commodity;
						model.MinimumChargeWeightin = item.MinimumChargeWeightin;
						model.StatisticChargesinRS = item.StatisticChargesinRS;
						model.CFTFactorinKG = item.CFTFactorinKG;
						model.FOVin = item.FOVin;
						model.HamaliperArticleinRS = item.HamaliperArticleinRS;
						model.MinimumHamaliinRS = item.MinimumHamaliinRS;
						model.Surcharges = item.Surcharges;
						model.CoverCharges = item.CoverCharges;
						model.MiscCharges = item.MiscCharges;
						model.GodownCharges = item.GodownCharges;
						model.CODCharges = item.CODCharges;
						model.DemurrageExemptDays = item.DemurrageExemptDays;
						model.DemurrageRate = item.DemurrageRate;
						model.GICharges = item.GICharges;
						model.DoorDeliveryCharges = item.DoorDeliveryCharges;
						model.FirstNoticeDays = item.FirstNoticeDays;
						model.SecondNoticeDays = item.SecondNoticeDays;
						model.FinalNoticeDays = item.FinalNoticeDays;
						model.Discount = item.Discount;
						model.BranchRateParameter = item.BranchRateParameter;
						model.OtherBranchCommodity = item.OtherBranchCommodity;
						model.DOC = item.DOC;
						model.DOM = item.DOM;
						model.IsActive = item.IsActive;
						branchrate.Add(model);
						
					}
				}

				return branchrate;

			}
			catch (Exception e)
			{
				throw e;
			}
		}
		public BranchRateModel GetBranchRateDetail(int id)
		{
			try
			{
				BranchRateModel model = new BranchRateModel();
				var item = _TRSEntities2.BranchRates.Where(x => x.Id == id && x.IsActive==true).FirstOrDefault();
				if(item != null)
				{					
					model.Id = item.Id;
					model.General = item.General;
					model.Commodity = item.Commodity;
					model.MinimumChargeWeightin = item.MinimumChargeWeightin;
					model.StatisticChargesinRS = item.StatisticChargesinRS;
					model.CFTFactorinKG = item.CFTFactorinKG;
					model.FOVin = item.FOVin;
					model.HamaliperArticleinRS = item.HamaliperArticleinRS;
					model.MinimumHamaliinRS = item.MinimumHamaliinRS;
					model.Surcharges = item.Surcharges;
					model.CoverCharges = item.CoverCharges;
					model.MiscCharges = item.MiscCharges;
					model.GodownCharges = item.GodownCharges;
					model.CODCharges = item.CODCharges;
					model.DemurrageExemptDays = item.DemurrageExemptDays;
					model.DemurrageRate = item.DemurrageRate;
					model.GICharges = item.GICharges;
					model.DoorDeliveryCharges = item.DoorDeliveryCharges;
					model.FirstNoticeDays = item.FirstNoticeDays;
					model.SecondNoticeDays = item.SecondNoticeDays;
					model.FinalNoticeDays = item.FinalNoticeDays;
					model.Discount = item.Discount;
					model.BranchRateParameter = item.BranchRateParameter;
					model.OtherBranchCommodity = item.OtherBranchCommodity;
					model.DOC = item.DOC;
					model.DOM = item.DOM;
					model.IsActive = item.IsActive;
					
				}
				return model;
				
			}
			catch (Exception e)
			{

				throw e;
			}
		}
		public bool UpdateBranchRateDetails(BranchRateModel item)
		{
			try
			{
				if (item != null)
				{
					var model = _TRSEntities2.BranchRates.Where(x => x.Id == item.Id && x.IsActive == true).FirstOrDefault();
					if (item != null)
					{						
						model.General = item.General;
						model.Commodity = item.Commodity;
						model.MinimumChargeWeightin = item.MinimumChargeWeightin;
						model.StatisticChargesinRS = item.StatisticChargesinRS;
						model.CFTFactorinKG = item.CFTFactorinKG;
						model.FOVin = item.FOVin;
						model.HamaliperArticleinRS = item.HamaliperArticleinRS;
						model.MinimumHamaliinRS = item.MinimumHamaliinRS;
						model.Surcharges = item.Surcharges;
						model.CoverCharges = item.CoverCharges;
						model.MiscCharges = item.MiscCharges;
						model.GodownCharges = item.GodownCharges;
						model.CODCharges = item.CODCharges;
						model.DemurrageExemptDays = item.DemurrageExemptDays;
						model.DemurrageRate = item.DemurrageRate;
						model.GICharges = item.GICharges;
						model.DoorDeliveryCharges = item.DoorDeliveryCharges;
						model.FirstNoticeDays = item.FirstNoticeDays;
						model.SecondNoticeDays = item.SecondNoticeDays;
						model.FinalNoticeDays = item.FinalNoticeDays;
						model.Discount = item.Discount;
						model.BranchRateParameter = item.BranchRateParameter;
						model.OtherBranchCommodity = item.OtherBranchCommodity;
						model.DOC = item.DOC;
						model.DOM = DateTime.Now;
						model.IsActive = true;
						_TRSEntities2.SaveChanges();
						return true;
					}
				}
				return true;
			}
			catch (Exception e)
			{
				throw e;
			}
		}
		public bool DeleteBranchRateDetails(int id)
		{
			try
			{
				var data = _TRSEntities2.BranchRates.Where(x => x.Id == id && x.IsActive == true).FirstOrDefault();
				if (data != null)
				{
					data.IsActive = false;
					_TRSEntities2.SaveChanges();
					return true;
				}
				else {
					return false;
				}
				

			}
			catch (Exception e)
			{
				throw e;
			}
		}

		
	}
}
