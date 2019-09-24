using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Model;
using Repository.Interface;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class InwardController : ApiController
    {
        private readonly IInwardRepo inwardRepo;
        public InwardController(IInwardRepo inward)
        {
            inwardRepo = inward;
        }
        public IHttpActionResult GetInwardModels()
        {
            var data = inwardRepo.GetInwardModels();
            return Ok(data);
        }
        public IHttpActionResult SaveInward(InwardModel model)
        {
            var data = inwardRepo.SaveInward(model);
            return Ok(data);
        }
        public IHttpActionResult GetInwardMaster(int id)
        {
            var data = inwardRepo.GetInwardMaster(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateInward(InwardModel model)
        {
            var data = inwardRepo.UpdateInward(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteInward(int id)
        {
            var data = inwardRepo.DeleteInward(id);
            return Ok(data);
        }
    }
}
