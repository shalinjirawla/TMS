using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TRSBackEnd.Controllers
{
    public class FreightController : ApiController
    {
        private IFreightRepo freightRepo;
        // GET: FreightMaster
        public FreightController(IFreightRepo _freightRepo)
        {
            freightRepo = _freightRepo;
        }
        public IHttpActionResult GetFreights()
        {
            var data = freightRepo.GetFreights();
            return Ok(data);
        }
        public IHttpActionResult SaveFreight(FreightModel model)
        {
            var data = freightRepo.SaveFreight(model);
            return Ok(data);
        }

        public IHttpActionResult UpdateFreight(FreightModel model)
        {
            var data = freightRepo.UpdateFreight(model);
            return Ok(data);
        }

        public IHttpActionResult GetFreight(int id)
        {
            var data = freightRepo.GetFreight(id);
            return Ok(data);
        }

        public IHttpActionResult DeleteFreight(int id)
        {
            var data = freightRepo.DeleteFreight(id);
            return Ok(data);
        }
    }
}
