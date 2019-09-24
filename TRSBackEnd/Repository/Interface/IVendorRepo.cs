using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IVendorRepo
    {
        List<VendorModel> GetVendorModels();
        bool SaveVender(VendorModel model);
        VendorModel GetVendorModel(int id);
        bool UpdateVendor(VendorModel model);
        bool DeleteVendor(int id);
    }
}
