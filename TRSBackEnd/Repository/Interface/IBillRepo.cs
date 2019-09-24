using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IBillRepo
    {
        List<BillModel> GetBillModels();
        bool SaveBill(BillModel model);
        BillModel GetBillRepo(int id);
        bool UpdateBill(BillModel model);
        bool DeleteBill(int id);
    }
}
