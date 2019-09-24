using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.Interface;
using Repository.DB;

namespace Repository.Repository
{
    public class VehicleTypeRepo:IVehicleTypeRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public VehicleTypeRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        //public List<VehicleTypeModel> GetVehicleTypeModels()
        //{
        //    try
        //    {
        //        var data = tRSEntities4.VehicleTypeMasters.Where(x => x.IsActive == true).ToList();
        //        List<VehicleTypeModel> model = new List<VehicleTypeModel>();
        //        if (data!=null)
        //        {
        //            foreach (var item in data)
        //            {
        //                VehicleTypeModel vehicleType = new VehicleTypeModel();
        //                vehicleType.id = item.id;
        //                vehicleType.name = item.name;
        //                model.Add(vehicleType);
        //            }
        //        }
        //        return model;
        //    }
        //    catch (Exception e)
        //    {

        //        throw e;
        //    }
        //}GetVehicleModels
        public List<VehicleTypeModel> GetVehicleTypeModels()
        {
            try
            {
                List<VehicleTypeModel> typeModels = new List<VehicleTypeModel>();
                var data = tRSEntities4.VehicleTypeMasters.Where(x => x.IsActive == true).ToList();
                foreach (var item in data)
                {
                    VehicleTypeModel model = new VehicleTypeModel
                    {
                        id = item.id,
                        name = item.name,
                        IsActive = item.IsActive,
                    };
                    typeModels.Add(model);
                }
                return typeModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveVehicleType(VehicleTypeModel model)
        {
            try
            {
                if (model !=null)
                {
                    VehicleTypeMaster vehicleType = new VehicleTypeMaster();
                    vehicleType.name = model.name;
                    vehicleType.IsActive = true;
                    tRSEntities4.VehicleTypeMasters.Add(vehicleType);
                    tRSEntities4.SaveChanges();
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
        public VehicleTypeModel GetVehicleType(int id)
        {
            VehicleTypeModel model = new VehicleTypeModel();
            try
            {
                var data = tRSEntities4.VehicleTypeMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (data !=null)
                {
                    model.id = data.id;
                    model.name = data.name;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {

                throw  e;
            }
            return model;
        }
        public bool UpdateVehicleType(VehicleTypeModel model)
        {
            try
            {
                var data = tRSEntities4.VehicleTypeMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.name = model.name;
                    tRSEntities4.SaveChanges();
                }
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool DeleteVehicleType(int id)
        {
            try
            {
                var data = tRSEntities4.VehicleTypeMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (data!=null)
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
