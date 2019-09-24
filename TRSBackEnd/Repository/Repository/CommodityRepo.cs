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
    public class CommodityRepo:ICommodityRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public CommodityRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<CommodityModel> GetCommodities()
        {
            try
            {
                List<CommodityModel> models = new List<CommodityModel>();
                var data = tRSEntities4.CommodityMasters.Where(x => x.IsActive == true).ToList();
                foreach (var item in data)
                {
                    CommodityModel db = new CommodityModel
                    {
                        id = item.id,
                        name = item.name,
                        commodityType = item.commodityType,
                        IsRestricted = item.IsRestricted,
                        IsPerishable = item.IsPerishable,
                        IsActive = (bool)item.IsActive,
                        commodityTypename = tRSEntities4.CommodityTypeMasters.Where(x => x.id == item.commodityType).Select(x => x.Name).FirstOrDefault(),
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

        public bool SaveCommodity(CommodityModel  model)
            {
            try
            {
                CommodityMaster db = new CommodityMaster()
                {
                    IsActive = true,
                    name = model.name,
                    commodityType = model.commodityType,
                    IsRestricted = model.IsRestricted,
                    IsPerishable = model.IsPerishable,
                };
                if (!CheckIfNameExists(model.name))
                {
                    tRSEntities4.CommodityMasters.Add(db);
                    tRSEntities4.SaveChanges();
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
            var has = tRSEntities4.CommodityMasters.Where(x => x.name == val).FirstOrDefault();
            if (has != null)
                return true;
            else
                return false;
        }

        public CommodityModel GetCommodity(int id)
        {
            try
            {
                var check = tRSEntities4.CommodityMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (check != null)
                {
                    CommodityModel commodity = new CommodityModel();
                    commodity.id = check.id;
                    commodity.name = check.name;
                    commodity.commodityType = check.commodityType;
                    commodity.IsPerishable = check.IsPerishable;
                    commodity.IsRestricted = check.IsRestricted;
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

        public bool UpdateCommodity(CommodityModel model)
        {
            try
            {
                var check = tRSEntities4.CommodityMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if (check != null)
                {
                    check.name = model.name;
                    check.commodityType = model.commodityType;
                    check.IsPerishable = model.IsPerishable;
                    check.IsRestricted = model.IsRestricted;
                    //check.isActive = model.isActive;
                    tRSEntities4.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool DeleteCommodity(int id)
        {
            try
            {
                var data = tRSEntities4.CommodityMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.IsActive = false;
                    tRSEntities4.SaveChanges();
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
