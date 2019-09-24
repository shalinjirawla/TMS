using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface ICostCentreRepo
    {
        List<CostCentreModel> GetCostCentreModels();
        bool SaveCostCentre(CostCentreModel model);
        CostCentreModel GetCostCentreModel(int id);
        bool UpdateCostCentre(CostCentreModel model);
        bool DeleteCOstCentre(int id);
    }
}
