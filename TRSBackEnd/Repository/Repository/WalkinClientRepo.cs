using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Model;
using Repository.DB;
using Repository.Interface;

namespace Repository.Repository
{
    public class WalkinClientRepo: IWalkinClientRepo
    {
        private readonly TRSEntities4 _tRS;
        public WalkinClientRepo(TRSEntities4 tRSEntities4)
        {
            _tRS = tRSEntities4;
        }

        public bool SaveWalkInClient(WalkinClientModel model)
        {
            try
            {
                if (model!=null)
                {
                    Walk_inClientMaster clientMaster = new Walk_inClientMaster
                    {
                        name = model.name,
                        contactperno = model.contactperno,
                        address = model.address,
                        cityid = model.cityid,
                        pincode = model.pincode,
                        stateid = model.stateid,
                        STDcode = model.STDcode,
                        phone = model.phone,
                        mobile = model.mobile,
                        emailid = model.emailid,
                        emailalert = model.emailalert,
                        mobilealert = model.mobilealert,
                        pan = model.pan,
                        gstIN = model.gstIN,
                        deliveryAgainstAsCnr = model.deliveryAgainstAsCnr,
                        deliveryAgainstAsCne = model.deliveryAgainstAsCne,
                        companyname = model.companyname,
                        policyno = model.policyno,
                        validfromdate = model.validfromdate,
                        validtodate = model.validtodate,
                        insuranceamount = model.insuranceamount,
                        isMarineIsured = model.isMarineIsured,
                        isActive = true,
                    };
                    _tRS.Walk_inClientMaster.Add(clientMaster);
                    _tRS.SaveChanges();
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

        public  List<WalkinClientModel> GetWalkInClients() 
        {
            try
            {
                List<WalkinClientModel> walk_InClients = new List<WalkinClientModel>();
                var data = _tRS.Walk_inClientMaster.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    WalkinClientModel clientModel = new WalkinClientModel
                    {
                        id = item.id,
                        name = item.name,
                        contactperno = item.contactperno,
                        address = item.contactperno,
                        cityid = item.cityid,
                        pincode = item.pincode,
                        stateid = item.stateid,
                        STDcode = item.STDcode,
                        phone = item.phone,
                        mobile = item.mobile,
                        emailid = item.emailid,
                        emailalert = item.emailalert,
                        mobilealert = item.mobilealert,
                        pan = item.pan,
                        gstIN = item.gstIN,
                        deliveryAgainstAsCnr = item.deliveryAgainstAsCnr,
                        deliveryAgainstAsCne = item.deliveryAgainstAsCne,
                        companyname = item.companyname,
                        policyno = item.policyno,
                        validfromdate = item.validfromdate,
                        validtodate = item.validtodate,
                        insuranceamount = item.insuranceamount,
                        isMarineIsured = item.isMarineIsured,
                        isGodownIsured = item.isGodownIsured,
                        isActive = (bool)item.isActive,
                        statename = _tRS.StateMasters.Where(x => x.id == item.stateid).Select(x => x.StateName).FirstOrDefault(),
                        cityname=_tRS.CityMasters.Where(x=>x.id==item.cityid).Select(x=>x.cityName).FirstOrDefault(),
                    };
                    walk_InClients.Add(clientModel);
                }
                return  walk_InClients;
            }
            catch (Exception e)
            {

                throw  e;
            }
        }
        public  WalkinClientModel GetWalkinClient(int id)
        {
            try
            {
                var data = _tRS.Walk_inClientMaster.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    WalkinClientModel model = new WalkinClientModel
                    {
                        id = data.id,
                        name = data.name,
                        contactperno = data.contactperno,
                        address = data.address,
                        cityid = data.cityid,
                        pincode = data.pincode,
                        stateid = data.stateid,
                        STDcode = data.STDcode,
                        phone = data.phone,
                        mobile = data.mobile,
                        emailid = data.emailid,
                        emailalert = data.emailalert,
                        mobilealert = data.mobilealert,
                        pan = data.pan,
                        gstIN = data.gstIN,
                        deliveryAgainstAsCne = data.deliveryAgainstAsCne,
                        deliveryAgainstAsCnr = data.deliveryAgainstAsCnr,
                        companyname = data.companyname,
                        policyno = data.policyno,
                        validfromdate = data.validfromdate,
                        validtodate = data.validtodate,
                        insuranceamount=data.insuranceamount,
                        isGodownIsured = data.isGodownIsured,
                        isMarineIsured = data.isMarineIsured,
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
        public bool UpdateWalkInClient(WalkinClientModel model)
        {
            try
            {
                if (model !=null)
                {
                    var check = _tRS.Walk_inClientMaster.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                    if (check!=null)
                    {
                        check.name = model.name;
                        check.contactperno = model.contactperno;
                        check.address = model.address;
                        check.cityid = model.cityid;
                        check.pincode = model.pincode;
                        check.stateid = model.stateid;
                        check.STDcode = model.STDcode;
                        check.phone = model.phone;
                        check.mobile = model.mobile;
                        check.emailid = model.emailid;
                        check.emailalert = model.emailalert;
                        check.mobilealert = model.mobilealert;
                        check.pan = model.pan;
                        check.isActive = true;
                        check.gstIN = model.gstIN;
                        check.deliveryAgainstAsCne = model.deliveryAgainstAsCne;
                        check.deliveryAgainstAsCnr = model.deliveryAgainstAsCnr;
                        check.companyname = model.companyname;
                        check.policyno = model.policyno;
                        check.validfromdate = model.validfromdate;
                        check.validtodate = model.validtodate;
                        check.insuranceamount = model.insuranceamount;
                        check.isGodownIsured = model.isGodownIsured;
                        check.isMarineIsured = model.isMarineIsured;
                        _tRS.SaveChanges();
                        return true;
                    }
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool DeleteWalkInClient(int id)
        {
            try
            {
                var data =_tRS.Walk_inClientMaster.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    data.isActive = false;
                    _tRS.SaveChanges();
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
