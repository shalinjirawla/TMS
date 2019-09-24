using Repository.Interface;
using Repository.Model;
using Repository.Repository;
using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TRSBackEnd.Controllers
{
	public class UserMasterController : ApiController
	{
		private readonly IUserMasterRepo IUserMasterRepo;
		public UserMasterController(IUserMasterRepo _IUserMasterRepo)
		{
			IUserMasterRepo = _IUserMasterRepo;
		}
		public IHttpActionResult GetUser(string UserName,string Password)
		{
			var data = IUserMasterRepo.GetUserMasterLogin(UserName, Password);
			return Ok(data);
		}
		public IHttpActionResult GetAllUserDetails()
		{
			var allDataList = IUserMasterRepo.GetAllUserDetails();
			return Ok(allDataList);
		}
		public IHttpActionResult SaveUserMaster(UserMasterModel model)
		{
			var data = IUserMasterRepo.SaveUserMaster(model);
			return Ok(data);
				
		}
		public IHttpActionResult GetUserMasterDetails(int id)
		{
			var data = IUserMasterRepo.GetUserMasterDetail(id);
			return Ok(data);
		}
		public IHttpActionResult Deleteuser(int id)
		{
			var Data = IUserMasterRepo.DeleteUser(id);
			return Ok(Data);
		}
		public IHttpActionResult UpdateUserDetails(UserMasterModel model)
		{
			var data = IUserMasterRepo.UpdateUserDetails(model);
			return Ok(data);
		}

	}

}
