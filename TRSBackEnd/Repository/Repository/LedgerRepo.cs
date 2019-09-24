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
    public class LedgerRepo: ILedgerRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public LedgerRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<LedgerModel> GetLedgerModels()
        {
            try
            {
                List<LedgerModel> ledgerModels = new List<LedgerModel>();
                var data = tRSEntities.Ledgers.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    LedgerModel model = new LedgerModel
                    {
                        id = item.id,
                        ledgername = item.ledgername,
                        PAN = item.PAN,
                        GSTIN = item.GSTIN,
                        accountno = item.accountno,
                        address = item.address,
                        city = item.city,
                        pincode = item.pincode,
                        state = item.state,
                        STDcode = item.STDcode,
                        phoneno = item.phoneno,
                        mobileno = item.mobileno,
                        emailalert = item.emailalert,
                        emailid = item.emailid,
                        mobilealert = item.mobilealert,
                        openingamount = item.openingamount,
                        openingbalance = item.openingbalance,
                        applicablelocation = item.applicablelocation,
                        remark = item.remark,
                        isActive = true,
                        statename = tRSEntities.StateMasters.Where(x => x.id == item.state).Select(x => x.StateName).FirstOrDefault(),
                        cityname=tRSEntities.CityMasters.Where(x=>x.id==item.city).Select(x=>x.cityName).FirstOrDefault(),
                    };
                    ledgerModels.Add(model);
                }
                return ledgerModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveLedger(LedgerModel model)
        {
            try
            {
                if (model!=null)
                {
                    Ledger ledger = new Ledger
                    {
                        ledgername = model.ledgername,
                        PAN = model.PAN,
                        GSTIN = model.GSTIN,
                        accountno = model.accountno,
                        address = model.address,
                        city = model.city,
                        pincode = model.pincode,
                        state = model.state,
                        STDcode = model.STDcode,
                        phoneno = model.phoneno,
                        mobileno = model.mobileno,
                        emailid = model.emailid,
                        emailalert = model.emailalert,
                        mobilealert = model.mobilealert,
                        openingbalance = model.openingbalance,
                        openingamount = model.openingamount,
                        applicablelocation = model.applicablelocation,
                        remark = model.remark,
                        isActive = true,
                    };
                    tRSEntities.Ledgers.Add(ledger);
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

        public LedgerModel GetLedgerModel(int id)
        {
            try
            {
                var data = tRSEntities.Ledgers.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    LedgerModel model = new LedgerModel();
                    model.id = data.id;
                    model.ledgername = data.ledgername;
                    model.PAN = data.PAN;
                    model.GSTIN = data.GSTIN;
                    model.accountno = data.accountno;
                    model.address = data.address;
                    model.city = data.city;
                    model.pincode = data.pincode;
                    model.state = data.state;
                    model.STDcode = data.STDcode;
                    model.phoneno = data.phoneno;
                    model.mobileno = data.mobileno;
                    model.emailid = data.emailid;
                    model.emailalert = data.emailalert;
                    model.mobilealert = data.mobilealert;
                    model.openingbalance = data.openingbalance;
                    model.openingamount = data.openingamount;
                    model.applicablelocation = data.applicablelocation;
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

        public bool UpdateLedger(LedgerModel model)
        {
            try
            {
                var data = tRSEntities.Ledgers.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.ledgername = model.ledgername;
                    data.PAN = model.PAN;
                    data.GSTIN = model.GSTIN;
                    data.accountno = model.accountno;
                    data.address = model.address;
                    data.city = model.city;
                    data.pincode = model.pincode;
                    data.state = model.state;
                    data.STDcode = model.STDcode;
                    data.phoneno = model.phoneno;
                    data.mobileno = model.mobileno;
                    data.emailid = model.emailid;
                    data.emailalert = model.emailalert;
                    data.mobilealert = model.mobilealert;
                    data.openingbalance = model.openingbalance;
                    data.openingamount = model.openingamount;
                    data.applicablelocation = model.applicablelocation;
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

        public bool DeleteLedger(int id)
        {
            try
            {
                var data = tRSEntities.Ledgers.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
