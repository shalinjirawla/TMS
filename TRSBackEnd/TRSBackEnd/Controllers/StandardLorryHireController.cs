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
    public class StandardLorryHireController : ApiController
    {
        private readonly IStandardLorryHireRepo standardLorryHire;
        public StandardLorryHireController(IStandardLorryHireRepo lorryHireRepo)
        {
            standardLorryHire = lorryHireRepo;
        }
        public IHttpActionResult GetStandardLorryHires()
        {
            var data = standardLorryHire.GetStandardLorryHires();
            return Ok(data);
        }
        public IHttpActionResult SaveStandardLorryHire(StandardLorryHireModel model)
        {
            var data = standardLorryHire.SaveStandardLorryHire(model);
            return Ok(data);
        }
        public IHttpActionResult GetStandardLorryHire(int id)
        {
            var data = standardLorryHire.GetStandardLorryHire(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateStandardLorryHire(StandardLorryHireModel model)
        {
            var data = standardLorryHire.UpdateStandardLorryHire(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteStandardLorryHire(int id)
        {
            var data = standardLorryHire.DeleteStandardLorryHire(id);
            return Ok(data);
        }
    }
}
