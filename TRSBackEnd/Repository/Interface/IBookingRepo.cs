using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IBookingRepo
    {
        List<BookingModel> GetBookings();
        bool SaveBooking(BookingModel model);
        bool DeleteBooking(int id);
        bool UpadateBooking(BookingModel model);
        BookingModel GetBooking(int id);
		List<BookingModel> GetBookingDashBoard();

	}
}
