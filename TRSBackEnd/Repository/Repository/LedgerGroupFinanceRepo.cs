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
    public class LedgerGroupFinanceRepo:ILedgerGroupFinanceRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public LedgerGroupFinanceRepo()
        {
            tRSEntities = new TRSEntities4();            
        }

        public List<LedgerGroupFinanceModel> GetLedgerGroupFinanceModels()
        {
            try
            {
                var data = tRSEntities.LedgerGroupFinances.Where(x => x.isActive == true).ToList();
                List<LedgerGroupFinanceModel> financeModels = new List<LedgerGroupFinanceModel>();
                foreach (var item in data)
                {
                    LedgerGroupFinanceModel model = new LedgerGroupFinanceModel
                    {
                        id = item.id,
                        ledgergroupname = item.ledgergroupname,
                        nature = item.nature,
                        isActive = true,
                    };
                    financeModels.Add(model);
                }
                return financeModels;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool SaveLedgerGroupFinance(LedgerGroupFinanceModel model)
        {
            try
            {
                if (model!=null)
                {
                    LedgerGroupFinance ledger = new LedgerGroupFinance
                    {
                        ledgergroupname = model.ledgergroupname,
                        nature = model.nature,
                        isActive = true,
                    };
                    tRSEntities.LedgerGroupFinances.Add(ledger);
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

        public LedgerGroupFinanceModel GetLedgerGroupFinanceModel(int id)
        {
            try
            {
                var data = tRSEntities.LedgerGroupFinances.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    LedgerGroupFinanceModel model = new LedgerGroupFinanceModel();
                    model.id = data.id;
                    model.ledgergroupname = data.ledgergroupname;
                    model.nature = data.nature;
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

        public bool UpdateLedgerGroupFinance(LedgerGroupFinanceModel model)
        {
            try
            {
                var data = tRSEntities.LedgerGroupFinances.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.ledgergroupname = model.ledgergroupname;
                    data.nature = model.nature;
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

        public bool DeleteLedgerGroupFinance(int id)
        {
            try
            {
                var data = tRSEntities.LedgerGroupFinances.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
