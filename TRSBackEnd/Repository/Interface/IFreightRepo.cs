using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IFreightRepo
    {
        bool SaveFreight(FreightModel model);
        FreightModel GetFreight(int id);
        List<FreightModel> GetFreights();
        bool UpdateFreight(FreightModel model);
        bool DeleteFreight(int id);
    }
}
