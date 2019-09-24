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
    public class ReceiptRepo:IReceiptRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public ReceiptRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<ReceiptModel> GetReceiptModels()
        {
            try
            {
                var data = tRSEntities.ReceiptMasters.Where(x => x.IsActive == true).ToList();
                List<ReceiptModel> receipts = new List<ReceiptModel>();
                foreach (var item in data)
                {
                    ReceiptModel model = new ReceiptModel
                    {
                        id = item.id,
                        BMRno = item.BMRno,
                        BMRdate = item.BMRdate,
                        Cash = item.Cash,
                        Chequeno = item.Chequeno,
                        Chequedate = item.Chequedate,
                        Receivedamount = item.Receivedamount,
                        Billno = item.Billno,
                        Billamount = item.Billamount,
                        TDS = item.TDS,
                        FreightDeduction = item.FreightDeduction,
                        Etc = item.Etc,
                        remark = item.remark,
                        financeeffect = item.financeeffect,
                        IsActive = (bool)item.IsActive,
                    };
                    receipts.Add(model);
                }
                return receipts;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveReceipt(ReceiptModel model)
        {
            try
            {
                if (model!=null)
                {
                    ReceiptMaster master = new ReceiptMaster
                    {
                        BMRno = model.BMRno,
                        BMRdate = model.BMRdate,
                        Cash = model.Cash,
                        Chequeno = model.Chequeno,
                        Chequedate = model.Chequedate,
                        Receivedamount = model.Receivedamount,
                        Billno = model.Billno,
                        Billamount = model.Billamount,
                        TDS = model.TDS,
                        FreightDeduction = model.FreightDeduction,
                        Etc = model.Etc,
                        remark = model.remark,
                        financeeffect = model.financeeffect,
                        IsActive = true,
                    };
                    tRSEntities.ReceiptMasters.Add(master);
                    tRSEntities.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ReceiptModel GetReceiptModel(int id)
        {
            try
            {
                var data = tRSEntities.ReceiptMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (data!=null)
                {
                    ReceiptModel model = new ReceiptModel();
                    model.id = data.id;
                    model.BMRno = data.BMRno;
                    model.BMRdate = data.BMRdate;
                    model.Cash = data.Cash;
                    model.Chequeno = data.Chequeno;
                    model.Chequedate = data.Chequedate;
                    model.Receivedamount = data.Receivedamount;
                    model.Billno = data.Billno;
                    model.Billamount = data.Billamount;
                    model.TDS = data.TDS;
                    model.FreightDeduction = data.FreightDeduction;
                    model.Etc = data.Etc;
                    model.remark = data.remark;
                    model.financeeffect = data.financeeffect;
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

        public bool UpdateReceipt(ReceiptModel model)
        {
            try
            {
                var data = tRSEntities.ReceiptMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.BMRno = model.BMRno;
                    data.BMRdate = model.BMRdate;
                    data.Cash = model.Cash;
                    data.Chequeno = model.Chequeno;
                    data.Chequedate = model.Chequedate;
                    data.Receivedamount = model.Receivedamount;
                    data.Billno = model.Billno;
                    data.Billamount = model.Billamount;
                    data.TDS = model.TDS;
                    data.FreightDeduction = model.FreightDeduction;
                    data.Etc = model.Etc;
                    data.remark = model.remark;
                    data.financeeffect = model.financeeffect;
                    data.IsActive = true;
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

        public bool DeleteReceipt(int id)
        {
            try
            {
                var data = tRSEntities.ReceiptMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.IsActive = false;
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
