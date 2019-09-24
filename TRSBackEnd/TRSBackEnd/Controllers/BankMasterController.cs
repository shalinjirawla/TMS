
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class BankMasterController : ApiController
    {
		private  IBankMasterRepo bankMasterRepo;
		
		public BankMasterController(IBankMasterRepo _bankMasterRepo)
		{
			bankMasterRepo = _bankMasterRepo;
		}
		public IHttpActionResult GetBankMasterDetails()
		{
			var data = bankMasterRepo.GetBankMasterDetails();
			return Ok(data);
		}
		public IHttpActionResult SaveBankMasterDetails(BankMasterModel model)
		{
			var data = bankMasterRepo.SaveBankMaster(model);
			return Ok(data);
		}
		
		public IHttpActionResult GetBankMasterDetail(int id)
		{
			var data = bankMasterRepo.GetBankMasterDetail(id);
			return Ok(data);
		}
		public IHttpActionResult UpdateBankMasterDetails(BankMasterModel model)
		{
			var data = bankMasterRepo.UpdateBankMasterDetails(model);
			return Ok(data);
		}
		public IHttpActionResult DeleteBankMasterDetail(int id)
		{
			var data = bankMasterRepo.DeleteBankMasterDetails(id);
			return Ok(data);
		}
		
    }
}
