using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IConsignmentRepo
    {
        List<ConsignmentModel> GetConsignmentModels();
        bool SaveConsignment(ConsignmentModel model);
        ConsignmentModel GetConsignmentModel(int id);
        bool UpdateConsignment(ConsignmentModel model);
        bool DeleteConsignment(int id);
    }
}
