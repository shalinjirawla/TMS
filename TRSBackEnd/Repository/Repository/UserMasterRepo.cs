using Repository.DB;
using Repository.Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;

namespace Repository.Repository
{
	public class UserMasterRepo : IUserMasterRepo
	{
		private readonly TRSEntities4 tRSEntities2;
		MD5 md5 = new MD5CryptoServiceProvider();
		public UserMasterRepo()
		{
			tRSEntities2 = new TRSEntities4();

		}
		public bool SaveUserMaster(UserMasterModel model)
		{
			try
			{
				if (model != null)
				{
					UserMaster item = new UserMaster();
					item.Id = model.Id;
					item.FirstName = model.FirstName;
					item.LastName = model.LastName;
					item.Address = model.Address;
					item.Gender = model.Gender;
					item.EmailId = model.EmailId;
					item.Mobile = model.Mobile;
					item.UserType = model.UserType;
					item.UserName = model.UserName;
					//Encrypt Password using md5

					byte[] Originalbytes = Encoding.Unicode.GetBytes(model.Password);
					byte[] Encodedbytes = md5.ComputeHash(Originalbytes);
					item.Password = BitConverter.ToString(Encodedbytes).Replace("-", "").ToLower();
					// End
					item.DOC = DateTime.Now;
					item.DOM = DateTime.Now;
					item.IsActive = true;
					var data = tRSEntities2.UserMasters.Add(item);
					tRSEntities2.SaveChanges();
					return true;
				}
				return true;
			}
			catch (Exception e)
			{
				throw e;
			}
		}

		public List<UserMasterModel> GetAllUserDetails()
		{
			try
			{
				List<UserMasterModel> modellist = new List<UserMasterModel>();
				var datalist = tRSEntities2.UserMasters.Where(x=>x.IsActive==true).ToList();
				if (datalist != null)
				{
					foreach (var item in datalist)
					{
						UserMasterModel model = new UserMasterModel();
						model.Id = item.Id;
						model.FirstName = item.FirstName;
						model.LastName = item.LastName;
						model.Address = item.Address;
						model.Gender = item.Gender;
						model.EmailId = item.EmailId;
						model.Mobile = item.Mobile;
						model.UserName = item.UserName;
						model.Password = item.Password;
						model.DOM = item.DOM;
						model.DOC = item.DOC;
						model.UserType = item.UserType;
						model.IsActive = item.IsActive;

						modellist.Add(model);

					}
				}
				return modellist;
			}
			catch (Exception e)
			{

				throw e;
			}
		}
		public UserMasterModel GetUserMasterLogin(string UserName, string Password)
		{
			try
			{
				byte[] Originalbytes = Encoding.Unicode.GetBytes(Password);
				byte[] Encodedbytes = md5.ComputeHash(Originalbytes);
				Password = BitConverter.ToString(Encodedbytes).Replace("-", "").ToLower();
				var data = tRSEntities2.UserMasters.Where(x => x.UserName == UserName && x.Password == Password).FirstOrDefault();
				UserMasterModel model = new UserMasterModel();
				if (data != null)
				{
					model.UserName = data.UserName;
					model.Password = data.Password;
					model.UserType = data.UserType;

				}
				else
				{
					model.UserName = "Inavlid UserName And Password..!";
					model.Password = "";
					model.UserType = "";
				}
				return model;

			}
			catch (Exception e)
			{
				throw e;
			}
		}


		public UserMasterModel GetUserMasterDetail(int id)
		{
			try
			{
				var data = tRSEntities2.UserMasters.Where(x => x.Id == id && x.IsActive == true).FirstOrDefault();
				UserMasterModel model = new UserMasterModel();
				if (data != null)
				{
					model.Id = data.Id;
					model.FirstName = data.FirstName;
					model.LastName = data.LastName;
					model.Address = data.Address;
					model.Gender = data.Gender;
					model.UserName = data.UserName;
					model.EmailId = data.EmailId;
					model.UserType = data.UserType;
					model.Mobile = data.Mobile;
					model.DOC = data.DOC;
					model.DOM = DateTime.Now;
					model.IsActive = true;

				}
				return model;

			}
			catch (Exception e)
			{
				throw e;
			}
		}
		public bool DeleteUser(int id)
		{
			try
			{
				var UserList = tRSEntities2.UserMasters.Where(x => x.Id == id).FirstOrDefault();
				if (UserList != null)
				{
					UserList.IsActive = false;
					tRSEntities2.SaveChanges();
					return true;
				}
				else
				{
					return false;
				}

			}
			catch (Exception e)
			{
				throw e;

			}
		}
		public bool UpdateUserDetails(UserMasterModel modal)
		{
			try
			{
				var UserDetails = tRSEntities2.UserMasters.Where(x => x.Id == modal.Id).FirstOrDefault();
				if (UserDetails != null)
				{
					UserDetails.Id = modal.Id;
					UserDetails.FirstName = modal.FirstName;
					UserDetails.LastName = modal.LastName;
					UserDetails.Address = modal.Address;
					UserDetails.Gender = modal.Gender;
					UserDetails.EmailId = modal.EmailId;
					UserDetails.Mobile = modal.Mobile;
					UserDetails.DOM = UserDetails.DOM;
					UserDetails.DOC = DateTime.Now;
					UserDetails.IsActive = true;
					tRSEntities2.SaveChanges();
					return true;
				}
				else
				{
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
