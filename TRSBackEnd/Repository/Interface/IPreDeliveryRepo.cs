using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IPreDeliveryRepo
    {
        List<PreDeliveryModel> GetPreDeliveryModels();
        bool SavePreDeliveryModel(PreDeliveryModel model);
        PreDeliveryModel GetPreDeliveryModel(int id);
        bool UpdatePreDelivery(PreDeliveryModel model);
        bool DeletePreDelivery(int id);
    }
}
