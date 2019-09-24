using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IRTORepo
    {
        bool SaveRTO(RTOModel model);
        List<RTOModel> GetRTOs();
         bool UpdateRTO(RTOModel model);
        bool DeleteRTO(int id);
        RTOModel GetRTO(int id);
    }
}
