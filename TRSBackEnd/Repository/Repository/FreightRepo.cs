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
    public class FreightRepo: IFreightRepo
    {
        private readonly TRSEntities4 _trs;
        public FreightRepo()
        {
            _trs = new TRSEntities4();
        }
        //Save
        public bool SaveFreight(FreightModel model)
        {
            try
            {
                FreightMaster db = new FreightMaster()
                {
                    isActive = true,
                    bookingType = model.bookingType,
                    transpotType = model.transpotType,
                    frombranch = model.frombranch,
                    tobranch = model.tobranch,
                    rateperKG = model.rateperKG,
                    distance = model.distance,
                    transitdays = model.transitdays,
                    //tobranchname=model.tobranchname
                };
                _trs.FreightMasters.Add(db);
                _trs.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public FreightModel GetFreight(int id)
        {
            try
            {
                var check = _trs.FreightMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    FreightModel db = new FreightModel
                    {
                        id = check.id,
                        bookingType = check.bookingType,
                        transpotType = check.transpotType,
                        frombranch = check.frombranch,
                        tobranch = check.tobranch,
                        rateperKG = check.rateperKG,
                        distance = check.distance,
                        transitdays = check.transitdays
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
        public List<FreightModel> GetFreights()
        {
            try
            {
                List<FreightModel> freighs =new List<FreightModel>();
                var data = _trs.FreightMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    FreightModel model = new FreightModel
                    {
                        id = item.id,
                        bookingType = item.bookingType,
                        transpotType = item.transpotType,
                        frombranch = item.frombranch,
                        tobranch = item.tobranch,
                        rateperKG = item.rateperKG,
                        distance = item.distance,
                        transitdays = item.transitdays,
                        tobranchname = _trs.BranchMasters.Where(x => x.id == item.tobranch).Select(x => x.branchName).FirstOrDefault(),
                        frombracnhname= _trs.BranchMasters.Where(x => x.id == item.frombranch).Select(x => x.branchName).FirstOrDefault(),
                    };
                    freighs.Add(model);
                }
                return freighs;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdateFreight(FreightModel model)
        {
            try
            {
                var check = _trs.FreightMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    check.bookingType = model.bookingType;
                    check.transpotType = model.transpotType;
                    check.frombranch = model.frombranch;
                    check.tobranch = model.tobranch;
                    check.rateperKG = model.rateperKG;
                    check.distance = model.distance;
                    check.transitdays = model.transitdays;
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

        public bool DeleteFreight(int id)
        {
            try
            {
                var Data = _trs.FreightMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (Data!=null) 
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
    }
}
