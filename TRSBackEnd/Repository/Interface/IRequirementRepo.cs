using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IRequirementRepo
    {
        List<RequirementModel> GetRequirementModels();
        int SaveRequirement(RequirementModel model);
        RequirementModel GetRequirement(int id);
        bool UpdateRequirement(RequirementModel model);
        bool DeleteRequirement(int id);
    }
}
