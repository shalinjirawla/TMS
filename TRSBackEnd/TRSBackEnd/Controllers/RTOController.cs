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
    public class RTOController : ApiController
    {
        private readonly IRTORepo rTO;
        public RTOController(IRTORepo _rTO)
        {
            rTO = _rTO;
        }
        public IHttpActionResult GetRTOs()
        {
            var data = rTO.GetRTOs();
            return Ok(data);
        }
        [HttpPost]
        public IHttpActionResult SaveRTO(RTOModel model)
        {
            var data = rTO.SaveRTO(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteRTO(int id)
        {
            var data = rTO.DeleteRTO(id);
            return Ok(data);
        }
        public  IHttpActionResult UpdateRTO(RTOModel model)
        {
            var data = rTO.UpdateRTO(model);
            return Ok(data);
        }
        public IHttpActionResult GetRTO(int id)
        {
            var data = rTO.GetRTO(id);
            return Ok(data);
        }
    }
}
