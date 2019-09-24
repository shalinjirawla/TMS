using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IPackingTypeRepo
    {
        List<PackingTypeModel> GetPackingTypes();
        PackingTypeModel GetPackingType(int id);
        bool SavePackingType(PackingTypeModel model);
        bool UpdatePackingType(PackingTypeModel model);
        bool DeletepackingType(int id);
    }
}
