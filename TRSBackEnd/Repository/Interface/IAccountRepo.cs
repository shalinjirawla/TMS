using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IAccountRepo
    {
        List<AccountModel> GetAccountModels();
        bool SaveAccount(AccountModel model);
        AccountModel GetAccountModel(int id);
        bool UpdateAccount(AccountModel model);
        bool DeleteAccount(int id);
    }
}
