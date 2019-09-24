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
    public class DoorDeliveryConfirmController : ApiController
    {
        public readonly IDoorDeliveryConfirmRepo doorDeliveryConfirm;
        public DoorDeliveryConfirmController(IDoorDeliveryConfirmRepo doorDelivery)
        {
            doorDeliveryConfirm = doorDelivery;
        }

        public IHttpActionResult GetDoorDeliveryConfirmModels()
        {
            var data = doorDeliveryConfirm.GetDoorDeliveryConfirmModels();
            return Ok(data);
        }

        public IHttpActionResult SaveDeliveryConfirm(DoorDeliveryConfirmModel model)
        {
            var data = doorDeliveryConfirm.SaveDeliveryConfirm(model);
            return Ok(data);
        }

        public IHttpActionResult GetDoorDeliveryConfirmModel(int id)
        {
            var data = doorDeliveryConfirm.GetDoorDeliveryConfirmModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateDoorDeliveryConfirm(DoorDeliveryConfirmModel model)
        {
            var data = doorDeliveryConfirm.UpdateDoorDeliveryConfirm(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteDoorDeliveryConfirm(int id)
        {
            var data = doorDeliveryConfirm.DeleteDoorDeliveryConfirm(id);
            return Ok(data);
        }
    }
}
