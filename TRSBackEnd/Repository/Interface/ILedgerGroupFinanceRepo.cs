using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface ILedgerGroupFinanceRepo
    {
        List<LedgerGroupFinanceModel> GetLedgerGroupFinanceModels();
        bool SaveLedgerGroupFinance(LedgerGroupFinanceModel model);
        LedgerGroupFinanceModel GetLedgerGroupFinanceModel(int id);
        bool UpdateLedgerGroupFinance(LedgerGroupFinanceModel model);
        bool DeleteLedgerGroupFinance(int id);
    }
}
