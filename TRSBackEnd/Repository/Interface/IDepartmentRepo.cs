using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IDepartmentRepo
    {
        List<DepartmentModel> GetDepartments();
        bool SaveDepartment(DepartmentModel model);
        DepartmentModel GetDepartment(int id);
        bool UpdateDepartment(DepartmentModel model);
        bool DeleteDepartment(int id);
    }
}
