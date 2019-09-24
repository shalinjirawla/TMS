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
	public class BankMasterRepo:IBankMasterRepo
	{
		private readonly TRSEntities4 _tRSEntities;
		public BankMasterRepo()
		{
			_tRSEntities = new TRSEntities4();
		}
		public List<BankMasterModel> GetBankMasterDetails()
		{

			try
			{
				List<BankMasterModel> models = new List<BankMasterModel>();
				var data = _tRSEntities.BankMasters.Where(x => x.IsActive == true).ToList();

				if (data != null)
				{
					
					foreach (var item in data)
					{
						BankMasterModel model = new BankMasterModel();
						model.id = item.id;
						model.Bank_Name = item.Bank_Name;
						model.IFSC_code = item.IFSC_code;
						model.Bank_Branch = item.Bank_Branch;
						model.Address = item.Address;
						model.state = item.state;
						model.city = item.city;
						model.Contact = item.Contact;
						model.DOC = item.DOC;
						model.DOM = item.DOM;
						model.IsActive =(bool)item.IsActive;
						models.Add(model);
					}

				}
				return models;
			}

			catch (Exception e)
			{

				throw e;
			}
		}
		public bool SaveBankMaster(BankMasterModel model)
		{
			try
			{
				if (model != null)
				{
					BankMaster BM = new BankMaster();
					BM.id = 111;
					BM.Bank_Name = model.Bank_Name;
					BM.IFSC_code = model.IFSC_code;
					BM.Bank_Branch = model.Bank_Branch;					
					BM.Address = model.Address;
					BM.state = model.state;
					BM.city = model.city;
					BM.Contact = model.Contact;
					BM.DOC = DateTime.Now;
					BM.DOM = DateTime.Now;
					BM.IsActive = true;
					_tRSEntities.BankMasters.Add(BM);
					_tRSEntities.SaveChanges();
					return true;
				}
			}
			catch (Exception e)
			{

				throw e;
				
			}
			return true;
		}
		
		public BankMasterModel GetBankMasterDetail(int id)
		{
			try
			{
				var data = _tRSEntities.BankMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
				BankMasterModel model = new BankMasterModel();
				if (data != null)
				{
					model.id = data.id;
					model.Bank_Name = data.Bank_Name;
					model.Bank_Branch = data.Bank_Branch;
					model.Address = data.Address;
					model.state = data.state;
					model.IFSC_code = data.IFSC_code;
					model.city = data.city;
					model.Contact = data.Contact;
					model.DOC = data.DOC;
					model.DOM = data.DOM;
					model.IsActive = data.IsActive;
					
				}
				return model;

			}
			catch (Exception e)
			{
				throw e;
			}
		}
		public bool UpdateBankMasterDetails(BankMasterModel model)
		{
			try
			{
				if (model != null)
				{
					var data = _tRSEntities.BankMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
					if (data != null)
					{
						data.Bank_Name = model.Bank_Name;
						data.Bank_Branch = model.Bank_Branch;
						data.IFSC_code = model.IFSC_code;
						data.Address = model.Address;
						data.state = model.state;
						data.city = model.city;
						data.Contact = model.Contact;
						data.DOC = model.DOC;
						data.DOM = System.DateTime.Now;
						data.IsActive = true;
						_tRSEntities.SaveChanges();
						return true;
					}
					else {

						return false;
					}
				}
				return true;
			}
			catch (Exception e)
			{
				throw e;
			}
		}
		public bool DeleteBankMasterDetails(int id)
		{
			try
			{
				var data = _tRSEntities.BankMasters.Where(x => x.id == id && x.IsActive==true).FirstOrDefault();
				if (data != null)
				{
					data.IsActive = false;
					_tRSEntities.SaveChanges();
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
