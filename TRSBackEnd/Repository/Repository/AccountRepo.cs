using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.Interface;
using Repository.DB;

namespace Repository.Repository
{
    public class AccountRepo :IAccountRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public AccountRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<AccountModel> GetAccountModels()
        {
            try
            {
                var data = tRSEntities.AccountMasters.Where(x => x.isActive == true).ToList();
                List<AccountModel> accountModels = new List<AccountModel>();
                foreach (var item in data)
                {
                    AccountModel model = new AccountModel
                    {
                        id = item.id,
                        ledgergroupname = item.ledgergroupname,
                        nature = item.nature,
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
                        emailid = item.emailid,
                        emailalert = item.emailalert,
                        mobilealert = item.mobilealert,
                        openingbalance = item.openingbalance,
                        openingamount = item.openingamount,
                        applicablelocation = item.applicablelocation,
                        remark = item.remark,
                        costcentrename = item.costcentrename,
                        remark1 = item.remark1,
                        isActive = (bool)item.isActive,
                    };
                    accountModels.Add(model);
                }
                return accountModels;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool SaveAccount(AccountModel model)
        {
            try
            {
                if (model!=null)
                {
                    AccountMaster master = new AccountMaster
                    {
                        ledgergroupname = model.ledgergroupname,
                        nature = model.nature,
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
                        costcentrename = model.costcentrename,
                        remark1 = model.remark1,
                        isActive = true,
                    };
                    tRSEntities.AccountMasters.Add(master);
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

        public AccountModel GetAccountModel(int id)
        {
            try
            {
                var data = tRSEntities.AccountMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    AccountModel model = new AccountModel();
                    model.id = data.id;
                    model.ledgergroupname = data.ledgergroupname;
                    model.nature = data.nature;
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
                    model.costcentrename = data.costcentrename;
                    model.remark1 = data.remark1;
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

        public bool UpdateAccount(AccountModel model)
        {
            try
            {
                var data = tRSEntities.AccountMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.ledgergroupname = model.ledgergroupname;
                    data.nature = model.nature;
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
                    data.costcentrename = model.costcentrename;
                    data.remark1 = model.remark1;
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

        public bool DeleteAccount(int id)
        {
            try
            {
                var data = tRSEntities.AccountMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
