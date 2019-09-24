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
    public class DDLocalChallanRepo : IDDLocalChallanRepo
    {
        private readonly TRSEntities4 _tRSEntities4;
        public DDLocalChallanRepo()
        {
            _tRSEntities4 = new TRSEntities4();
        }

        public List<DDLocalChallanModel> GetDDLocalChallanModels()
        {
            try
            {
                List<DDLocalChallanModel> models = new List<DDLocalChallanModel>();
                var data = _tRSEntities4.DDLocalChallans.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    DDLocalChallanModel challanModel = new DDLocalChallanModel
                    {
                        id = item.id,
                        DDlocalchallanNo = item.DDlocalchallanNo,
                        DDlocalchallanDate = item.DDlocalchallanDate,
                        prideliveryNo = item.prideliveryNo,
                        Hirecharges = item.Hirecharges,
                        vehicleNo = item.vehicleNo,
                        isActive = (bool)item.isActive,
                    };
                    models.Add(challanModel);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveDDLocalChallan(DDLocalChallanModel model)
        {
            try
            {
                if (model != null)
                {
                    DDLocalChallan master = new DDLocalChallan
                    {
                        DDlocalchallanNo = model.DDlocalchallanNo,
                        DDlocalchallanDate = model.DDlocalchallanDate,
                        prideliveryNo = model.prideliveryNo,
                        Hirecharges = model.Hirecharges,
                        vehicleNo = model.vehicleNo,
                        remark = model.remark,
                        isActive = true,
                    };
                    _tRSEntities4.DDLocalChallans.Add(master);
                    _tRSEntities4.SaveChanges();
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

        public DDLocalChallanModel GetDDLocalChallanModel(int id)
        {
            try
            {
                var data = _tRSEntities4.DDLocalChallans.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    DDLocalChallanModel model = new DDLocalChallanModel();
                    model.id = data.id;
                    model.DDlocalchallanNo = data.DDlocalchallanNo;
                    model.DDlocalchallanDate = data.DDlocalchallanDate;
                    model.prideliveryNo = data.prideliveryNo;
                    model.Hirecharges = data.Hirecharges;
                    model.vehicleNo = data.vehicleNo;
                    model.remark = data.remark;
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

        public bool UpdateDDLocalChallan(DDLocalChallanModel model)
        {
            try
            {
                var data = _tRSEntities4.DDLocalChallans.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.DDlocalchallanNo = model.DDlocalchallanNo;
                    data.DDlocalchallanDate = model.DDlocalchallanDate;
                    data.prideliveryNo = model.prideliveryNo;
                    data.Hirecharges = model.Hirecharges;
                    data.vehicleNo = model.vehicleNo;
                    data.remark = model.remark;
                    data.isActive = true;
                    _tRSEntities4.SaveChanges();
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

        public bool DeleteDDLocalChallan(int id)
        {
            try
            {
                var data = _tRSEntities4.DDLocalChallans.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.isActive = false;
                    _tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
