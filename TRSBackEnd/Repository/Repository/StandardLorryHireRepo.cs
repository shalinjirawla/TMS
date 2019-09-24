using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.DB;
using Repository.Interface;
using Repository.Model;

namespace Repository.Repository
{
    public class StandardLorryHireRepo:IStandardLorryHireRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public StandardLorryHireRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<StandardLorryHireModel> GetStandardLorryHires()
        {
            try
            {
                List<StandardLorryHireModel> hireModels = new List<StandardLorryHireModel>();
                var data = tRSEntities4.StandardLorryHireMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    StandardLorryHireModel model = new StandardLorryHireModel
                    {
                        id = item.id,
                        date = item.date,
                        vehicleType = item.vehicleType,
                        vehiclecpacityMT = item.vehiclecpacityMT,
                        from = item.from,
                        to = item.to,
                        lorryhire = item.lorryhire,
                        isActive = (bool)item.isActive,
                        vehicleTypename = tRSEntities4.VehicleTypeMasters.Where(x => x.id == item.vehicleType).Select(x => x.name).FirstOrDefault(),
                    };
                    hireModels.Add(model);
                }
                return hireModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool SaveStandardLorryHire(StandardLorryHireModel model)
        {
            try
            {
                if (model!=null)
                {
                    StandardLorryHireMaster standard = new StandardLorryHireMaster();
                    standard.date = model.date;
                    standard.vehicleType = model.vehicleType;
                    standard.vehiclecpacityMT = model.vehiclecpacityMT;
                    standard.from = model.from;
                    standard.to = model.to;
                    standard.lorryhire = model.lorryhire;
                    standard.isActive = true;
                    tRSEntities4.StandardLorryHireMasters.Add(standard);
                    tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception  e)
            {

                throw e;
            }
        }
        public StandardLorryHireModel GetStandardLorryHire(int id)
        {
            try
            {
                var data = tRSEntities4.StandardLorryHireMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    StandardLorryHireModel model = new StandardLorryHireModel();
                    model.id = data.id;
                    model.date = data.date;
                    model.vehicleType = data.vehicleType;
                    model.vehiclecpacityMT = data.vehiclecpacityMT;
                    model.from = data.from;
                    model.to = data.to;
                    model.lorryhire = data.lorryhire;
                    model.isActive = (bool)data.isActive;
                    return model;
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
        public bool UpdateStandardLorryHire(StandardLorryHireModel model)
        {
            try
            {
                var data = tRSEntities4.StandardLorryHireMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.date = model.date;
                    data.vehicleType = model.vehicleType;
                    data.vehiclecpacityMT = model.vehiclecpacityMT;
                    data.from = model.from;
                    data.to = model.to;
                    data.lorryhire = model.lorryhire;
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
        public bool DeleteStandardLorryHire(int id)
        {
            try
            {
                var data = tRSEntities4.StandardLorryHireMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
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
