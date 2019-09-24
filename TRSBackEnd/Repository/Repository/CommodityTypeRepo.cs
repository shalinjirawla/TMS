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
    public class CommodityTypeRepo : ICommodityTypeRepo
    {
        private readonly TRSEntities4 _tRSEntities4;
        public CommodityTypeRepo()
        {
            _tRSEntities4 = new TRSEntities4();
        }
        public List<CommodityTypeModel> GetCommodityTypes()
        {
            try
            {
                List<CommodityTypeModel> models = new List<CommodityTypeModel>();
                var data = _tRSEntities4.CommodityTypeMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    CommodityTypeModel commodity = new CommodityTypeModel
                    {
                        id = item.id,
                        Name = item.Name,
                        isActive = (bool)item.isActive,
                    };
                    models.Add(commodity);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveCommodityType(CommodityTypeModel model)
        {
            try
            {
                CommodityTypeMaster master = new CommodityTypeMaster ()
                {
                    Name = model.Name,
                    isActive = true,
                };
                if (!CheckIdNameExists(model.Name))
                {
                    _tRSEntities4.CommodityTypeMasters.Add(master);
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

        public bool CheckIdNameExists(string val)
        {
            var has = _tRSEntities4.CommodityTypeMasters.Where(x => x.Name == val).FirstOrDefault();
            if (has != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public CommodityTypeModel GetCommodityType(int id)
        {
            try
            {
                var check = _tRSEntities4.CommodityTypeMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    CommodityTypeModel commodity = new CommodityTypeModel();
                    commodity.id = check.id;
                    commodity.Name = check.Name;
                    check.isActive =(bool)commodity.isActive;
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

        public bool UpdateCommodityType(CommodityTypeModel model)
        {
            try
            {
                var check = _tRSEntities4.CommodityTypeMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    check.Name = model.Name;
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

        public bool DeleteCommodityType(int id)
        {
            try
            {
                var data = _tRSEntities4.CommodityTypeMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
