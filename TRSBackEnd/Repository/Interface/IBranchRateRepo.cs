using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
	public interface IBranchRateRepo
	{
		bool SaveBranchRateDetails(BranchRateModel model);
		List<BranchRateModel> GetBranchRateDetails();
		BranchRateModel GetBranchRateDetail(int id);
		bool UpdateBranchRateDetails(BranchRateModel model);
		bool DeleteBranchRateDetails(int id);
		
	}
}
