using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface ITruckArrivalRepo
    {
        List<TruckArrivalModel> GetTruckArrivalModels();
        bool SaveTruckArrival(TruckArrivalModel model);
        TruckArrivalModel GetTruckArrivalModel(int id);
        bool UpdateTruckArrival(TruckArrivalModel model);
        bool DeleteTruckArrival(int id);
    }
}
