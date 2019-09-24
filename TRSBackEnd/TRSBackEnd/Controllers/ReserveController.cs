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
    public class ReserveController : ApiController
    {
        private readonly IReserveBookingRepo reserveBooking;
        public ReserveController (IReserveBookingRepo bookingRepo)
        {
            reserveBooking = bookingRepo;
        }
        public IHttpActionResult GetReserveBookingModels()
        {
            var data = reserveBooking.GetReserveBookingModels();
            return Ok(data);
        }
        public IHttpActionResult SaveReserveBooking(ReserveBookingModel model)
        {
            var data = reserveBooking.SaveReserveBooking(model);
            return Ok(data);
        }
        public IHttpActionResult GetReserveBookingModel(int id)
        {
            var data = reserveBooking.GetReserveBookingModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateReserveBooking(ReserveBookingModel model)
        {
            var data = reserveBooking.UpdateReserveBooking(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteReserveBooking(int id)
        {
            var data = reserveBooking.DeleteReserveBooking(id);
            return Ok(data);
        }
    }
}
