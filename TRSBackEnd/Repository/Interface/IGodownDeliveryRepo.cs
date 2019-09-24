using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IGodownDeliveryRepo
    {
        List<GodownDeliveryModel> GetGodownDeliveryModels();
        bool SaveGodownDelivery(GodownDeliveryModel model);
        GodownDeliveryModel GetGodownDeliveryModel(int id);
        bool UpdateGodownDelivery(GodownDeliveryModel model);
        bool DeleteGodownDelivery(int id);
    }
}
