using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Repository;
using Repository.Model;

namespace Repository.Interface
{
    public interface IVehicleModelRepo
    {
        List<VehicleModel> GetVehicleModels();
        bool SaveVehicleModel(VehicleModel model);
        VehicleModel GetVehicleModel(int id);
        bool DeleteVehicleModel(int id);
        bool UpdateVehicleModel(VehicleModel model);
    }
}
