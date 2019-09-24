using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using Repository.DB;

namespace Repository.Repository
{
    public class VirtualGodownRepo : IVirtualGodownRepo
    {
        private readonly TRSEntities4 _trs;
        public VirtualGodownRepo()
        {
            _trs = new TRSEntities4();
        }
        public bool DeleteVirualGodown(int id)
        {
            try
            {
                var Data = _trs.VirtualGodownMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if(Data != null)
                {
                    Data.isActive = false;
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

        public VirtualGodownModel GetVirualGodown(int id)
        {
            try
            {
                var Data = _trs.VirtualGodownMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (Data != null)
                {
                    VirtualGodownModel model = new VirtualGodownModel
                    {
                        id = Data.id,
                        branchId = Data.branchId,
                        godownId = Data.godownId,
                        remark = Data.remark,
                        storageCapacity = Data.storageCapacity,
                        virtualGodownCode = Data.virtualGodownCode
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

        public List<VirtualGodownModel> GetVirualGodowns()
        {
            try
            {
                List<VirtualGodownModel> models = new List<VirtualGodownModel>();
                var Listofrecords = _trs.VirtualGodownMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in Listofrecords)
                {
                    VirtualGodownModel model = new VirtualGodownModel
                    {
                        id = item.id,
                        branchId = item.branchId,
                        godownId = item.godownId,
                        remark = item.remark,
                        storageCapacity = item.storageCapacity,
                        virtualGodownCode = item.virtualGodownCode
                    };
                    models.Add(model);
                }
                return models;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool SaveVirualGodown(VirtualGodownModel model)
        {
            try
            {
                VirtualGodownMaster master = new VirtualGodownMaster
                {
                    branchId = model.branchId,
                    godownId = model.godownId,
                    remark = model.remark,
                    storageCapacity = model.storageCapacity,
                    virtualGodownCode = model.virtualGodownCode,
                    isActive = true
                };
                _trs.VirtualGodownMasters.Add(master);
                _trs.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool UpdateVirualGodown(VirtualGodownModel model)
        {
            try
            {
                var Data = _trs.VirtualGodownMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (Data != null)
                {
                    Data.branchId = model.branchId;
                    Data.godownId = model.godownId;
                    Data.remark = model.remark;
                    Data.storageCapacity = model.storageCapacity;
                    Data.virtualGodownCode = model.virtualGodownCode;
                    Data.isActive = true;
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
