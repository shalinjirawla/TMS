using Repository.DB;
using Repository.Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TRSBackEnd.Controllers
{
	public class BranchRateController : ApiController
	{
		private IBranchRateRepo BranchRateRepo;
		public BranchRateController(IBranchRateRepo _branchRate)
		{
			BranchRateRepo = _branchRate;
		}

		public IHttpActionResult GetBranchRateDetails()
		{
			var data = BranchRateRepo.GetBranchRateDetails();
			return Ok(data);
		}
		public IHttpActionResult SaveBranchRateDetails(BranchRateModel model)
		{
			var data = BranchRateRepo.SaveBranchRateDetails(model);
			return Ok(data);
		}
		public IHttpActionResult GetBranchRateDetail(int id)
		{
			var data = BranchRateRepo.GetBranchRateDetail(id);
			return Ok(data);
		}
		public IHttpActionResult UpdateBranchRateDetails(BranchRateModel model)
		{
			var data = BranchRateRepo.UpdateBranchRateDetails(model);
			return Ok(data);
		}
		public IHttpActionResult DeleteBranchRateDetail(int id)
		{
			var data = BranchRateRepo.DeleteBranchRateDetails(id);
			return Ok(data);
		}
	}
}
