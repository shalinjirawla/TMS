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
    public class PackingTypeRepo:IPackingTypeRepo
    {
        private readonly TRSEntities4 _tRSEntities4;
        public PackingTypeRepo()
        {
            _tRSEntities4 = new TRSEntities4();
        }
        public List<PackingTypeModel> GetPackingTypes()
        {
            try
            {
                List<PackingTypeModel> models = new List<PackingTypeModel>();
                var data = _tRSEntities4.PackingTypeMasters.Where(x => x.IsActive == true).ToList();
                foreach (var item in data)
                {
                    PackingTypeModel db = new PackingTypeModel
                    {
                        id = item.id,
                        name = item.name,
                        IsActive = (bool)item.IsActive,
                    };
                    models.Add(db);
                }
                return models;
            }
            catch (Exception  e)
            {

                throw e;
            }
        }

        public bool SavePackingType(PackingTypeModel model)
        {
            try
            {
                PackingTypeMaster master = new PackingTypeMaster()
                {
                    name = model.name,
                    IsActive = true,
                };
                if (!CheckIfNameExists(model.name))
                {
                    _tRSEntities4.PackingTypeMasters.Add(master);
                    _tRSEntities4.SaveChanges();
                    return true;
                }
                else
               
                    return false;
                
               
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool CheckIfNameExists(string val)
        {
            var has = _tRSEntities4.CommodityMasters.Where(x => x.name == val).FirstOrDefault();
            if (has != null)
                return true;
            else
                return false;
        }

        public PackingTypeModel GetPackingType(int id)
        {
            try
            {
                var check = _tRSEntities4.PackingTypeMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (check != null)
                {
                    PackingTypeModel commodity = new PackingTypeModel();
                    commodity.id = check.id;
                    commodity.name = check.name;
                    check.IsActive = (bool)commodity.IsActive;
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

        public bool UpdatePackingType(PackingTypeModel model)
        {
            try
            {
                var check = _tRSEntities4.PackingTypeMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
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

        public bool DeletepackingType(int id)
        {
            try
            {
                var data = _tRSEntities4.PackingTypeMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.IsActive = false;
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
