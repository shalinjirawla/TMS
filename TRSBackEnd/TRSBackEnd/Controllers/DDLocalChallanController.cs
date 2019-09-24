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
    public class DDLocalChallanController : ApiController
    {
        private readonly IDDLocalChallanRepo dDLocalChallan;
        public DDLocalChallanController(IDDLocalChallanRepo localChallanRepo)
        {
            dDLocalChallan = localChallanRepo;
        }

        public IHttpActionResult GetDDLocalChallanModels()
        {
            var data = dDLocalChallan.GetDDLocalChallanModels();
            return Ok(data);
        }

        public IHttpActionResult SaveDDLocalChallan(DDLocalChallanModel model)
        {
            var data = dDLocalChallan.SaveDDLocalChallan(model);
            return Ok(data);
        }

        public IHttpActionResult GetDDLocalChallanModel(int id)
        {
            var data = dDLocalChallan.GetDDLocalChallanModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateDDLocalChallan(DDLocalChallanModel model)
        {
            var data = dDLocalChallan.UpdateDDLocalChallan(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteDDLocalChallan(int id)
        {
            var data = dDLocalChallan.DeleteDDLocalChallan(id);
            return Ok(data);
        }
    }
}
