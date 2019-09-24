using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Model;
using Repository.DB;
using Repository.Interface;

namespace TRSBackEnd.Controllers
{
    public class DeliveryController : ApiController
    {
        private readonly IDeliveryRepo deliveryRepo;
        public DeliveryController(IDeliveryRepo delivery)
        {
            deliveryRepo = delivery;
        }
        public IHttpActionResult GetDeliveryModels()
        {
            var data = deliveryRepo.GetDeliveryModels();
            return Ok(data);
        }
        public IHttpActionResult SaveDelivery(DeliveryModel model)
        {
            var data = deliveryRepo.SaveDelivery(model);
            return Ok(data);
        }
        public IHttpActionResult GetDeliveryModel(int id)
        {
            var data = deliveryRepo.GetDeliveryModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateDelivery(DeliveryModel model)
        {
            var data = deliveryRepo.UpdateDelivery(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteDelivery(int id)
        {
            var data = deliveryRepo.DeleteDelivery(id);
            return Ok(data);
        }
    }
}
