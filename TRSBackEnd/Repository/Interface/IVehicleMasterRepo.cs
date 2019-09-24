using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface  IVehicleMasterRepo
    {
        List<VehicleMasterModel> GetVehicleMasters();
        bool SaveVehicleMaster(VehicleMasterModel model);
        bool UpdateVehicle(VehicleMasterModel model);
        VehicleMasterModel GetVehicleModel(int id);
        bool DeleteVehicle(int id);
    }
}
