using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IContractRepo
    {
        bool SaveContract(ContractModel model);
        List<ContractModel> GetContracts();
        bool UpdateContract(ContractModel model);
        ContractModel GetContract(int id);
        bool DeleteContract(int id);
    }
}
