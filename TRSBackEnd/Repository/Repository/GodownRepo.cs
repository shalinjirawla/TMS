using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using Repository.DB;

namespace Repository.Repository
{
    public class GodownRepo : IGodownRepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public GodownRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public bool DeleteData(int id)
        {
            try
            {
                var Check = _tRSEntities.GodownMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (Check != null)
                {
                    Check.IsActive = false;
                    _tRSEntities.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public GodownModel GetGodown(int id)
        {
            try
            {
                var Check = _tRSEntities.GodownMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (Check != null)
                {
                    GodownModel model = new GodownModel
                    {
                        id = Check.id,
                        address = Check.address,
                        branchId = Check.branchId,
                        cityId = Check.cityId,
                        godownCode = Check.godownCode,
                        godownName = Check.godownName,
                        IsActive = Check.IsActive,
                        mobileNo = Check.mobileNo,
                        phoneNo = Check.phoneNo,
                        pincode = Check.pincode,
                        remark = Check.remark,
                        stateId = Check.stateId,
                        storageCapacity = Check.storageCapacity
                    };
                    return model;
                }
                return null;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<GodownModel> GetGodowns()
        {
            try
            {
                List<GodownModel> godowns = new List<GodownModel>();
                var Data = _tRSEntities.GodownMasters.Where(x => x.IsActive == true).ToList();
                foreach (var item in Data)
                {
                    GodownModel model = new GodownModel
                    {
                        id = item.id,
                        address = item.address,
                        branchId = item.branchId,
                        cityId = item.cityId,
                        godownCode = item.godownCode,
                        godownName = item.godownName,
                        IsActive = item.IsActive,
                        mobileNo = item.mobileNo,
                        phoneNo = item.phoneNo,
                        pincode = item.pincode,
                        remark = item.remark,
                        stateId = item.stateId,
                        storageCapacity = item.storageCapacity
                    };
                    godowns.Add(model);
                }
                return godowns;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool SaveGodown(GodownModel model)
        {
            try
            {
                GodownMaster master = new GodownMaster
                {
                    address = model.address,
                    branchId = model.branchId,
                    cityId = model.cityId,
                    godownCode = model.godownCode,
                    godownName = model.godownName,
                    IsActive = true,
                    mobileNo = model.mobileNo,
                    phoneNo = model.phoneNo,
                    pincode = model.pincode,
                    remark = model.remark,
                    stateId = model.stateId,
                    storageCapacity = model.storageCapacity
                };
                _tRSEntities.GodownMasters.Add(master);
                _tRSEntities.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool UpdateData(GodownModel model)
        {
            try
            {
                var Check = _tRSEntities.GodownMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if (Check != null)
                {
                    Check.address = model.address;
                    Check.branchId = model.branchId;
                    Check.cityId = model.cityId;
                    Check.godownCode = model.godownCode;
                    Check.godownName = model.godownName;
                    Check.IsActive = true;
                    Check.mobileNo = model.mobileNo;
                    Check.phoneNo = model.phoneNo;
                    Check.pincode = model.pincode;
                    Check.remark = model.remark;
                    Check.stateId = model.stateId;
                    Check.storageCapacity = model.storageCapacity;
                    _tRSEntities.SaveChanges();
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
