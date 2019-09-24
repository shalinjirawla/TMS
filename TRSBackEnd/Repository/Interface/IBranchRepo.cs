using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IBranchRepo
    {
        bool SaveBranch(BranchModel model);
        List<BranchModel> GetBranches();
        bool UpdateBranch(BranchModel model);
        bool DeleteData(int id);
        BranchModel getBranch(int id);
    }
}
