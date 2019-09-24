using Repository.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Model
{
	public class UserMasterModel
	{
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Address { get; set; }
		public string Gender { get; set; }
		public string UserType { get; set; }
		public string EmailId { get; set; }
		public string Mobile { get; set; }
		public string UserName { get; set; }
		public string Password { get; set; }
		public Nullable<System.DateTime> DOC { get; set; }
		public Nullable<System.DateTime> DOM { get; set; }
		public Nullable<bool> IsActive { get; set; }
	}
}
