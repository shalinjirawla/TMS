using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.DB;
using Repository.Model;

namespace Repository.Interface
{
    public interface IServiceLocationRepo
    {
        bool SaveServiceLocation(ServiceLocationModel model);
        ServiceLocationModel GetServiceLocation(int id);
        List<ServiceLocationModel> GetServiceLocations();
        bool UpdateServiceLocation(ServiceLocationModel model);
        bool DeleteServiceLocation(int id);
    }
}
