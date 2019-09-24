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
    public class OutwardRepo:IOutwardRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public OutwardRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<OutwardModel> GetOutwardModels()
        {
            try
            {
                var data = tRSEntities4.OutwardMasters.Where(x => x.isActive == true).ToList();
                List<OutwardModel> outwards = new List<OutwardModel>();
                foreach (var item in data)
                {
                    OutwardModel model = new OutwardModel
                    {
                        id = item.id,
                        challandate = item.challandate,
                        vehicleNo = item.vehicleNo,
                        vehiclecapacityMT = item.vehiclecapacityMT,
                        challanNo = item.challanNo,
                        frombranch = item.frombranch,
                        tobranch = item.tobranch,
                        brokerloadingslipno = item.brokerloadingslipno,
                        brokername = item.brokername,
                        drivername = item.drivername,
                        driverlicenceNo = item.driverlicenceNo,
                        drivermobileNo = item.drivermobileNo,
                        CNno = item.CNno,
                        CNdate = item.CNdate,
                        bookingbranch = item.bookingbranch,
                        deliverylocation = item.deliverylocation,
                        deliverytype = item.deliverytype,
                        balancepackeges = item.balancepackeges,
                        balanceweight = item.balanceweight,
                        loadedpackages = item.loadedpackages,
                        rollno = item.rollno,
                        truckhirechareges = item.truckhirechareges,
                        othercharges = item.othercharges,
                        TDS = item.TDS,
                        TDSamount = item.TDSamount,
                        totaltruckhire = item.totaltruckhire,
                        advence = item.advence,
                        advencepayableAt = item.advencepayableAt,
                        balancepayableAt = item.balancepayableAt,
                        RC = item.RC,
                        PAN = item.PAN,
                        drivinglicenceAttach = item.drivinglicenceAttach,
                        loadinglicenceAttach = item.loadinglicenceAttach,
                        TransitDays = item.TransitDays,
                        isActive = (bool)item.isActive,
                        frombranchname = tRSEntities4.BranchMasters.Where(x => x.id == item.frombranch).Select(x => x.branchName).FirstOrDefault(),
                        vehicleName = tRSEntities4.VehicleMasters.Where(x => x.id == item.vehicleNo).Select(x => x.vehicleNo).FirstOrDefault(),
                    };
                    outwards.Add(model);
                }
                return outwards;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveOutward(OutwardModel model)
        {
            try
            {
                if (model != null)
                {
                    OutwardMaster outward = new OutwardMaster
                    {
                        challandate = model.challandate,
                        vehicleNo = model.vehicleNo,
                        vehiclecapacityMT = model.vehiclecapacityMT,
                        challantype=model.challantype,
                        challanNo = model.challanNo,
                        frombranch = model.frombranch,
                        tobranch = model.tobranch,
                        brokerloadingslipno = model.brokerloadingslipno,
                        brokername = model.brokername,
                        drivername = model.drivername,
                        driverlicenceNo = model.driverlicenceNo,
                        drivermobileNo = model.drivermobileNo,
                        CNno = model.CNno,
                        CNdate = model.CNdate,
                        bookingbranch = model.bookingbranch,
                        deliverylocation = model.deliverylocation,
                        deliverytype = model.deliverytype,
                        balancepackeges = model.balancepackeges,
                        balanceweight = model.balanceweight,
                        loadedpackages = model.loadedpackages,
                        loadedweight=model.loadedweight,
                        rollno = model.rollno,
                        truckhirechareges = model.truckhirechareges,
                        othercharges = model.othercharges,
                        TDS = model.TDS,
                        TDSamount = model.TDSamount,
                        totaltruckhire = model.totaltruckhire,
                        advence = model.advence,
                        advencepayableAt = model.advencepayableAt,
                        balancepayableAt = model.balancepayableAt,
                        RC = model.RC,
                        PAN = model.PAN,
                        drivinglicenceAttach = model.drivinglicenceAttach,
                        loadinglicenceAttach = model.loadinglicenceAttach,
                        TransitDays = model.TransitDays,
                        isActive = true,
                    };
                    tRSEntities4.OutwardMasters.Add(outward);
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

        public OutwardModel GetOutwardModel(int id)
        {
            try
            {
                var data = tRSEntities4.OutwardMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    OutwardModel model = new OutwardModel();
                    model.id = data.id;
                    model.challandate = data.challandate;
                    model.vehicleNo = data.vehicleNo;
                    model.vehiclecapacityMT = data.vehiclecapacityMT;
                    model.challantype = data.challantype;
                    model.challanNo = data.challanNo;
                    model.frombranch = data.frombranch;
                    model.tobranch = data.tobranch;
                    model.brokerloadingslipno = data.brokerloadingslipno;
                    model.brokername = data.brokername;
                    model.drivername = data.drivername;
                    model.driverlicenceNo = data.driverlicenceNo;
                    model.drivermobileNo = data.drivermobileNo;
                    model.CNno = data.CNno;
                    model.CNdate = data.CNdate;
                    model.bookingbranch = data.bookingbranch;
                    model.deliverylocation = data.deliverylocation;
                    model.deliverytype = data.deliverytype;
                    model.balancepackeges = data.balancepackeges;
                    model.balanceweight = data.balanceweight;
                    model.loadedpackages = data.loadedpackages;
                    model.loadedweight = data.loadedweight;
                    model.rollno = data.rollno;
                    model.truckhirechareges = data.truckhirechareges;
                    model.othercharges = data.othercharges;
                    model.TDS = data.TDS;
                    model.TDSamount = data.TDSamount;
                    model.totaltruckhire = data.totaltruckhire;
                    model.advence = data.advence;
                    model.advencepayableAt = data.advencepayableAt;
                    model.balancepayableAt = data.balancepayableAt;
                    model.RC = data.RC;
                    model.PAN = data.PAN;
                    model.drivinglicenceAttach = data.drivinglicenceAttach;
                    model.loadinglicenceAttach = data.loadinglicenceAttach;
                    model.TransitDays = data.TransitDays;
                    model.isActive = (bool)data.isActive;
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

        public bool UpdateOutward(OutwardModel model)
        {
            try
            {
                var data = tRSEntities4.OutwardMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.challandate = model.challandate;
                    data.vehicleNo = model.vehicleNo;
                    data.vehiclecapacityMT = model.vehiclecapacityMT;
                    data.challantype = model.challantype;
                    data.challanNo = model.challanNo;
                    data.frombranch = model.frombranch;
                    data.tobranch = model.tobranch;
                    data.brokerloadingslipno = model.brokerloadingslipno;
                    data.brokername = model.brokername;
                    data.drivername = model.drivername;
                    data.driverlicenceNo = model.driverlicenceNo;
                    data.drivermobileNo = model.drivermobileNo;
                    data.CNno = model.CNno;
                    data.CNdate = model.CNdate;
                    data.bookingbranch = model.bookingbranch;
                    data.deliverylocation = model.deliverylocation;
                    data.deliverytype = model.deliverytype;
                    data.balancepackeges = model.balancepackeges;
                    data.balanceweight = model.balanceweight;
                    data.loadedpackages = model.loadedpackages;
                    data.loadedweight = model.loadedweight;
                    data.rollno = model.rollno;
                    data.truckhirechareges = model.truckhirechareges;
                    data.othercharges = model.othercharges;
                    data.TDS = model.TDS;
                    data.TDSamount = model.TDSamount;
                    data.totaltruckhire = model.totaltruckhire;
                    data.advence = model.advence;
                    data.advencepayableAt = model.advencepayableAt;
                    data.balancepayableAt = model.balancepayableAt;
                    data.RC = model.RC;
                    data.PAN = model.PAN;
                    data.drivinglicenceAttach = model.drivinglicenceAttach;
                    data.loadinglicenceAttach = model.loadinglicenceAttach;
                    data.TransitDays = model.TransitDays;
                    data.isActive = true;
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

        public bool DeleteOutward(int id)
        {
            try
            {
                var data = tRSEntities4.OutwardMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
