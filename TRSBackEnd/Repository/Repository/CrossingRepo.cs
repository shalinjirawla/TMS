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
   public class CrossingRepo:ICrossingRepo
    {
        private readonly TRSEntities4 _trs;
        public CrossingRepo(TRSEntities4 tRSEntities4)
        {
            _trs = tRSEntities4;
        }
        //Save
        public bool SaveCrossing(CrossingModel model)
        {
            try
            {
                CrossingMaster crossing = new CrossingMaster()
                {
                    isActive = true,
                    bookingType = model.bookingType,
                    transpotType = model.transpotType,
                    frombranch = model.frombranch,
                    tobranch = model.tobranch,
                    hireperKG = model.hireperKG,
                    hamaliperKG = model.hamaliperKG,
                    totalcrossingperKG = model.totalcrossingperKG,
                };
                _trs.CrossingMasters.Add(crossing);
                _trs.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public  CrossingModel GetCrossing(int id)
        {
            try
            {
                var check = _trs.CrossingMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check!=null)
                {
                    CrossingModel db = new CrossingModel
                    {
                        id = check.id,
                        bookingType = check.bookingType,
                        transpotType = check.transpotType,
                        frombranch = check.frombranch,
                        tobranch = check.tobranch,
                        hireperKG = check.hireperKG,
                        hamaliperKG = check.hamaliperKG,
                        totalcrossingperKG = check.totalcrossingperKG,
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
       
        public List<CrossingModel> GetCrossings()
        {
            try
            {
                List<CrossingModel> crossings = new List<CrossingModel>();
                var data = _trs.CrossingMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    CrossingModel model = new CrossingModel
                    {
                        id = item.id,
                        bookingType = item.bookingType,
                        transpotType = item.transpotType,
                        frombranch = item.frombranch,
                        tobranch = item.tobranch,
                        hireperKG = item.hireperKG,
                        hamaliperKG = item.hamaliperKG,
                        totalcrossingperKG = item.totalcrossingperKG,
                        tobranchname = _trs.BranchMasters.Where(x => x.id == item.tobranch).Select(x => x.branchName).FirstOrDefault(),
                        frombracnhname = _trs.BranchMasters.Where(x => x.id == item.frombranch).Select(x => x.branchName).FirstOrDefault(),
                    };
                    crossings.Add(model);
                }
                return crossings;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdateCrossing(CrossingModel model)
        {
            try
            {
                var Check = _trs.CrossingMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (Check != null)
                {
                    Check.bookingType = model.bookingType;
                    Check.transpotType = model.transpotType;
                    Check.frombranch = model.frombranch;
                    Check.tobranch = model.tobranch;
                    Check.hireperKG = model.hireperKG;
                    Check.hamaliperKG = model.hamaliperKG;
                    Check.totalcrossingperKG = model.totalcrossingperKG;
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

        public bool DeleteCrossing(int id)
        {
            try
            {
                var data = _trs.CrossingMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null) 
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
