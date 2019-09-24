using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IGodownRepo
    {
        bool SaveGodown(GodownModel model);
        List<GodownModel> GetGodowns();
        bool UpdateData(GodownModel model);
        bool DeleteData(int id);
        GodownModel GetGodown(int id);
    }
}
