using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.DB;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class ConsignmentController : ApiController
    {
        private readonly IConsignmentRepo consignment;
        public ConsignmentController(IConsignmentRepo repo)
        {
            consignment = repo;
        }

        public IHttpActionResult GetConsignmentModels()
        {
            var data = consignment.GetConsignmentModels();
            return Ok(data);
        }

        public IHttpActionResult SaveConsignment(ConsignmentModel model)
        {
            var data = consignment.SaveConsignment(model);
            return Ok(data);
        }
        public IHttpActionResult GetConsignmentModel(int id)
        {
            var data = consignment.GetConsignmentModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateConsignment(ConsignmentModel model)
        {
            var data = consignment.UpdateConsignment(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteConsignment(int id)
        {
            var data = consignment.DeleteConsignment(id);
            return Ok(data);
        }
    }
}
