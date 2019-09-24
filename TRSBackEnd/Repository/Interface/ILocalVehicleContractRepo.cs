using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface ILocalVehicleContractRepo
    {
        List<LocalVehicleContractModel> GetVehicleContractModels();
        bool SaveLocalVehicleContract(LocalVehicleContractModel model);
        bool DeleteLocalVehicleContract(int id);
        bool UpdateLocalVehicleContract(LocalVehicleContractModel model);
        LocalVehicleContractModel GetVehicleContractModel(int id);
    }
}
