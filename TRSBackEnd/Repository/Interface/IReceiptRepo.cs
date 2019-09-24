using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.DB;
using Repository.Interface;
using Repository.Model;

namespace Repository.Interface
{
    public interface IReceiptRepo
    {
        List<ReceiptModel> GetReceiptModels();
        bool SaveReceipt(ReceiptModel model);
        ReceiptModel GetReceiptModel(int id);
        bool UpdateReceipt(ReceiptModel model);
        bool DeleteReceipt(int id);
    }
}
