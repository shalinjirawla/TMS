using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;

namespace Repository.Interface
{
    public interface IStandardLorryHireRepo
    {
        List<StandardLorryHireModel> GetStandardLorryHires();
        bool SaveStandardLorryHire(StandardLorryHireModel model);
        StandardLorryHireModel GetStandardLorryHire(int id);
        bool UpdateStandardLorryHire(StandardLorryHireModel model);
        bool DeleteStandardLorryHire(int id);
    }
}
