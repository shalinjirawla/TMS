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
    public class DoorDeliveryConfirmRepo:IDoorDeliveryConfirmRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public DoorDeliveryConfirmRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<DoorDeliveryConfirmModel> GetDoorDeliveryConfirmModels()
        {
            try
            {
                var data = tRSEntities4.DoorDeliveryConfirms.Where(x => x.isActive == true).ToList();
                List<DoorDeliveryConfirmModel> confirmModels = new List<DoorDeliveryConfirmModel>();
                foreach (var item in data)
                {
                    DoorDeliveryConfirmModel model = new DoorDeliveryConfirmModel
                    {
                        id = item.id,
                        doordeliveryNo = item.doordeliveryNo,
                        predeliveryNo = item.predeliveryNo,
                        CNno = item.CNno,
                        CNdate = item.CNdate,
                        bookingbranch = item.bookingbranch,
                        consignor = item.consignor,
                        item = item.item,
                        deliveryarticle = item.deliveryarticle,
                        deliveryweight = item.deliveryweight,
                        undeliveredarticle = item.undeliveredarticle,
                        undeliveredweight = item.undeliveredweight,
                        balancearticle = item.balancearticle,
                        balanceweight = item.balanceweight,
                        rollno = item.rollno,
                        remark = item.remark,
                        isActive = true,
                        predeliveryNoName=tRSEntities4.PreDeliveries.Where(x=>x.id==item.predeliveryNo).Select(x=>x.predeliveryNo).FirstOrDefault(),
                        //bookingbranchname=tRSEntities4.ReserveBookings.Where(x=>x.id==item.bookingbranch).Select(x=>x.branch).FirstOrDefault(),
                    };
                    confirmModels.Add(model);
                }
                return confirmModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveDeliveryConfirm(DoorDeliveryConfirmModel model)
        {
            try
            {
                if (model!=null)
                {
                    DoorDeliveryConfirm confirm = new DoorDeliveryConfirm
                    {
                        doordeliveryNo = model.doordeliveryNo,
                        predeliveryNo = model.predeliveryNo,
                        CNno = model.CNno,
                        CNdate = model.CNdate,
                        bookingbranch = model.bookingbranch,
                        consignor = model.consignor,
                        item = model.item,
                        deliveryarticle = model.deliveryarticle,
                        deliveryweight = model.deliveryweight,
                        undeliveredarticle = model.undeliveredarticle,
                        undeliveredweight = model.undeliveredweight,
                        balancearticle = model.balancearticle,
                        balanceweight = model.balanceweight,
                        rollno = model.rollno,
                        remark = model.remark,
                        isActive = true,
                    };
                    tRSEntities4.DoorDeliveryConfirms.Add(confirm);
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

        public DoorDeliveryConfirmModel GetDoorDeliveryConfirmModel(int id)
        {
            try
            {
                var data = tRSEntities4.DoorDeliveryConfirms.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    DoorDeliveryConfirmModel model = new DoorDeliveryConfirmModel();
                    model.id = data.id;
                    model.doordeliveryNo = data.doordeliveryNo;
                    model.predeliveryNo = data.predeliveryNo;
                    model.CNno = data.CNno;
                    model.CNdate = data.CNdate;
                    model.bookingbranch = data.bookingbranch;
                    model.consignor = data.consignor;
                    model.item = data.item;
                    model.deliveryarticle = data.deliveryarticle;
                    model.deliveryweight = data.deliveryweight;
                    model.undeliveredarticle = data.undeliveredarticle;
                    model.undeliveredweight = data.undeliveredweight;
                    model.balancearticle = data.balancearticle;
                    model.balanceweight = data.balanceweight;
                    model.rollno = data.rollno;
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

        public bool UpdateDoorDeliveryConfirm (DoorDeliveryConfirmModel model)
        {
            try
            {
                var data = tRSEntities4.DoorDeliveryConfirms.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.doordeliveryNo = model.doordeliveryNo;
                    data.predeliveryNo = model.predeliveryNo;
                    data.CNno = model.CNno;
                    data.CNdate = model.CNdate;
                    data.bookingbranch = model.bookingbranch;
                    data.consignor = model.consignor;
                    data.item = model.item;
                    data.deliveryarticle = model.deliveryarticle;
                    data.deliveryweight = model.deliveryweight;
                    data.undeliveredarticle = model.undeliveredarticle;
                    data.undeliveredweight = model.undeliveredweight;
                    data.balancearticle = model.balancearticle;
                    data.balanceweight = model.balanceweight;
                    data.rollno = model.rollno;
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

        public bool DeleteDoorDeliveryConfirm(int id)
        {
            try
            {
                var data = tRSEntities4.DoorDeliveryConfirms.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
