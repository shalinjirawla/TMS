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
    public class BillRepo:IBillRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public BillRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<BillModel> GetBillModels()
        {
            try
            {
                var data = tRSEntities.Bills.Where(x => x.isActive == true).ToList();
                List<BillModel> models = new List<BillModel>();
                foreach (var item in data)
                {
                    BillModel billModel = new BillModel
                    {
                        id = item.id,
                        billNo = item.billNo,
                        billdate = item.billdate,
                        CNno = item.CNno,
                        CNdate = item.CNdate,
                        bookingbranch = item.bookingbranch,
                        deliverybranch = item.deliverybranch,
                        article = item.article,
                        actualweight = item.actualweight,
                        chargeweight = item.chargeweight,
                        freightdetails = item.freightdetails,
                        paymentmode = item.paymentmode,
                        amount = item.amount,
                        chequeNo = item.chequeNo,
                        chequedate = item.chequedate,
                        amount1 = item.amount1,
                        remark4 = item.remark4,
                        isActive = true,
                        bookingbranchName = tRSEntities.BranchMasters.Where(x => x.id == item.bookingbranch).Select(x => x.branchName).FirstOrDefault(),

                    };
                    models.Add(billModel);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveBill(BillModel model)
        {
            try
            {
                if (model!=null)
                {
                    Bill bill = new Bill
                    {
                        billNo = model.billNo,
                        billdate = model.billdate,
                        CNno = model.CNno,
                        CNdate = model.CNdate,
                        bookingbranch = model.bookingbranch,
                        deliverybranch = model.deliverybranch,
                        article = model.article,
                        actualweight = model.actualweight,
                        chargeweight = model.chargeweight,
                        freightdetails = model.freightdetails,
                        paymentmode = model.paymentmode,
                        amount = model.amount,
                        chequeNo = model.chequeNo,
                        chequedate = model.chequedate,
                        amount1 = model.amount1,
                        remark4 = model.remark4,
                        isActive = true,
                    };
                    tRSEntities.Bills.Add(bill);
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

        public BillModel GetBillRepo(int id)
        {
            try
            {
                var data = tRSEntities.Bills.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    BillModel model = new BillModel();
                    model.id = data.id;
                    model.billNo = data.billNo;
                    model.billdate = data.billdate;
                    model.CNno = data.CNno;
                    model.CNdate = data.CNdate;
                    model.bookingbranch = data.bookingbranch;
                    model.deliverybranch = data.deliverybranch;
                    model.article = data.article;
                    model.actualweight = data.actualweight;
                    model.chargeweight = data.chargeweight;
                    model.chargeweight = data.chargeweight;
                    model.freightdetails = data.freightdetails;
                    model.paymentmode = data.paymentmode;
                    model.amount = data.amount;
                    model.chequeNo = data.chequeNo;
                    model.chequedate = data.chequedate;
                    model.amount1 = data.amount1;
                    model.remark4 = data.remark4;
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

        public bool UpdateBill(BillModel model)
        {
            try
            {
                var data = tRSEntities.Bills.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.billNo = model.billNo;
                    data.billdate = model.billdate;
                    data.CNno = model.CNno;
                    data.CNdate = model.CNdate;
                    data.bookingbranch = model.bookingbranch;
                    data.deliverybranch = model.deliverybranch;
                    data.article = model.article;
                    data.actualweight = model.actualweight;
                    data.chargeweight = model.chargeweight;
                    data.freightdetails = model.freightdetails;
                    data.paymentmode = model.paymentmode;
                    data.amount = model.amount;
                    data.chequeNo = model.chequeNo;
                    data.chequedate = model.chequedate;
                    data.amount1 = model.amount1;
                    data.remark4 = model.remark4;
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

        public bool DeleteBill(int id)
        {
            try
            {
                var data = tRSEntities.Bills.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
