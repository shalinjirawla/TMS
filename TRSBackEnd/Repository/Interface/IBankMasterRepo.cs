using System;
using Repository.Model;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
	public interface IBankMasterRepo
	{
		bool SaveBankMaster(BankMasterModel model);
		List<BankMasterModel> GetBankMasterDetails();		
		BankMasterModel GetBankMasterDetail(int id);
		bool UpdateBankMasterDetails(BankMasterModel model);
		bool DeleteBankMasterDetails(int id);
	}
}
