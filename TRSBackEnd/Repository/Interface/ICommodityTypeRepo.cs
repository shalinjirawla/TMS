using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.DB;

namespace Repository.Interface
{
    public interface ICommodityTypeRepo
    {
        List<CommodityTypeModel> GetCommodityTypes();
        CommodityTypeModel GetCommodityType(int id);
        bool SaveCommodityType(CommodityTypeModel model);
        bool UpdateCommodityType(CommodityTypeModel model);
        bool DeleteCommodityType(int id);

    }
}
