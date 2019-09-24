using Repository.DB;
using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
   public class AreaRepo:IAreaRepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public AreaRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public List<AreaModel> GetAreas()
        {
            try
            {
                var data = _tRSEntities.AreaMasters.Where(x => x.isActive == true).ToList();
                List<AreaModel> areaModels = new List<AreaModel>();
                foreach (var item in data)
                {
                    AreaModel areaModel = new AreaModel();
                    areaModel.areaCode = item.areaCode;
                    areaModel.areaName = item.areaName;
                    areaModel.address = item.address;
                    areaModel.city = item.city;
                    if(item.city!=null)
                    {
                   areaModel.cityName =_tRSEntities.CityMasters.Where(x=>x.id==item.city).Select(x=>x.cityName).FirstOrDefault();
               
                    }
                    areaModel.pinCode = item.pinCode;
                    areaModel.state = item.state;
                    areaModel.phoneNo = item.phoneNo;
                    areaModel.mobileNo = item.mobileNo;
                    areaModel.emailId = item.emailId;
                    areaModel.region = item.region;
                    areaModel.remark = item.remark;
                    areaModel.cashBalanceLimit = item.cashBalanceLimit;
                    areaModel.bankBalanceLimit = item.bankBalanceLimit;
                    areaModel.id = item.id;
                    areaModels.Add(areaModel);
                }
                return areaModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveArea(AreaModel model)
        {
            try
            {
                AreaMaster md = new AreaMaster();
                md.areaCode = model.areaCode;
                md.areaName = model.areaName;
                md.address = model.address;
                md.city = model.city;
                md.pinCode = model.pinCode;
                md.state = model.state;
                md.phoneNo = model.phoneNo;
                md.mobileNo = model.mobileNo;
                md.emailId = model.emailId;
                md.region = model.region;
                md.cashBalanceLimit = model.cashBalanceLimit;
                md.bankBalanceLimit = model.bankBalanceLimit;
                md.remark = model.remark;
                md.isActive = true;
                _tRSEntities.AreaMasters.Add(md);
                _tRSEntities.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }    
        }

        public bool UpdateArea(AreaModel areaModel)
        {
            try
            {
                var check = _tRSEntities.AreaMasters.Where(x => x.id == areaModel.id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    check.areaCode = areaModel.areaCode;
                    check.areaName = areaModel.areaName;
                    check.address = areaModel.address;
                    check.city = areaModel.city;
                    check.pinCode = areaModel.pinCode;
                    check.state = areaModel.state;
                    check.stdCode = areaModel.stdCode;
                    check.phoneNo = areaModel.phoneNo;
                    check.mobileNo = areaModel.mobileNo;
                    check.emailId = areaModel.emailId;
                    check.region = areaModel.region;
                    check.cashBalanceLimit = areaModel.cashBalanceLimit;
                    check.bankBalanceLimit = areaModel.bankBalanceLimit;
                    check.remark = areaModel.remark;
                    check.isActive = true;
                    _tRSEntities.SaveChanges();
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

        public AreaModel GetArea(int id)
        {
            try
            {
                List<AreaModel> areaModels = new List<AreaModel>();
                var check = _tRSEntities.AreaMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    AreaModel model = new AreaModel();
                    model.address = check.address;
                    model.id = check.id;
                    model.areaCode = check.areaCode;
                    model.areaName = check.areaName;
                    model.address = check.address;
                    if (check.city != null)
                        model.cityName = _tRSEntities.CityMasters.Where(x => x.id == check.city).Select(x => x.cityName).FirstOrDefault();

                    model.pinCode = check.pinCode;
                    model.stdCode = check.stdCode;
                    model.mobileNo = check.mobileNo;
                    model.phoneNo = check.phoneNo;
                    model.emailId = check.emailId;

                    if (check.region != null)
                        model.regionName = _tRSEntities.RegionMasters.Where(x => x.id == check.region).Select(x => x.regionName).FirstOrDefault();

                    if (check.state != null)
                        model.stateName = _tRSEntities.StateMasters.Where(x => x.id == check.state).Select(x => x.StateName).FirstOrDefault();

                    model.cashBalanceLimit = check.cashBalanceLimit;
                    model.bankBalanceLimit = check.bankBalanceLimit;
                    model.remark = check.remark;
                    return model;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {

                throw;
            }
           

        }

        public bool DeleteArea(int id)
        {
            try
            {
                var check = _tRSEntities.AreaMasters.Where(x => x.id == id).FirstOrDefault();
                if (check != null)
                {
                    check.isActive = false;
                    _tRSEntities.SaveChanges();
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
    }
}
