using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Interface;
using Repository.DB;
using Repository.Model;

namespace Repository.Repository
{
    public class DepartmentRepo: IDepartmentRepo
    {
        private readonly TRSEntities4 _tRSEntities4;
        public DepartmentRepo()
        {
            _tRSEntities4 = new TRSEntities4();
        }
        public List<DepartmentModel> GetDepartments()
        {
            try
            {
                List<DepartmentModel> models = new List<DepartmentModel>();
                var data = _tRSEntities4.DepartmentMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    DepartmentModel db = new DepartmentModel
                    {
                        id = item.id,
                        name = item.name,
                        isActive = (bool)item.isActive,
                    };
                    models.Add(db);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveDepartment(DepartmentModel model)
        {
            try
            {
                DepartmentMaster master = new DepartmentMaster()
                {
                    isActive = true,
                    name = model.name,
                };
                if (!CheckIfNameExists(model.name))
                {
                    _tRSEntities4.DepartmentMasters.Add(master);
                    _tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool CheckIfNameExists(string val)
        {
            var has = _tRSEntities4.DepartmentMasters.Where(x => x.name == val).FirstOrDefault();
            if (has != null)
                return true;
            else
                return false;
        }

        public DepartmentModel GetDepartment(int id)
        {
            try
            {
                var check = _tRSEntities4.DepartmentMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    DepartmentModel commodity = new DepartmentModel();
                    commodity.id = check.id;
                    commodity.name = check.name;
                    check.isActive = (bool)commodity.isActive;
                    return commodity;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdateDepartment(DepartmentModel model)
        {
            try
            {
                var check = _tRSEntities4.DepartmentMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    check.name = model.name;
                    //check.isActive = model.isActive;
                    _tRSEntities4.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool DeleteDepartment(int id)
        {
            try
            {
                var data = _tRSEntities4.DepartmentMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.isActive = false;
                    _tRSEntities4.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
    }
}
