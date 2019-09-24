using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public  interface IDoorDeliveryConfirmRepo
    {
        List<DoorDeliveryConfirmModel> GetDoorDeliveryConfirmModels();
        bool SaveDeliveryConfirm(DoorDeliveryConfirmModel model);
        DoorDeliveryConfirmModel GetDoorDeliveryConfirmModel(int id);
        bool UpdateDoorDeliveryConfirm(DoorDeliveryConfirmModel model);
        bool DeleteDoorDeliveryConfirm(int id);
    }
}
