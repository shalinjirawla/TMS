using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
   public interface IAreaRepo
    {
        List<AreaModel> GetAreas();
        bool SaveArea(AreaModel areaModel);
        bool UpdateArea(AreaModel areaModel);
        AreaModel GetArea(int id);
        bool DeleteArea(int id);
    }
}
