using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IDriverRepo
    {
        List<DriverModel> GetDriverModels();
        bool SaveDriver(DriverModel model);
        bool DeleteDriver(int id);
        bool UpdateDriver(DriverModel model);
        DriverModel GetDriverModel(int id);
    }
}
