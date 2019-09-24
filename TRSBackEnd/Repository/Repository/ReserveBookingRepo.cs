using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.DB;
using Repository.Model;
using Repository.Interface;

namespace Repository.Repository
{
    public class ReserveBookingRepo:IReserveBookingRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public ReserveBookingRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<ReserveBookingModel> GetReserveBookingModels()
        {
            try
            {
                var data = tRSEntities4.ReserveBookings.Where(x => x.isActive == true).ToList();
                List<ReserveBookingModel> model = new List<ReserveBookingModel>();
                foreach (var item in data)
                {
                    ReserveBookingModel reserve = new ReserveBookingModel
                    {
                        id = item.id,
                        branch = item.branch,
                        Consignor = item.Consignor,
                        CNfrom = item.CNfrom,
                        CNto = item.CNto,
                        isActive = true,
                        branchName = tRSEntities4.BranchMasters.Where(x => x.id == item.branch).Select(x => x.branchName).FirstOrDefault(),
                        consignorName=tRSEntities4.RegularClientMasters.Where(x=>x.id==item.Consignor).Select(x=>x.clientCode).FirstOrDefault(),
                    };
                    model.Add(reserve);
                }
                return model;
            }
            catch (Exception  e)
            {

                throw e;
            }
        }

        public bool SaveReserveBooking(ReserveBookingModel model)
        {
            try
            {
                if (model!=null)
                {
                    ReserveBooking booking = new ReserveBooking
                    {
                        branch = model.branch,
                        Consignor = model.Consignor,
                        CNfrom = model.CNfrom,
                        CNto = model.CNto,
                        isActive = true,
                    };
                    tRSEntities4.ReserveBookings.Add(booking);
                    tRSEntities4.SaveChanges();
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

        public ReserveBookingModel GetReserveBookingModel(int id)
        {
            try
            {
                var data = tRSEntities4.ReserveBookings.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    ReserveBookingModel model = new ReserveBookingModel();
                    model.id = data.id;
                    model.branch = data.branch;
                    model.Consignor=data.Consignor;
                    model.CNfrom = data.CNfrom;
                    model.CNto = data.CNto;
                    model.isActive = true;
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

        public bool UpdateReserveBooking(ReserveBookingModel model)
        {
            try
            {
                var data = tRSEntities4.ReserveBookings.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.branch = model.branch;
                    data.Consignor = model.Consignor;
                    data.CNfrom = model.CNfrom;
                    data.CNto = model.CNto;
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

        public bool DeleteReserveBooking(int id)
        {
            try
            {
                var data = tRSEntities4.ReserveBookings.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    tRSEntities4.SaveChanges();
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
