using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.Model;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class ContractController : ApiController
    {
        private readonly IContractRepo contractRepo;
        public ContractController(IContractRepo _contractRepo)
        {
            contractRepo = _contractRepo;
        }
        public IHttpActionResult SaveContract(ContractModel model)
        {
            var data = contractRepo.SaveContract(model);
            return Ok(data);
        }
        public IHttpActionResult GetContract(int id)
        {
            var data = contractRepo.GetContract(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateContract(ContractModel model)
        {
            var data = contractRepo.UpdateContract(model);
            return Ok(data);
        }
        public IHttpActionResult GetContracts()
        {
            var data = contractRepo.GetContracts();
            return Ok(data);
        }
        public IHttpActionResult DeleteContract(int id)
        {
            var data = contractRepo.DeleteContract(id);
            return Ok(data);
        }
    }
}
