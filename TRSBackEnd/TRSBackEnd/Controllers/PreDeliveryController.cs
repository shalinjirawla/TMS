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
    public class PreDeliveryController : ApiController
    {
        private readonly IPreDeliveryRepo preDelivery;
        public PreDeliveryController(IPreDeliveryRepo deliveryRepo)
        {
            preDelivery = deliveryRepo;
        }

        public IHttpActionResult GetPreDeliveryModels()
        {
            var data = preDelivery.GetPreDeliveryModels();
            return Ok(data);
        }

        public IHttpActionResult SavePreDeliveryModel(PreDeliveryModel model)
        {
            var data = preDelivery.SavePreDeliveryModel(model);
            return Ok(data);
        }

        public IHttpActionResult GetPreDeliveryModel(int id)
        {
            var data = preDelivery.GetPreDeliveryModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdatePreDelivery(PreDeliveryModel model)
        {
            var data = preDelivery.UpdatePreDelivery(model);
            return Ok(data);
        }

        public IHttpActionResult DeletePreDelivery(int id)
        {
            var data = preDelivery.DeletePreDelivery(id);
            return Ok(data);
        }
    }
}
