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
    public class GodownDeliveryRepo : IGodownDeliveryRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public GodownDeliveryRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<GodownDeliveryModel> GetGodownDeliveryModels()
        {
            try
            {
                var data = tRSEntities4.GodownDeliveries.Where(x => x.isActive == true).ToList();
                List<GodownDeliveryModel> deliveryModels = new List<GodownDeliveryModel>();
                foreach (var item in data)
                {
                    GodownDeliveryModel model = new GodownDeliveryModel
                    {
                        id = item.id,
                        gatepassdate = item.gatepassdate,
                        gatepassNo = item.gatepassNo,
                        paymentmode = item.paymentmode,
                        deliveryparty = item.deliveryparty,
                        deliverypartydetails = item.deliverypartydetails,
                        contractparty = item.contractparty,
                        contractpartydetails = item.contractpartydetails,
                        CNno = item.CNno,
                        CNdate = item.CNdate,
                        bookingbranch = item.bookingbranch,
                        consignor = item.consignor,
                        item = item.item,
                        packingType = item.packingType,
                        godownname = item.godownname,
                        virtualgodownname = item.virtualgodownname,
                        deliveryarticle = item.deliveryarticle,
                        deliveryweight = item.deliveryweight,
                        balancearticle = item.balancearticle,
                        balanceweight = item.balanceweight,
                        rollno = item.rollno,
                        handedoverto = item.handedoverto,
                        contractNo = item.contractNo,
                        vehicleNo = item.vehicleNo,
                        GUTKANo = item.GUTKANo,
                        remark = item.remark,
                        isActive = true,
                    };
                    deliveryModels.Add(model);
                }
                return deliveryModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveGodownDelivery(GodownDeliveryModel model)
        {
            try
            {
                if (model != null)
                {
                    GodownDelivery godown = new GodownDelivery
                    {
                        gatepassNo = model.gatepassNo,
                        gatepassdate = model.gatepassdate,
                        paymentmode = model.paymentmode,
                        deliveryparty = model.deliveryparty,
                        deliverypartydetails = model.deliverypartydetails,
                        contractparty = model.contractparty,
                        contractpartydetails = model.contractpartydetails,
                        CNno = model.CNno,
                        CNdate = model.CNdate,
                        bookingbranch = model.bookingbranch,
                        consignor = model.consignor,
                        item = model.item,
                        packingType = model.packingType,
                        godownname = model.godownname,
                        virtualgodownname = model.virtualgodownname,
                        deliveryarticle = model.deliveryarticle,
                        deliveryweight = model.deliveryweight,
                        balancearticle = model.balancearticle,
                        balanceweight = model.balanceweight,
                        rollno = model.rollno,
                        handedoverto = model.handedoverto,
                        contractNo = model.contractNo,
                        vehicleNo = model.vehicleNo,
                        GUTKANo = model.GUTKANo,
                        remark = model.remark,
                        isActive = true,
                    };
                    tRSEntities4.GodownDeliveries.Add(godown);
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

        public GodownDeliveryModel GetGodownDeliveryModel(int id)
        {
            try
            {
                var data = tRSEntities4.GodownDeliveries.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    GodownDeliveryModel model = new GodownDeliveryModel();
                    model.id = data.id;
                    model.gatepassNo = data.gatepassNo;
                    model.gatepassdate = data.gatepassdate;
                    model.paymentmode = data.paymentmode;
                    model.deliveryparty = data.deliveryparty;
                    model.deliverypartydetails = data.deliverypartydetails;
                    model.contractparty = data.contractparty;
                    model.contractpartydetails = data.contractpartydetails;
                    model.CNno = data.CNno;
                    model.CNdate = data.CNdate;
                    model.bookingbranch = data.bookingbranch;
                    model.consignor = data.consignor;
                    model.item = data.item;
                    model.packingType = data.packingType;
                    model.godownname = data.godownname;
                    model.virtualgodownname = data.virtualgodownname;
                    model.deliveryarticle = data.deliveryarticle;
                    model.deliveryweight = data.deliveryweight;
                    model.balancearticle = data.balancearticle;
                    model.balanceweight = data.balanceweight;
                    model.rollno = data.rollno;
                    model.handedoverto = data.handedoverto;
                    model.contractNo = data.contractNo;
                    model.vehicleNo = data.vehicleNo;
                    model.GUTKANo = data.GUTKANo;
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

        public bool UpdateGodownDelivery(GodownDeliveryModel model)
        {
            try
            {
                var data = tRSEntities4.GodownDeliveries.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.gatepassNo = model.gatepassNo;
                    data.gatepassdate = model.gatepassdate;
                    data.paymentmode = model.paymentmode;
                    data.deliveryparty = model.deliveryparty;
                    data.deliverypartydetails = model.deliverypartydetails;
                    data.contractparty = model.contractparty;
                    data.contractpartydetails = model.contractpartydetails;
                    data.CNno = model.CNno;
                    data.CNdate = model.CNdate;
                    data.bookingbranch = model.bookingbranch;
                    data.consignor = model.consignor;
                    data.item = model.item;
                    data.packingType = model.packingType;
                    data.godownname = model.godownname;
                    data.virtualgodownname = model.virtualgodownname;
                    data.deliveryarticle = model.deliveryarticle;
                    data.deliveryweight = model.deliveryweight;
                    data.balancearticle = model.balancearticle;
                    data.balanceweight = model.balanceweight;
                    data.rollno = model.rollno;
                    data.handedoverto = model.handedoverto;
                    data.contractNo = model.contractNo;
                    data.vehicleNo = model.vehicleNo;
                    data.GUTKANo = model.GUTKANo;
                    data.remark = model.remark;
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

        public bool DeleteGodownDelivery(int id)
        {
            try
            {
                var data = tRSEntities4.GodownDeliveries.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
