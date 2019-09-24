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
    public class CommodityController : ApiController
    {
        private readonly ICommodityRepo commodityRepo;
        public CommodityController(ICommodityRepo _commodity)
        {
            commodityRepo = _commodity;
        }
        public IHttpActionResult GetCommodities()
        {
            var data = commodityRepo.GetCommodities();
            return Ok(data);
        }
        public IHttpActionResult SaveCommodity(CommodityModel model)
        {
            var data = commodityRepo.SaveCommodity(model);
            return Ok(data);
        }
        public IHttpActionResult GetCommodity(int id)
        {
            var data = commodityRepo.GetCommodity(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateCommodity(CommodityModel model)
        {
            var data = commodityRepo.UpdateCommodity(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteCommodity(int id)
        {
            var data = commodityRepo.DeleteCommodity(id);
            return Ok(data);
        }
    }
}
