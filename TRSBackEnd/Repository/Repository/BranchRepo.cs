using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using Repository.DB;
using System.Linq;

namespace Repository.Repository
{
    public class BranchRepo : IBranchRepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public BranchRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public bool DeleteData(int id)
        {
            try
            {
                var check = _tRSEntities.BranchMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if(check != null)
                {
                    check.IsActive = false;
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
        public BranchModel getBranch(int id)
        {
            try
            {
                var check = _tRSEntities.BranchMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (check != null)
                {
                    BranchModel model = new BranchModel
                    {
                        id = check.id,
                        IsActive = check.IsActive,
                        maxAdvance = check.maxAdvance,
                        mobileNo = check.mobileNo,
                        mr = check.mr,
                        pincode = check.pincode,
                        stateId = check.stateId,
                        areaId = check.areaId,
                        branchCode = check.branchCode,
                        branchName = check.branchName,
                        branchType = check.branchType,
                        challan = check.challan,
                        cityId = check.cityId,
                        cn = check.cn,
                        defaultBankLedger = check.defaultBankLedger,
                        defaultCashLedger = check.defaultCashLedger,
                        deliveryAgainstAs = check.deliveryAgainstAs,
                        expectedUnderLoad = check.expectedUnderLoad,
                        expectedUnloadingAfterArrival = check.expectedUnloadingAfterArrival,
                        freightBill =check.freightBill,
                        gstNo = check.gstNo,
                        phoneNo = check.phoneNo,
                        regionId = check.regionId,
                        remark  = check.remark,
                        servicesOffered =check.servicesOffered
                    };
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
        public List<BranchModel> GetBranches()
        {
            try
            {
                var Data = _tRSEntities.BranchMasters.Where(x => x.IsActive == true).ToList();
                List<BranchModel> branchModels = new List<BranchModel>();
                foreach (var item in Data)
                {
                    BranchModel model = new BranchModel {
                        id = item.id,
                        IsActive = item.IsActive,
                        maxAdvance = item.maxAdvance,
                        mobileNo = item.mobileNo,
                        mr = item.mr,
                        pincode = item.pincode,
                        stateId = item.stateId,
                        areaId = item.areaId,
                        branchCode = item.branchCode,
                        branchName = item.branchName,
                        branchType = item.branchType,
                        challan = item.challan,
                        cityId = item.cityId,
                        cn = item.cn,
                        defaultBankLedger = item.defaultBankLedger,
                        defaultCashLedger = item.defaultCashLedger,
                        deliveryAgainstAs = item.deliveryAgainstAs,
                        expectedUnderLoad = item.expectedUnderLoad,
                        expectedUnloadingAfterArrival = item.expectedUnloadingAfterArrival,
                        freightBill = item.freightBill,
                        gstNo = item.gstNo,
                        phoneNo = item.phoneNo,
                        regionId = item.regionId,
                        remark = item.remark,
                        servicesOffered = item.servicesOffered
                    };
                    branchModels.Add(model);
                }
                return branchModels;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public bool SaveBranch(BranchModel model)
        {
            try
            {
                BranchMaster master = new BranchMaster
                {
                    IsActive = true,
                    maxAdvance = model.maxAdvance,
                    mobileNo = model.mobileNo,
                    mr = model.mr,
                    pincode = model.pincode,
                    stateId = model.stateId,
                    areaId = model.areaId,
                    branchCode = model.branchCode,
                    branchName = model.branchName,
                    branchType = model.branchType,
                    challan = model.challan,
                    cityId = model.cityId,
                    cn = model.cn,
                    defaultBankLedger = model.defaultBankLedger,
                    defaultCashLedger = model.defaultCashLedger,
                    deliveryAgainstAs = model.deliveryAgainstAs,
                    expectedUnderLoad = model.expectedUnderLoad,
                    expectedUnloadingAfterArrival = model.expectedUnloadingAfterArrival,
                    freightBill = model.freightBill,
                    gstNo = model.gstNo,
                    phoneNo = model.phoneNo,
                    regionId = model.regionId,
                    remark = model.remark,
                    servicesOffered = model.servicesOffered
                };
                _tRSEntities.BranchMasters.Add(master);
                _tRSEntities.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public bool UpdateBranch(BranchModel model)
        {
            try
            {
                var CheckIfExist = _tRSEntities.BranchMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if(CheckIfExist != null)
                {
                    CheckIfExist.maxAdvance = model.maxAdvance;
                    CheckIfExist.mobileNo = model.mobileNo;
                    CheckIfExist.mr = model.mr;
                    CheckIfExist.pincode = model.pincode;
                    CheckIfExist.stateId = model.stateId;
                    CheckIfExist.areaId = model.areaId;
                    CheckIfExist.branchCode = model.branchCode;
                    CheckIfExist.branchName = model.branchName;
                    CheckIfExist.branchType = model.branchType;
                    CheckIfExist.challan = model.challan;
                    CheckIfExist.cityId = model.cityId;
                    CheckIfExist.cn = model.cn;
                    CheckIfExist.defaultBankLedger = model.defaultBankLedger;
                    CheckIfExist.defaultCashLedger = model.defaultCashLedger;
                    CheckIfExist.deliveryAgainstAs = model.deliveryAgainstAs;
                    CheckIfExist.expectedUnderLoad = model.expectedUnderLoad;
                    CheckIfExist.expectedUnloadingAfterArrival = model.expectedUnloadingAfterArrival;
                    CheckIfExist.freightBill = model.freightBill;
                    CheckIfExist.gstNo = model.gstNo;
                    CheckIfExist.phoneNo = model.phoneNo;
                    CheckIfExist.regionId = model.regionId;
                    CheckIfExist.remark = model.remark;
                    CheckIfExist.servicesOffered = model.servicesOffered;

                    _tRSEntities.SaveChanges();
                    return true;
                }
                return false;
            }
            catch ( Exception e)
            {
                throw e;
            }
        }
    }
}
