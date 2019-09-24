using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IOutwardRepo
    {
        List<OutwardModel> GetOutwardModels();
        bool SaveOutward(OutwardModel model);
        OutwardModel GetOutwardModel(int id);
        bool UpdateOutward(OutwardModel model);
        bool DeleteOutward(int id);
    }
}
