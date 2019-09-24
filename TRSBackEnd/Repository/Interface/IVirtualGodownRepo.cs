using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IVirtualGodownRepo
    {
        bool SaveVirualGodown(VirtualGodownModel model);
        List<VirtualGodownModel> GetVirualGodowns();
        bool UpdateVirualGodown(VirtualGodownModel model);
        bool DeleteVirualGodown(int id);
        VirtualGodownModel GetVirualGodown(int id);
    }
}
