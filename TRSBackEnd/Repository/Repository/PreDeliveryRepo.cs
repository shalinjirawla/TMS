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
    public class PreDeliveryRepo:IPreDeliveryRepo
    {
        private TRSEntities4 tRSEntities;
        public PreDeliveryRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<PreDeliveryModel> GetPreDeliveryModels()
        {
            try
            {
                var data = tRSEntities.PreDeliveries.Where(x => x.isActive == true).ToList();
                List<PreDeliveryModel> preDeliveries = new List<PreDeliveryModel>();
                foreach (var item in data)
                {
                    PreDeliveryModel model = new PreDeliveryModel
                    {
                        id = item.id,
                        predeliveryNo = item.predeliveryNo,
                        predeliverydate = item.predeliverydate,
                        paymentmode = item.paymentmode,
                        deliveryparty = item.deliveryparty,
                        deliverypartydetails = item.deliverypartydetails,
                        contractparty = item.contractparty,
                        contractpartydetails = item.contractpartydetails,
                        CNno = item.CNno,
                        CNdate = item.CNdate,
                        bookingbranch = item.bookingbranch,
                        consignoor = item.consignoor,
                        item = item.item,
                        packingType = item.packingType,
                        godownname = item.godownname,
                        virtualgodownname = item.virtualgodownname,
                        deliveryarticle = item.deliveryarticle,
                        deliveryweight = item.deliveryweight,
                        balancearticle = item.balancearticle,
                        balanceweight = item.balanceweight,
                        rollNo = item.rollNo,
                        remark = item.remark,
                        isActive = true,
                    };
                    preDeliveries.Add(model);
                }
                return preDeliveries;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SavePreDeliveryModel(PreDeliveryModel model)
        {
            try
            {
                if (model!=null)
                {
                    PreDelivery preDelivery = new PreDelivery
                    {
                        predeliveryNo = model.predeliveryNo,
                        predeliverydate = model.predeliverydate,
                        paymentmode = model.paymentmode,
                        deliveryparty = model.deliveryparty,
                        deliverypartydetails = model.deliverypartydetails,
                        contractparty = model.contractparty,
                        contractpartydetails = model.contractpartydetails,
                        CNno = model.CNno,
                        CNdate = model.CNdate,
                        bookingbranch = model.bookingbranch,
                        consignoor = model.consignoor,
                        item = model.item,
                        packingType = model.packingType,
                        godownname = model.godownname,
                        virtualgodownname = model.virtualgodownname,
                        deliveryarticle = model.deliveryarticle,
                        deliveryweight = model.deliveryweight,
                        balancearticle = model.balancearticle,
                        balanceweight = model.balanceweight,
                        rollNo = model.rollNo,
                        remark = model.remark,
                        isActive = true,
                    };
                    tRSEntities.PreDeliveries.Add(preDelivery);
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

        public PreDeliveryModel GetPreDeliveryModel(int id)
        {
            try
            {
                var data = tRSEntities.PreDeliveries.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    PreDeliveryModel model = new PreDeliveryModel();
                    model.id = data.id;
                    model.predeliveryNo = data.predeliveryNo;
                    model.predeliverydate = data.predeliverydate;
                    model.paymentmode = data.paymentmode;
                    model.deliveryparty = data.deliveryparty;
                    model.deliverypartydetails = data.deliverypartydetails;
                    model.contractparty = data.contractparty;
                    model.contractpartydetails = data.contractpartydetails;
                    model.CNno = data.CNno;
                    model.CNdate = data.CNdate;
                    model.bookingbranch = data.bookingbranch;
                    model.consignoor = data.consignoor;
                    model.item = data.item;
                    model.packingType = data.packingType;
                    model.godownname = data.godownname;
                    model.virtualgodownname = data.virtualgodownname;
                    model.deliveryarticle = data.deliveryarticle;
                    model.deliveryweight = data.deliveryweight;
                    model.balancearticle = data.balancearticle;
                    model.balanceweight = data.balanceweight;
                    model.rollNo = data.rollNo;
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

        public bool UpdatePreDelivery(PreDeliveryModel model)
        {
            try
            {
                var data = tRSEntities.PreDeliveries.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.predeliveryNo = model.predeliveryNo;
                    data.predeliverydate = model.predeliverydate;
                    data.paymentmode = model.paymentmode;
                    data.deliveryparty = model.deliveryparty;
                    data.deliverypartydetails = model.deliverypartydetails;
                    data.contractparty = model.contractparty;
                    data.contractpartydetails = model.contractpartydetails;
                    data.CNno = model.CNno;
                    data.CNdate = model.CNdate;
                    data.bookingbranch = model.bookingbranch;
                    data.consignoor = model.consignoor;
                    data.item = model.item;
                    data.packingType = model.packingType;
                    data.godownname = model.godownname;
                    data.virtualgodownname = model.virtualgodownname;
                    data.deliveryarticle = model.deliveryarticle;
                    data.deliveryweight = model.deliveryweight;
                    data.balancearticle = model.balancearticle;
                    data.balanceweight = model.balanceweight;
                    data.rollNo = model.rollNo;
                    data.remark = model.remark;
                    data.isActive = true;
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

        public bool DeletePreDelivery(int id)
        {
            try
            {
                var data = tRSEntities.PreDeliveries.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
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
