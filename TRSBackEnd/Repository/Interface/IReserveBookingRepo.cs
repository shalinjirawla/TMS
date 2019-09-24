using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IReserveBookingRepo
    {
        List<ReserveBookingModel> GetReserveBookingModels();
        bool SaveReserveBooking(ReserveBookingModel model);
        ReserveBookingModel GetReserveBookingModel(int id);
        bool UpdateReserveBooking(ReserveBookingModel model);
        bool DeleteReserveBooking(int id);
    }
}
