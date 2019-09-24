using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
	public interface IUserMasterRepo
	{
		bool SaveUserMaster(UserMasterModel model);
		UserMasterModel GetUserMasterLogin(string UserName, string Password);
		UserMasterModel GetUserMasterDetail(int id);
		bool DeleteUser(int id);
		bool UpdateUserDetails(UserMasterModel model);
		List<UserMasterModel> GetAllUserDetails();
	}
}
