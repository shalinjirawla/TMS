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
    public class OutwardController : ApiController
    {
        private readonly IOutwardRepo outwardRepo;
        public OutwardController(IOutwardRepo outward)
        {
            outwardRepo = outward;
        }
        public IHttpActionResult GetOutwardModels()
        {
            var data = outwardRepo.GetOutwardModels();
            return Ok(data);
        }
        public IHttpActionResult SaveOutward(OutwardModel model)
        {
            var data = outwardRepo.SaveOutward(model);
            return Ok(data);
        }
        public  IHttpActionResult GetOutwardModel(int id)
        {
            var data = outwardRepo.GetOutwardModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateOutward(OutwardModel model)
        {
            var data = outwardRepo.UpdateOutward(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteOutward(int id)
        {
            var data = outwardRepo.DeleteOutward(id);
            return Ok(data);
        }
    }
}
