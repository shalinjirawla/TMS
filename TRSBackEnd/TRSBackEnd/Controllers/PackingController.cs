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
    public class PackingController : ApiController
    {
        private readonly IPackingRepo packing;
        public PackingController(IPackingRepo _packing)
        {
            packing = _packing;
        }
        public IHttpActionResult GetPackings()
        {
            var data = packing.GetPackings();
            return Ok(data);
        }
        public IHttpActionResult SavePacking(PackingModel model)
        {
            var data = packing.SavePacking(model);
            return Ok(data);
        }
    }
}
