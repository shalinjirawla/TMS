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
    public class CommodityTypeController : ApiController
    {
        private readonly ICommodityTypeRepo commodityRepo;
        public CommodityTypeController(ICommodityTypeRepo _commodity)
        {
            commodityRepo = _commodity;
        }
        public IHttpActionResult GetCommodityTypes()
        {
            var data = commodityRepo.GetCommodityTypes();
            return Ok(data);
        }
        public IHttpActionResult UpdateCommodityType(CommodityTypeModel model)
        {
            var data = commodityRepo.UpdateCommodityType(model);
            return Ok(data);
        }
        public IHttpActionResult GetCommodityType(int id)
        {
            var data = commodityRepo.GetCommodityType(id);
            return Ok(data);
        }
        public IHttpActionResult SaveCommodityType(CommodityTypeModel model)
        {
            var data = commodityRepo.SaveCommodityType(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteCommodityType(int id)
        {
            var data = commodityRepo.DeleteCommodityType(id);
            return Ok(data);
        }
    }
}
