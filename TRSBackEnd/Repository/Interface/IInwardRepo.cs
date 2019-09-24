using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Interface;
using Repository.Model;
using Repository.DB;

namespace Repository.Interface
{
    public interface IInwardRepo
    {
        List<InwardModel> GetInwardModels();
        bool SaveInward(InwardModel model);
        InwardModel GetInwardMaster(int id);
        bool UpdateInward(InwardModel model);
        bool DeleteInward(int id);
    }
}
