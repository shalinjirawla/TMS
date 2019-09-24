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
    public class VehicleModelRepo: IVehicleModelRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public VehicleModelRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<VehicleModel> GetVehicleModels()
        {
            try
            {
                List<VehicleModel> vehicleTypes = new List<VehicleModel>();
                var data = tRSEntities4.VehicleModelMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    VehicleModel model = new VehicleModel
                    {
                        id = item.id,
                        //name = item.name,
                        modelname = item.modelname,
                        manufacturername = item.manufacturername,
                        vehicleweightinMT = item.vehicleweightinMT,
                        vehiclecapacity = item.vehiclecapacity,
                        length = item.length,
                        width = item.width,
                        height = item.height,
                        isActive = (bool)item.isActive,
                    };
                    vehicleTypes.Add(model);
                }
                return vehicleTypes;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool SaveVehicleModel(VehicleModel model)
        {
            try
            {
                VehicleModelMaster typeModel = new VehicleModelMaster()
                {
                    isActive = true,
                    //name = model.name,
                    modelname = model.modelname,
                    manufacturername = model.manufacturername,
                    vehicleweightinMT = model.vehicleweightinMT,
                    unladenweightinMT = model.unladenweightinMT,
                    vehiclecapacity = model.vehiclecapacity,
                    length = model.length,
                    width = model.width,
                    height = model.height,
                };
                tRSEntities4.VehicleModelMasters.Add(typeModel);
                tRSEntities4.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public VehicleModel GetVehicleModel(int id)
        {
            try
            {
                var data = tRSEntities4.VehicleModelMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    VehicleModel typeModel = new VehicleModel
                    {
                        id = data.id,
                        //name = data.name,
                        modelname = data.modelname,
                        manufacturername = data.manufacturername,
                        vehicleweightinMT = data.vehicleweightinMT,
                        unladenweightinMT = data.unladenweightinMT,
                        vehiclecapacity = data.vehiclecapacity,
                        length = data.length,
                        width = data.width,
                        height = data.height,
                    };
                    return typeModel;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool UpdateVehicleModel(VehicleModel model)
        {
            try
            {
                var data = tRSEntities4.VehicleModelMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    //data.name = model.name;
                    data.modelname = model.modelname;
                    data.manufacturername = model.manufacturername;
                    data.vehicleweightinMT = model.vehicleweightinMT;
                    data.unladenweightinMT = model.unladenweightinMT;
                    data.vehiclecapacity = model.vehiclecapacity;
                    data.length = model.length;
                    data.width = model.width;
                    data.height = model.height;
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
        public bool DeleteVehicleModel(int id)
        {
            try
            {
                var data = tRSEntities4.VehicleModelMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
