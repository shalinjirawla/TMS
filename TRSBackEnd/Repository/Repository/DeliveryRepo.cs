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
    public class DeliveryRepo: IDeliveryRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public DeliveryRepo()
        {
            tRSEntities = new TRSEntities4();
        }
        public List<DeliveryModel> GetDeliveryModels()
        {
            try
            {
                List<DeliveryModel> deliveries = new List<DeliveryModel>();
                var data = tRSEntities.DeliveryMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    DeliveryModel model = new DeliveryModel
                    {
                        id = item.id,
                        gatepassNo = item.gatepassNo,
                        gatepassdate = item.gatepassdate,
                        paymentmode=item.paymentmode,
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
                        predeliveryNo = item.predeliveryNo,
                        predeliverydate = item.predeliverydate,
                        paymentmode1 = item.paymentmode1,
                        deliveryparty1 = item.deliveryparty1,
                        deliverypartydetails1 = item.deliverypartydetails1,
                        contractpartydetails1 = item.contractpartydetails1,
                        CNno1 = item.CNno1,
                        CNdate1 = item.CNdate1,
                        bookingbranch1 = item.bookingbranch1,
                        consignoor1 = item.consignoor1,
                        item1 = item.item1,
                        packingType1 = item.packingType1,
                        godownname1 = item.godownname1,
                        virtualgodownname1 = item.virtualgodownname1,
                        deliveryarticle1 = item.deliveryarticle1,
                        deliveryweight1 = item.deliveryweight1,
                        balancearticle1 = item.balancearticle1,
                        balanceweight1 = item.balanceweight1,
                        rollNo1 = item.rollNo1,
                        remark2 = item.remark2,
                        DDlocalchallanNo = item.DDlocalchallanNo,
                        prideliveryNo1 = item.prideliveryNo1,
                        Hirecharges = item.Hirecharges,
                        vehicleNo1 = item.vehicleNo1,
                        remark1 = item.remark1,
                        doordeliveryNo = item.doordeliveryNo,
                        CNno2 = item.CNno2,
                        CNdate2 = item.CNdate2,
                        bookingbranch2 = item.bookingbranch2,
                        consignor2 = item.consignor2,
                        item2 = item.item2,
                        deliveryarticle2 = item.deliveryarticle2,
                        deliveryweight2 = item.deliveryweight2,
                        undeliveredarticle = item.undeliveredarticle,
                        undeliveredweight = item.undeliveredweight,
                        balancearticle2 = item.balancearticle2,
                        balanceweight2 = item.balanceweight2,
                        rollno2 = item.rollno2,
                        remark3 = item.remark3,
                        billNo = item.billNo,
                        billdate = item.billdate,
                        CNno3 = item.CNno3,
                        CNdate3 = item.CNdate3,
                        bookingbranch3 = item.bookingbranch3,
                        deliverybranch1 = item.deliverybranch1,
                        article = item.article,
                        actualweight = item.actualweight,
                        chargeweight = item.chargeweight,
                        freightdetails = item.freightdetails,
                        paymentmode2 = item.paymentmode2,
                        amount = item.amount,
                        chequeNo = item.chequeNo,
                        chequedate = item.chequedate,
                        amount1 = item.amount1,
                        remark4 = item.remark4,
                        isActive = item.isActive,
                        bookingbranchname = tRSEntities.BookingMasters.Where(x => x.id == item.bookingbranch).Select(x => x.branch).FirstOrDefault(),
                    };
                    deliveries.Add(model);
                }
                return deliveries;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveDelivery(DeliveryModel model)
        {
            try
            {
                if (model!=null)
                {
                    DeliveryMaster delivery = new DeliveryMaster
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
                        predeliveryNo = model.predeliveryNo,
                        predeliverydate = model.predeliverydate,
                        paymentmode1 = model.paymentmode1,
                        deliveryparty1 = model.deliveryparty1,
                        deliverypartydetails1 = model.deliverypartydetails1,
                        contractparty1 = model.contractparty1,
                        contractpartydetails1 = model.contractpartydetails1,
                        CNno1 = model.CNno1,
                        CNdate1 = model.CNdate1,
                        bookingbranch1 = model.bookingbranch1,
                        consignoor1 = model.consignoor1,
                        item1 = model.item1,
                        packingType1 = model.packingType1,
                        godownname1 = model.godownname1,
                        virtualgodownname1 = model.virtualgodownname,
                        deliveryarticle1 = model.deliveryarticle1,
                        deliveryweight1 = model.deliveryweight1,
                        balancearticle1 = model.balancearticle,
                        balanceweight1 = model.balanceweight1,
                        rollNo1 = model.rollNo1,
                        remark2 = model.remark2,
                        DDlocalchallanNo = model.DDlocalchallanNo,
                        DDlocalchallanDate = model.DDlocalchallanDate,
                        prideliveryNo1 = model.prideliveryNo1,
                        Hirecharges = model.Hirecharges,
                        vehicleNo1 = model.vehicleNo1,
                        remark1 = model.remark1,
                        doordeliveryNo = model.doordeliveryNo,
                        CNno2 = model.CNno2,
                        CNdate2 = model.CNdate2,
                        bookingbranch2 = model.bookingbranch2,
                        consignor2 = model.consignor2,
                        item2 = model.item2,
                        deliveryarticle2 = model.deliveryarticle2,
                        deliveryweight2 = model.deliveryweight2,
                        undeliveredarticle = model.undeliveredarticle,
                        undeliveredweight = model.undeliveredweight,
                        balancearticle2 = model.balancearticle2,
                        balanceweight2 = model.balanceweight2,
                        rollno2 = model.rollno2,
                        remark3 = model.remark3,
                        billNo = model.billNo,
                        billdate = model.billdate,
                        CNno3 = model.CNno3,
                        CNdate3 = model.CNdate3,
                        bookingbranch3 = model.bookingbranch3,
                        deliverybranch1 = model.deliverybranch1,
                        article = model.article,
                        actualweight = model.actualweight,
                        chargeweight = model.chargeweight,
                        freightdetails = model.freightdetails,
                        paymentmode2 = model.paymentmode2,
                        amount = model.amount,
                        chequeNo = model.chequeNo,
                        chequedate = model.chequedate,
                        amount1 = model.amount1,
                        remark4 = model.remark4,
                        isActive = true,
                    };
                    tRSEntities.DeliveryMasters.Add(delivery);
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

        public DeliveryModel GetDeliveryModel(int id)
        {
            try
            {
                var data = tRSEntities.DeliveryMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    DeliveryModel model = new DeliveryModel
                    {
                        id = data.id,
                        gatepassNo = data.gatepassNo,
                        gatepassdate = data.gatepassdate,
                        paymentmode = data.paymentmode,
                        deliveryparty = data.deliveryparty,
                        deliverypartydetails = data.deliverypartydetails,
                        contractparty = data.contractparty,
                        contractpartydetails = data.contractpartydetails,
                        CNno = data.CNno,
                        CNdate = data.CNdate,
                        bookingbranch = data.bookingbranch,
                        consignor = data.consignor,
                        item = data.item,
                        packingType = data.packingType,
                        godownname = data.godownname,
                        virtualgodownname = data.virtualgodownname,
                        deliveryarticle = data.deliveryarticle,
                        deliveryweight = data.deliveryweight,
                        balancearticle = data.balancearticle,
                        balanceweight = data.balanceweight,
                        rollno = data.rollno,
                        handedoverto = data.handedoverto,
                        contractNo = data.contractNo,
                        vehicleNo = data.vehicleNo,
                        GUTKANo = data.GUTKANo,
                        remark = data.remark,
                        predeliveryNo = data.predeliveryNo,
                        predeliverydate = data.predeliverydate,
                        paymentmode1 = data.paymentmode1,
                        deliveryparty1 = data.deliveryparty1,
                        deliverypartydetails1 = data.deliverypartydetails1,
                        contractparty1 = data.contractparty1,
                        contractpartydetails1 = data.contractpartydetails1,
                        CNno1 = data.CNno1,
                        CNdate1 = data.CNdate1,
                        bookingbranch1 = data.bookingbranch,
                        consignoor1 = data.consignoor1,
                        item1 = data.item,
                        packingType1 = data.packingType,
                        godownname1 = data.godownname,
                        virtualgodownname1 = data.virtualgodownname,
                        deliveryarticle1 = data.deliveryarticle1,
                        deliveryweight1 = data.deliveryweight1,
                        balancearticle1 = data.balancearticle1,
                        balanceweight1 = data.balanceweight1,
                        rollNo1 = data.rollNo1,
                        remark1 = data.remark,
                        DDlocalchallanNo = data.DDlocalchallanNo,
                        DDlocalchallanDate = data.DDlocalchallanDate,
                        prideliveryNo1 = data.prideliveryNo1,
                        Hirecharges = data.Hirecharges,
                        vehicleNo1 = data.vehicleNo1,
                        remark2 = data.remark2,
                        doordeliveryNo = data.doordeliveryNo,
                        CNno2 = data.CNno2,
                        CNdate2 = data.CNdate2,
                        bookingbranch2 = data.bookingbranch2,
                        consignor2 = data.consignor2,
                        item2 = data.item2,
                        deliveryarticle2 = data.deliveryarticle2,
                        deliveryweight2 = data.deliveryweight2,
                        undeliveredarticle = data.undeliveredarticle,
                        undeliveredweight = data.undeliveredweight,
                        balancearticle2 = data.balancearticle,
                        balanceweight2 = data.balanceweight2,
                        rollno2 = data.rollno,
                        remark3 = data.remark,
                        billNo = data.billNo,
                        billdate = data.billdate,
                        CNno3 = data.CNno3,
                        CNdate3 = data.CNdate3,
                        bookingbranch3 = data.bookingbranch3,
                        deliverybranch1 = data.deliverybranch1,
                        article = data.article,
                        actualweight = data.actualweight,
                        chargeweight = data.chargeweight,
                        freightdetails = data.freightdetails,
                        paymentmode2 = data.paymentmode2,
                        amount = data.amount,
                        chequeNo = data.chequeNo,
                        chequedate = data.chequedate,
                        amount1 = data.amount1,
                        remark4 = data.remark4,
                    };
                    return model;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdateDelivery(DeliveryModel model)
        {
            try
            {
                var data = tRSEntities.DeliveryMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data !=null)
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
                    data.predeliveryNo = model.predeliveryNo;
                    data.predeliverydate = model.predeliverydate;
                    data.paymentmode1 = model.paymentmode1;
                    data.deliveryparty1 = model.deliveryparty1;
                    data.deliverypartydetails1 = model.deliverypartydetails1;
                    data.contractparty1 = model.contractparty1;
                    data.contractpartydetails1 = model.contractpartydetails1;
                    data.CNno1 = model.CNno1;
                    data.CNdate1 = model.CNdate1;
                    data.bookingbranch1 = model.bookingbranch1;
                    data.consignoor1 = model.consignoor1;
                    data.item1 = model.item1;
                    data.packingType1 = model.packingType1;
                    data.godownname1 = model.godownname1;
                    data.virtualgodownname1 = model.virtualgodownname1;
                    data.deliveryarticle1 = model.deliveryarticle1;
                    data.deliveryweight1 = model.deliveryweight1;
                    data.balancearticle1 = model.balancearticle1;
                    data.balanceweight1 = model.balanceweight1;
                    data.rollNo1 = model.rollNo1;
                    data.remark1 = model.remark1;
                    data.DDlocalchallanNo = model.DDlocalchallanNo;
                    data.DDlocalchallanDate = model.DDlocalchallanDate;
                    data.prideliveryNo1 = model.prideliveryNo1;
                    data.Hirecharges = model.Hirecharges;
                    data.vehicleNo1 = model.vehicleNo1;
                    data.remark2 = model.remark2;
                    data.doordeliveryNo = model.doordeliveryNo;
                    data.CNno2 = model.CNno2;
                    data.CNdate2 = model.CNdate2;
                    data.bookingbranch2 = model.bookingbranch2;
                    data.consignor2 = model.consignor2;
                    data.item = model.item;
                    data.deliveryarticle2 = model.deliveryarticle2;
                    data.deliveryweight2 = model.deliveryweight2;
                    data.undeliveredarticle = model.undeliveredarticle;
                    data.undeliveredweight = model.undeliveredweight;
                    data.balancearticle2 = model.balancearticle2;
                    data.balanceweight2 = model.balanceweight2;
                    data.rollno2 = model.rollno2;
                    data.remark3 = model.remark3;
                    data.billNo = model.billNo;
                    data.billdate = model.billdate;
                    data.CNno3 = model.CNno3;
                    data.CNdate3 = model.CNdate3;
                    data.bookingbranch3 = model.bookingbranch3;
                    data.deliverybranch1 = model.deliverybranch1;
                    data.article = model.article;
                    data.actualweight = model.actualweight;
                    data.chargeweight = model.chargeweight;
                    data.freightdetails = model.freightdetails;
                    data.paymentmode2 = model.paymentmode2;
                    data.amount = model.amount;
                    data.chequeNo = model.chequeNo;
                    data.chequedate = model.chequedate;
                    data.amount1 = model.amount1;
                    data.remark4 = model.remark4;
                    tRSEntities.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool DeleteDelivery(int id)
        {
            try
            {
                var data = tRSEntities.DeliveryMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data  !=null)
                {
                    data.isActive = false;
                    tRSEntities.SaveChanges();
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
