using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.DB;
using Repository.Interface;

namespace Repository.Repository
{
    public class TruckArrivalRepo:ITruckArrivalRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public TruckArrivalRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<TruckArrivalModel> GetTruckArrivalModels()
        {
            try
            {
                var data = tRSEntities4.TruckArrivals.Where(x => x.isActive == true).ToList();
                List<TruckArrivalModel> truckArrivals = new List<TruckArrivalModel>();
                foreach (var item in data)
                {
                    TruckArrivalModel model = new TruckArrivalModel
                    {
                        id = item.id,
                        truckArrivalNo = item.truckArrivalNo,
                        truckArrivalDate = item.truckArrivalDate,
                        vehicleNo = item.vehicleNo,
                        challanNo = item.challanNo,
                        challanDate = item.challanDate,
                        challanFrom = item.challanFrom,
                        challanTo = item.challanTo,
                        scheduledArriDate = item.scheduledArriDate,
                        expectedUnloadingTime = item.expectedUnloadingTime,
                        Remark = item.Remark,
                        isActive = true,
                        vehicleName = tRSEntities4.VehicleMasters.Where(x => x.id == item.vehicleNo).Select(x => x.vehicleNo).FirstOrDefault(),
                    };
                    truckArrivals.Add(model);
                }
                return truckArrivals;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveTruckArrival(TruckArrivalModel model)
        {
            try
            {
                if (model!=null)
                {
                    TruckArrival truckArrival = new TruckArrival
                    {
                        truckArrivalNo = model.truckArrivalNo,
                        truckArrivalDate = model.truckArrivalDate,
                        vehicleNo = model.vehicleNo,
                        challanNo = model.challanNo,
                        challanDate = model.challanDate,
                        challanFrom = model.challanFrom,
                        challanTo = model.challanTo,
                        scheduledArriDate = model.scheduledArriDate,
                        expectedUnloadingTime = model.expectedUnloadingTime,
                        Remark = model.Remark,
                        isActive = true,
                    };
                    tRSEntities4.TruckArrivals.Add(truckArrival);
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

        public TruckArrivalModel GetTruckArrivalModel(int id)
        {
            try
            {
                var data = tRSEntities4.TruckArrivals.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    TruckArrivalModel model = new TruckArrivalModel();
                    model.id = data.id;
                    model.truckArrivalNo = data.truckArrivalNo;
                    model.truckArrivalDate = data.truckArrivalDate;
                    model.vehicleNo = data.vehicleNo;
                    model.challanNo = data.challanNo;
                    model.challanDate = data.challanDate;
                    model.challanFrom = data.challanFrom;
                    model.challanTo = data.challanTo;
                    model.scheduledArriDate = data.scheduledArriDate;
                    model.expectedUnloadingTime = data.expectedUnloadingTime;
                    model.Remark = data.Remark;
                    model.isActive = true;
                    return model;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdateTruckArrival(TruckArrivalModel model)
        {
            try
            {
                var data = tRSEntities4.TruckArrivals.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.truckArrivalNo = model.truckArrivalNo;
                    data.truckArrivalDate = model.truckArrivalDate;
                    data.vehicleNo = model.vehicleNo;
                    data.challanDate = model.challanDate;
                    data.challanFrom = model.challanFrom;
                    data.challanTo = model.challanTo;
                    data.scheduledArriDate = model.scheduledArriDate;
                    data.expectedUnloadingTime = model.expectedUnloadingTime;
                    data.Remark = model.Remark;
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

        public bool DeleteTruckArrival(int id)
        {
            try
            {
                var data = tRSEntities4.TruckArrivals.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
