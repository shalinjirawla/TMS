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
    public class LocalVehicleContractRepo:ILocalVehicleContractRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public LocalVehicleContractRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<LocalVehicleContractModel> GetVehicleContractModels()
        {
            try
            {
                List<LocalVehicleContractModel> localVehicles = new List<LocalVehicleContractModel>();
                var data = tRSEntities4.LocalVehicleContractMasters.Where(x=>x.IsActive==true).ToList();
                foreach (var item in data)
                {
                    LocalVehicleContractModel model = new LocalVehicleContractModel
                    {
                        id = item.id,
                        branch = item.branch,
                        vehicleNo = item.vehicleNo,
                        vendorDetail = item.vendorDetail,
                        fromdate = item.fromdate,
                        todate = item.todate,
                        freightsettlement = item.freightsettlement,
                        hirebasis = item.hirebasis,
                        hirerate = item.hirerate,
                        IsActive = (bool)item.IsActive,
                        vehicleName = tRSEntities4.VehicleMasters.Where(x => x.id == item.vehicleNo).Select(x => x.vehicleNo).FirstOrDefault(),
                        branchName = tRSEntities4.BranchMasters.Where(x => x.id == item.branch).Select(x => x.branchName).FirstOrDefault(),
                    };
                    localVehicles.Add(model);
                }
                return localVehicles;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool SaveLocalVehicleContract(LocalVehicleContractModel model)
        {
            try
            {
                if (model!=null)
                {
                    LocalVehicleContractMaster localVehicle = new LocalVehicleContractMaster();
                    localVehicle.branch = model.branch;
                    localVehicle.vehicleNo = model.vehicleNo;
                    localVehicle.vendorDetail = model.vendorDetail;
                    localVehicle.fromdate = model.fromdate;
                    localVehicle.todate = model.todate;
                    localVehicle.freightsettlement = model.freightsettlement;
                    localVehicle.hirebasis = model.hirebasis;
                    localVehicle.hirerate = model.hirerate;
                    localVehicle.IsActive = true;
                    tRSEntities4.LocalVehicleContractMasters.Add(localVehicle);
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
        public bool UpdateLocalVehicleContract(LocalVehicleContractModel model)
        {
            try
            {
                var data = tRSEntities4.LocalVehicleContractMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.branch = model.branch;
                    data.vehicleNo = model.vehicleNo;
                    data.vendorDetail = model.vendorDetail;
                    data.fromdate = model.fromdate;
                    data.todate = model.todate;
                    data.freightsettlement = model.freightsettlement;
                    data.hirebasis = model.hirebasis;
                    data.hirerate = model.hirerate;
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

        public LocalVehicleContractModel GetVehicleContractModel(int id)
        {
            try
            {
                var data = tRSEntities4.LocalVehicleContractMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (data != null)
                {
                    LocalVehicleContractModel model = new LocalVehicleContractModel();
                    model.id = data.id;
                    model.branch = data.branch;
                    model.vehicleNo = data.vehicleNo;
                    model.vendorDetail = data.vendorDetail;
                    model.fromdate = data.fromdate;
                    model.todate = data.todate;
                    model.freightsettlement = data.freightsettlement;
                    model.hirebasis = data.hirebasis;
                    model.hirerate = data.hirerate;
                    model.IsActive = data.IsActive;
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

        public bool DeleteLocalVehicleContract(int id)
        {
            try
            {
                var data = tRSEntities4.LocalVehicleContractMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
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
