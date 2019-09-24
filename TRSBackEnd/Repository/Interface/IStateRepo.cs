using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IStateRepo
    {
        bool SaveData(StateModel model);
        List<StateModel> GetStates();
        bool UpdateData(StateModel model);
        bool DeleteData(int id);
        StateModel getState(int id);
    }
}
