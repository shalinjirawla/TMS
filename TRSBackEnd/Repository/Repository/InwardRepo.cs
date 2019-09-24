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
    public class InwardRepo : IInwardRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public InwardRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<InwardModel> GetInwardModels()
        {
            try
            {
                List<InwardModel> inwards = new List<InwardModel>();
                var data = tRSEntities4.InwardMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    InwardModel model = new InwardModel
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
                        truckUnloadingNo = item.truckUnloadingNo,
                        truckUnloadingDate = item.truckUnloadingDate,
                        vehicleNo1 = item.vehicleNo1,
                        truckArrivalNo1 = item.truckArrivalNo1,
                        truckArrivalDate1 = item.truckArrivalDate1,
                        challanNo1 = item.challanNo1,
                        CNNo = item.CNNo,
                        CNDate = item.CNDate,
                        bookingBranch = item.bookingBranch,
                        deliveryLocation = item.deliveryLocation,
                        article = item.article,
                        loadedArticle = item.loadedArticle,
                        loadedWeight = item.loadedWeight,
                        receivedArticle = item.receivedArticle,
                        receivedWeight = item.receivedWeight,
                        godown = item.godown,
                        virtualGodown = item.virtualGodown,
                        receivedCondition = item.receivedCondition,
                        damageLeakageArticle = item.damageLeakageArticle,
                        damageLeakageWeight = item.damageLeakageWeight,
                        damageLeakageValue = item.damageLeakageValue,
                        DDbySame = item.DDbySame,
                        rollno = item.rollno,
                        vehicleArrivalDate = item.vehicleArrivalDate,
                        vehicleExpectedUploadDate = item.vehicleExpectedUploadDate,
                        vehicleActualUploadDate = item.vehicleActualUploadDate,
                        remark1 = item.remark1,
                        GRNo = item.GRNo,
                        consignor = item.consignor,
                        consignee = item.consignee,
                        packingType = item.packingType,
                        commodity = item.commodity,
                        ArticleRollNo = item.ArticleRollNo,
                        meter = item.meter,
                        weight = item.weight,
                        sortNo = item.sortNo,
                        lotNo = item.lotNo,
                        remark2 = item.remark2,
                        isActive = item.isActive,
                        vehicleName = tRSEntities4.VehicleMasters.Where(x => x.id == item.vehicleNo).Select(x => x.vehicleNo).FirstOrDefault(),
                    };
                    inwards.Add(model);
                }
                return inwards;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveInward(InwardModel model)
        {
            try
            {
                if (model!=null)
                {
                    InwardMaster inward = new InwardMaster
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
                        truckUnloadingNo = model.truckUnloadingNo,
                        truckUnloadingDate = model.truckUnloadingDate,
                        vehicleNo1 = model.vehicleNo1,
                        truckArrivalNo1 = model.truckArrivalNo1,
                        truckArrivalDate1 = model.truckArrivalDate1,
                        challanNo1 = model.challanNo1,
                        CNNo = model.CNNo,
                        CNDate = model.CNDate,
                        bookingBranch = model.bookingBranch,
                        deliveryLocation = model.deliveryLocation,
                        article = model.article,
                        loadedArticle = model.loadedArticle,
                        loadedWeight = model.loadedWeight,
                        receivedArticle = model.receivedArticle,
                        receivedWeight = model.receivedWeight,
                        godown = model.godown,
                        virtualGodown = model.virtualGodown,
                        receivedCondition = model.receivedCondition,
                        damageLeakageArticle = model.damageLeakageArticle,
                        damageLeakageWeight = model.damageLeakageWeight,
                        damageLeakageValue = model.damageLeakageValue,
                        DDbySame = model.DDbySame,
                        rollno = model.rollno,
                        vehicleArrivalDate = model.vehicleArrivalDate,
                        vehicleExpectedUploadDate = model.vehicleExpectedUploadDate,
                        vehicleActualUploadDate = model.vehicleActualUploadDate,
                        remark1 = model.remark1,
                        GRNo = model.GRNo,
                        consignor = model.consignor,
                        consignee = model.consignee,
                        packingType = model.packingType,
                        commodity = model.commodity,
                        ArticleRollNo = model.ArticleRollNo,
                        meter = model.meter,
                        weight = model.weight,
                        sortNo = model.sortNo,
                        lotNo = model.lotNo,
                        remark2 = model.remark2,
                        isActive = true,
                    };
                    tRSEntities4.InwardMasters.Add(inward);
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

        public InwardModel GetInwardMaster(int id)
        {
            try
            {
                var data = tRSEntities4.InwardMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    InwardModel model = new InwardModel();
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
                    model.truckUnloadingNo = data.truckUnloadingNo;
                    model.truckUnloadingDate = data.truckUnloadingDate;
                    model.vehicleNo1 = data.vehicleNo1;
                    model.truckArrivalNo1 = data.truckArrivalNo1;
                    model.truckArrivalDate1 = data.truckArrivalDate1;
                    model.challanNo1 = data.challanNo1;
                    model.CNNo = data.CNNo;
                    model.CNDate = data.CNDate;
                    model.bookingBranch = data.bookingBranch;
                    model.deliveryLocation = data.deliveryLocation;
                    model.article = data.article;
                    model.loadedArticle = data.loadedArticle;
                    model.loadedWeight = data.loadedWeight;
                    model.receivedArticle = data.receivedArticle;
                    model.receivedWeight = data.receivedWeight;
                    model.godown = data.godown;
                    model.virtualGodown = data.virtualGodown;
                    model.receivedCondition = data.receivedCondition;
                    model.damageLeakageArticle = data.damageLeakageArticle;
                    model.damageLeakageWeight = data.damageLeakageWeight;
                    model.damageLeakageValue = data.damageLeakageValue;
                    model.DDbySame = data.DDbySame;
                    model.rollno = data.rollno;
                    model.vehicleArrivalDate = data.vehicleArrivalDate;
                    model.vehicleExpectedUploadDate = data.vehicleExpectedUploadDate;
                    model.vehicleActualUploadDate = data.vehicleActualUploadDate;
                    model.remark1 = data.remark1;
                    model.GRNo = data.GRNo;
                    model.consignor = data.consignor;
                    model.consignee = data.consignee;
                    model.packingType = data.packingType;
                    model.commodity = data.commodity;
                    model.ArticleRollNo = data.ArticleRollNo;
                    model.meter = data.meter;
                    model.weight = data.weight;
                    model.sortNo = data.sortNo;
                    model.lotNo = data.lotNo;
                    model.remark2 = data.remark2;
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

        public bool UpdateInward(InwardModel model)
        {
            try
            {
                var data = tRSEntities4.InwardMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.truckArrivalNo = model.truckArrivalNo;
                    data.truckArrivalDate = model.truckArrivalDate;
                    data.vehicleNo = model.vehicleNo;
                    data.challanNo = model.challanNo;
                    data.challanDate = model.challanDate;
                    data.challanFrom = model.challanFrom;
                    data.challanTo = model.challanTo;
                    data.scheduledArriDate = model.scheduledArriDate;
                    data.expectedUnloadingTime = model.expectedUnloadingTime;
                    data.Remark = model.Remark;
                    data.truckUnloadingNo = model.truckUnloadingNo;
                    data.truckUnloadingDate = model.truckUnloadingDate;
                    data.vehicleNo1 = model.vehicleNo1;
                    data.truckArrivalNo1 = model.truckArrivalNo1;
                    data.truckArrivalDate1 = model.truckArrivalDate1;
                    data.challanNo1 = model.challanNo1;
                    data.CNNo = model.CNNo;
                    data.CNDate = model.CNDate;
                    data.bookingBranch = model.bookingBranch;
                    data.deliveryLocation = model.deliveryLocation;
                    data.article = model.article;
                    data.loadedArticle = model.loadedArticle;
                    data.loadedWeight = model.loadedWeight;
                    data.receivedArticle = model.receivedArticle;
                    data.receivedWeight = model.receivedWeight;
                    data.godown = model.godown;
                    data.virtualGodown = model.virtualGodown;
                    data.receivedCondition = model.receivedCondition;
                    data.damageLeakageArticle = model.damageLeakageArticle;
                    data.damageLeakageWeight = model.damageLeakageWeight;
                    data.damageLeakageValue = model.damageLeakageValue;
                    data.DDbySame = model.DDbySame;
                    data.rollno = model.rollno;
                    data.vehicleArrivalDate = model.vehicleArrivalDate;
                    data.vehicleExpectedUploadDate = model.vehicleExpectedUploadDate;
                    data.vehicleActualUploadDate = model.vehicleActualUploadDate;
                    data.remark1 = model.remark1;
                    data.GRNo = model.GRNo;
                    data.consignor = model.consignor;
                    data.consignee = model.consignee;
                    data.packingType = model.packingType;
                    data.commodity = model.commodity;
                    data.ArticleRollNo = model.ArticleRollNo;
                    data.meter = model.meter;
                    data.weight = model.weight;
                    data.sortNo = model.sortNo;
                    data.lotNo = model.lotNo;
                    data.remark2 = model.remark2;
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

        public bool DeleteInward(int id)
        {
            try
            {
                var data = tRSEntities4.InwardMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
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
