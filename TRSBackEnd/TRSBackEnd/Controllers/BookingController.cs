using Repository.Interface;
using Repository.Model;
using System.Web.Http;


namespace TRSBackEnd.Controllers
{
    public class BookingController : ApiController
    {
        private readonly IBookingRepo booking;
     
        public BookingController(IBookingRepo _booking)
        {
            booking = _booking;
        }
      
        public IHttpActionResult GetBookings()
        {
            var data = booking.GetBookings();
            return Ok(data);
        }
        [HttpPost]
        public IHttpActionResult SaveBooking(BookingModel model)
        {
            var data = booking.SaveBooking(model);

            return Ok(data);
        }
        public IHttpActionResult DeleteBooking(int id)
        {
            var data = booking.DeleteBooking(id);
            return Ok(data);
        }
        public IHttpActionResult UpadateBooking(BookingModel model)
        {
            var data = booking.UpadateBooking(model);
            return Ok(data);
        }
        public IHttpActionResult GetBooking(int id)
        {
            var data = booking.GetBooking(id);
            return Ok(data);
        }
		public IHttpActionResult GetDashBoardbooking()
		{
			var data = booking.GetBookingDashBoard();
			return Ok(data);
		}
    }
}
