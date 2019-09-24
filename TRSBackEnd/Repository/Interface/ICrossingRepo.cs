using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface ICrossingRepo
    {
        bool SaveCrossing(CrossingModel model);
        CrossingModel GetCrossing(int id);
        List<CrossingModel> GetCrossings();
        bool UpdateCrossing(CrossingModel model);
        bool DeleteCrossing(int id);
    }
}
