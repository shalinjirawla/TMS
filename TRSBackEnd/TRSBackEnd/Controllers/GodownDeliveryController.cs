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
    public class GodownDeliveryController : ApiController
    {
        private readonly IGodownDeliveryRepo godownDeliveryRepo;
        public GodownDeliveryController(IGodownDeliveryRepo godownDelivery)
        {
            godownDeliveryRepo = godownDelivery;
        }

        public IHttpActionResult GetGodownDeliveryModels()
        {
            var data = godownDeliveryRepo.GetGodownDeliveryModels();
            return Ok(data);
        }

        public IHttpActionResult SaveGodownDelivery(GodownDeliveryModel model)
        {
            var data = godownDeliveryRepo.SaveGodownDelivery(model);
            return Ok(data);
        }

        public IHttpActionResult GetGodownDeliveryModel(int id)
        {
            var data = godownDeliveryRepo.GetGodownDeliveryModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateGodownDelivery(GodownDeliveryModel model)
        {
            var data = godownDeliveryRepo.UpdateGodownDelivery(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteGodownDelivery(int id)
        {
            var data = godownDeliveryRepo.DeleteGodownDelivery(id);
            return Ok(data);
        }
    }
}
