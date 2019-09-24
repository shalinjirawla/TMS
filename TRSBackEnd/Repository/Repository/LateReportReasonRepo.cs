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
    public class LateReportReasonRepo : ILateReportReasonRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public LateReportReasonRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<LateReportReasonModel> GetReportReasonModels()
        {
            try
            {
                List<LateReportReasonModel> db = new List<LateReportReasonModel>();
                var data = tRSEntities4.LateReportReasonMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    LateReportReasonModel model = new LateReportReasonModel
                    {
                        id = item.id,
                        reason = item.reason,
                        reappforpro = item.reappforpro,
                        //doordeliconfirm = item.doordeliconfirm,
                        isActive=item.isActive,
                    };
                    db.Add(model);

                }
                return db;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SavelateReportReason(LateReportReasonModel model)
        {
            try
            {
                LateReportReasonMaster db = new LateReportReasonMaster()
                {
                    isActive = true,
                    reason = model.reason,
                    reappforpro = model.reappforpro,
                    doordelivery=model.doordelivery,
                    //doordeliconfirm = model.doordeliconfirm,
                };
                tRSEntities4.LateReportReasonMasters.Add(db);
                tRSEntities4.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public LateReportReasonModel GetReportReasonModel(int id)
        {
            try
            {
                var data = tRSEntities4.LateReportReasonMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    LateReportReasonModel db = new LateReportReasonModel
                    {
                        id = data.id,
                        reason = data.reason,
                        doordelivery=data.doordelivery,
                        reappforpro = data.reappforpro,
                        //doordeliconfirm = data.doordeliconfirm,
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

        public bool UpdateLateReportReason(LateReportReasonModel model)
        {
            try
            {
                var data = tRSEntities4.LateReportReasonMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.reason = model.reason;
                    data.reappforpro = model.reappforpro;
                    data.doordelivery = model.doordelivery;
                    //data.doordeliconfirm = model.doordeliconfirm;
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

        public bool DeleteLateReportReason(int id)
        {
            try
            {
                var data = tRSEntities4.LateReportReasonMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
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
