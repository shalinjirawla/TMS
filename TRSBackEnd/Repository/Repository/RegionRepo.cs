using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using Repository.DB;
using System.Linq;

namespace Repository.Repository
{
    public class RegionRepo : IRegionRepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public RegionRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public bool DeleteRegion(int id)
        {
            try
            {
                var Check = _tRSEntities.RegionMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if(Check != null)
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
        public RegionModel getRegion(int id)
        {
            try
            {
                var Check = _tRSEntities.RegionMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (Check != null)
                {
                    RegionModel model = new RegionModel
                    {
                        address = Check.address,
                        IsActive = Check.IsActive,
                        bankBalanceLimit = Check.bankBalanceLimit,
                        cashBalanceLimit = Check.cashBalanceLimit,
                        cityId = Check.cityId,
                        defaultBankLegder = Check.defaultBankLegder,
                        defaultCashLedger = Check.defaultCashLedger,
                        emailId = Check.emailId,
                        id = Check.id,
                        mobileNo = Check.mobileNo,
                        phoneNo = Check.phoneNo,
                        pincode = Check.pincode,
                        regionCode = Check.regionCode,
                        regionName =Check.regionName,
                        stateId = Check.stateId,
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
        public List<RegionModel> GetRegions()
        {
            try
            {
                var Data = _tRSEntities.RegionMasters.Where(x => x.IsActive == true).ToList();
                List<RegionModel> regionModels = new List<RegionModel>();

                foreach (var item in Data)
                {
                    RegionModel model = new RegionModel
                    {
                        address = item.address,
                        IsActive = item.IsActive,
                        bankBalanceLimit = item.bankBalanceLimit,
                        cashBalanceLimit = item.cashBalanceLimit,
                        cityId = item.cityId,
                        defaultBankLegder = item.defaultBankLegder,
                        defaultCashLedger = item.defaultCashLedger,
                        emailId = item.emailId,
                        id = item.id,
                        mobileNo = item.mobileNo,
                        phoneNo = item.phoneNo,
                        pincode = item.pincode,
                        regionCode = item.regionCode,
                        regionName = item.regionName,
                        stateId = item.stateId,
                    };
                    regionModels.Add(model);
                }
                return regionModels;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public bool SaveRegion(RegionModel model)
        {
            try
            {
                RegionMaster master = new RegionMaster
                {
                    address = model.address,
                    IsActive = true,
                    bankBalanceLimit = model.bankBalanceLimit,
                    cashBalanceLimit = model.cashBalanceLimit,
                    cityId = model.cityId,
                    defaultBankLegder = model.defaultBankLegder,
                    defaultCashLedger = model.defaultCashLedger,
                    emailId = model.emailId,
                    mobileNo = model.mobileNo,
                    phoneNo = model.phoneNo,
                    pincode = model.pincode,
                    regionCode = model.regionCode,
                    regionName = model.regionName,
                    stateId = model.stateId,
                };
                _tRSEntities.RegionMasters.Add(master);
                _tRSEntities.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public bool UpdateRegion(RegionModel model)
        {
            try
            {
                var Check = _tRSEntities.RegionMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if (Check != null)
                {
                    Check.address = model.address;
                    Check.IsActive = true;
                    Check.bankBalanceLimit = model.bankBalanceLimit;
                    Check.cashBalanceLimit = model.cashBalanceLimit;
                    Check.cityId = model.cityId;
                    Check.defaultBankLegder = model.defaultBankLegder;
                    Check.defaultCashLedger = model.defaultCashLedger;
                    Check.emailId = model.emailId;
                    Check.mobileNo = model.mobileNo;
                    Check.phoneNo = model.phoneNo;
                    Check.pincode = model.pincode;
                    Check.regionCode = model.regionCode;
                    Check.regionName = model.regionName;
                    Check.stateId = model.stateId;

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
