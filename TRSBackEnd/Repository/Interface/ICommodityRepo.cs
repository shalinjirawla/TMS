using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Interface;
using Repository.DB;
using Repository.Model;

namespace Repository.Interface
{
    public interface ICommodityRepo
    {
        List<CommodityModel> GetCommodities();
        bool SaveCommodity(CommodityModel model);
        CommodityModel GetCommodity(int id);
        bool UpdateCommodity(CommodityModel model);
        bool DeleteCommodity(int id);
    }
}
