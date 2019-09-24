using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IDDLocalChallanRepo
    {
        List<DDLocalChallanModel> GetDDLocalChallanModels();
        bool SaveDDLocalChallan(DDLocalChallanModel model);
        DDLocalChallanModel GetDDLocalChallanModel(int id);
        bool UpdateDDLocalChallan(DDLocalChallanModel model);
        bool DeleteDDLocalChallan(int id);
    }
}
