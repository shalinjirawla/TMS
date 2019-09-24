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
    public class TruckArrivalController : ApiController
    {
        private readonly ITruckArrivalRepo truckArrival;
        public TruckArrivalController(ITruckArrivalRepo arrivalRepo)
        {
            truckArrival = arrivalRepo;
        }
        
        public IHttpActionResult GetTruckArrivalModels()
        {
            var data = truckArrival.GetTruckArrivalModels();
            return Ok(data);
        }

        public IHttpActionResult SaveTruckArrival(TruckArrivalModel model)
        {
            var data = truckArrival.SaveTruckArrival(model);
            return Ok(data);
        }

        public IHttpActionResult GetTruckArrivalModel(int id)
        {
            var data = truckArrival.GetTruckArrivalModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateTruckArrival(TruckArrivalModel model)
        {
            var data = truckArrival.UpdateTruckArrival(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteTruckArrival(int id)
        {
            var data = truckArrival.DeleteTruckArrival(id);
            return Ok(data);
        }
    }
}
