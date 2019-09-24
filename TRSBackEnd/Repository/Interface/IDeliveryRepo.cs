using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IDeliveryRepo
    {
        List<DeliveryModel> GetDeliveryModels();
        bool SaveDelivery(DeliveryModel model);
        DeliveryModel GetDeliveryModel(int id);
        bool UpdateDelivery(DeliveryModel model);
        bool DeleteDelivery(int id);
    }
}
