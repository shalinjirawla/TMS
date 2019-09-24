using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface ILedgerRepo
    {
        List<LedgerModel> GetLedgerModels();
        bool SaveLedger(LedgerModel model);
        LedgerModel GetLedgerModel(int id);
        bool UpdateLedger(LedgerModel model);
        bool DeleteLedger(int id);
    }
}
