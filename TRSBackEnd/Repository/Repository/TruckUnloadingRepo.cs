using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Interface;
using Repository.Model;
using Repository.DB;

namespace Repository.Repository
{
    public class TruckUnloadingRepo:ITruckUnloadingRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public TruckUnloadingRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<TruckUnloadingModel> GetTruckUnloadingModels()
        {
            try
            {
                var data = tRSEntities.TruckUnloadings.Where(x => x.isActive == true).ToList();
                List<TruckUnloadingModel> truckUnloadings = new List<TruckUnloadingModel>();
                foreach (var item in data)
                {
                    TruckUnloadingModel model = new TruckUnloadingModel
                    {
                        id = item.id,
                        truckUnloadingNo = item.truckUnloadingNo,
                        truckUnloadingDate = item.truckUnloadingDate,
                        vehicleNo = item.vehicleNo,
                        truckArrivalNo = item.truckArrivalNo,
                        truckArrivalDate = item.truckArrivalDate,
                        challanNo = item.challanNo,
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
                        isActive=true,
                        vehicleNoName=tRSEntities.VehicleMasters.Where(x=>x.id==item.vehicleNo).Select(x=>x.vehicleNo).FirstOrDefault(),
                    };
                    truckUnloadings.Add(model);
                }
                return truckUnloadings;
            }
            catch (Exception e)
            {

                throw e;
            }   
        }

        public bool SaveTruckUnloading(TruckUnloadingModel model)
        {
            try
            {
                if (model!=null)
                {
                    TruckUnloading unloading = new TruckUnloading
                    {
                        truckUnloadingNo = model.truckUnloadingNo,
                        truckUnloadingDate = model.truckUnloadingDate,
                        vehicleNo = model.vehicleNo,
                        truckArrivalNo = model.truckArrivalNo,
                        truckArrivalDate = model.truckArrivalDate,
                        challanNo = model.challanNo,
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
                    tRSEntities.TruckUnloadings.Add(unloading);
                    tRSEntities.SaveChanges();
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

        public TruckUnloadingModel GetTruckUnloadingModel(int id)
        {
            try
            {
                var data = tRSEntities.TruckUnloadings.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    TruckUnloadingModel model = new TruckUnloadingModel();
                    model.id = data.id;
                    model.truckUnloadingNo = data.truckUnloadingNo;
                    model.truckUnloadingDate = data.truckUnloadingDate;
                    model.vehicleNo = data.vehicleNo;
                    model.truckArrivalNo = data.truckArrivalNo;
                    model.truckArrivalDate = data.truckArrivalDate;
                    model.challanNo = data.challanNo;
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

        public bool UpdateTruckUnloading(TruckUnloadingModel model)
        {
            try
            {
                var data = tRSEntities.TruckUnloadings.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.truckUnloadingNo = model.truckUnloadingNo;
                    data.truckUnloadingDate = model.truckUnloadingDate;
                    data.vehicleNo = model.vehicleNo;
                    data.truckArrivalNo = model.truckArrivalNo;
                    data.truckArrivalDate = model.truckArrivalDate;
                    data.challanNo = model.challanNo;
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
                    tRSEntities.SaveChanges();
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

        public bool DeleteTruckUnloading(int id)
        {
            try
            {
                var data = tRSEntities.TruckUnloadings.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    tRSEntities.SaveChanges();
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
