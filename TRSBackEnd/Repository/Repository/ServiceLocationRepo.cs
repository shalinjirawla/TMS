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
    public class ServiceLocationRepo:IServiceLocationRepo
    {
        private readonly TRSEntities4 _trs;
        public ServiceLocationRepo()
        {
            _trs = new TRSEntities4();
        }
        public bool SaveServiceLocation(ServiceLocationModel model)
        {
            try
            {
                ServiceLocationMaster db = new ServiceLocationMaster()
                {
                    isActive = true,
                    servicelocationcode = model.servicelocationcode,
                    servicelocationname = model.servicelocationname,
                    defaultdeliverytype = model.defaultdeliverytype,
                    controllingbranch=model.controllingbranch,
                    deliveryat = model.deliveryat,
                    distancefrombranch = model.distancefrombranch,
                    istodaybooking = model.istodaybooking,
                    pickupcharges = model.pickupcharges,
                    DDCharges = model.DDCharges,
                };
                _trs.ServiceLocationMasters.Add(db);
                _trs.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw  e;
            }
        }

        public ServiceLocationModel GetServiceLocation(int id)
        {
            try
            {
                var check = _trs.ServiceLocationMasters.Where(x => x.Id == id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    ServiceLocationModel db = new ServiceLocationModel()
                    {
                        Id = check.Id,
                        servicelocationcode = check.servicelocationcode,
                        servicelocationname = check.servicelocationname,
                        defaultdeliverytype = check.defaultdeliverytype,
                        controllingbranch=check.controllingbranch,
                        deliveryat = check.deliveryat,
                        distancefrombranch = check.distancefrombranch,
                        istodaybooking = check.istodaybooking,
                        pickupcharges = check.pickupcharges,
                        DDCharges = check.DDCharges,
                    };
                    return db;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public List<ServiceLocationModel> GetServiceLocations()
        {
            try
            {
                List<ServiceLocationModel> serviceLocations = new List<ServiceLocationModel>();
                var data = _trs.ServiceLocationMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    ServiceLocationModel db = new ServiceLocationModel
                    {
                        Id = item.Id,
                        servicelocationcode = item.servicelocationcode,
                        servicelocationname = item.servicelocationname,
                        defaultdeliverytype = item.defaultdeliverytype,
                        controllingbranch = item.controllingbranch,
                        deliveryat = item.deliveryat,
                        distancefrombranch = item.distancefrombranch,
                        istodaybooking = item.istodaybooking,
                        pickupcharges = item.pickupcharges,
                        DDCharges = item.DDCharges,
                        controllingbranchname = _trs.BranchMasters.Where(x => x.id == item.controllingbranch).Select(x => x.branchName).FirstOrDefault(),
                        deliveryatname = _trs.BranchMasters.Where(x => x.id == item.deliveryat).Select(x => x.branchName).FirstOrDefault(),
                    };
                    serviceLocations.Add(db);
                }
                return serviceLocations;
            }
            catch (Exception e)
            {
        
                throw e;
            }
        }
        public bool UpdateServiceLocation(ServiceLocationModel model)
        {
            try
            {
                var check = _trs.ServiceLocationMasters.Where(x => x.Id == model.Id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    check.servicelocationcode = model.servicelocationcode;
                    check.servicelocationname = model.servicelocationname;
                    check.defaultdeliverytype = model.defaultdeliverytype;
                    check.controllingbranch = model.controllingbranch;
                    check.deliveryat = model.deliveryat;
                    check.distancefrombranch = model.distancefrombranch;
                    check.istodaybooking = model.istodaybooking;
                    check.pickupcharges = model.pickupcharges;
                    check.DDCharges = model.DDCharges;
                    _trs.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw  e;
            }
        }
        public  bool DeleteServiceLocation(int id)
        {
            try
            {
                var data = _trs.ServiceLocationMasters.Where(x => x.Id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    _trs.SaveChanges();
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
