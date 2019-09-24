using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IWalkinClientRepo
    {
        List<WalkinClientModel> GetWalkInClients();
        bool SaveWalkInClient(WalkinClientModel model);
        bool DeleteWalkInClient(int id);
        bool UpdateWalkInClient(WalkinClientModel model);
        WalkinClientModel GetWalkinClient(int id);
    }
}
