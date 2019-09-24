using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IGoddownOwnerDetailsRepo
    {
        bool SaveGoddownOwnerDetails(GoddownOwnerDetailsModel model);
		List<GoddownOwnerDetailsModel> GetGoddownOwnerDetails();
		bool UpdateGoddownOwnerDetails(GoddownOwnerDetailsModel model);
		GoddownOwnerDetailsModel GetGoddownOwnerDetail(int id);
		bool DeleteGoddownOwnerDetails(int id);

	}
}
