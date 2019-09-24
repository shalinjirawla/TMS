using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface ITruckUnloadingRepo
    {
        List<TruckUnloadingModel> GetTruckUnloadingModels();
        bool SaveTruckUnloading(TruckUnloadingModel model);
        TruckUnloadingModel GetTruckUnloadingModel(int id);
        bool UpdateTruckUnloading(TruckUnloadingModel model);
        bool DeleteTruckUnloading(int id);
    }
}
