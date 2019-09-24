using Repository.DB;
using Repository.Model;
using Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TRSBackEnd.Controllers
{
    public class GoddownOwnerDetailsController : ApiController
    {
        private readonly GoddownOwnerDetailsRepo goddownOwnerDetailsRepo;
        public GoddownOwnerDetailsController(GoddownOwnerDetailsRepo _goddownOwnerDetailsRepo)
        {
            goddownOwnerDetailsRepo = _goddownOwnerDetailsRepo;
        }
        public IHttpActionResult SaveGoddownOwnerDetails(GoddownOwnerDetailsModel model)
        {
      

            var data = goddownOwnerDetailsRepo.SaveGoddownOwnerDetails(model);
            return Ok(data);
        }
        public IHttpActionResult GetGoddownOwnerDetails()
        {
            var data = goddownOwnerDetailsRepo.GetGoddownOwnerDetails();
            return Ok(data);
        }
		public IHttpActionResult GetGoddownOwnerDetail(int id)
		{
			var data = goddownOwnerDetailsRepo.GetGoddownOwnerDetail(id);
			return Ok(data);
		}

		public IHttpActionResult UpdateGoddownOwnerDetails(GoddownOwnerDetailsModel model)
        {
            var data = goddownOwnerDetailsRepo.UpdateGoddownOwnerDetails(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteGoddownOwnerDetails(int id)
        {
            var data = goddownOwnerDetailsRepo.DeleteGoddownOwnerDetails(id);
            return Ok(data);
        }

    }
}
