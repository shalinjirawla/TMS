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
    public class VendorRepo : IVendorRepo
    {
        public readonly TRSEntities4 tRSEntities4;
        public VendorRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<VendorModel> GetVendorModels()
        {
            try
            {
                List<VendorModel> models = new List<VendorModel>();
                var data = tRSEntities4.VendorMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    VendorModel vendor = new VendorModel
                    {
                        id = item.id,
                        name = item.name,
                        vendorType = item.vendorType,
                        address = item.address,
                        city = item.city,
                        pincode = item.pincode,
                        state = item.state,
                        STDcode = item.STDcode,
                        phoneno = item.phoneno,
                        mobileno = item.mobileno,
                        emailid = item.emailid,
                        emailalert = item.emailalert,
                        PAN = item.PAN,
                        GSTIN = item.GSTIN,
                        referencename = item.referencename,
                        referphoneno = item.referphoneno,
                        refermobileno = item.refermobileno,
                        creditdays = item.creditdays,
                        creditamount = item.creditamount,
                        bankname = item.bankname,
                        bankbranch = item.bankbranch,
                        IFSC = item.IFSC,
                        accountno = item.accountno,
                        chequename = item.chequename,
                        fileupload = item.fileupload,
                        isActive = (bool)item.isActive,
                    };
                    models.Add(vendor);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool SaveVender(VendorModel model)
        {
            try
            {
                VendorMaster vendorModel = new VendorMaster();
                vendorModel.name = model.name;
                vendorModel.vendorType = model.vendorType;
                vendorModel.address = model.address;
                vendorModel.city = model.city;
                vendorModel.pincode = model.pincode;
                vendorModel.state = model.state;
                vendorModel.STDcode = model.STDcode;
                vendorModel.phoneno = model.phoneno;
                vendorModel.mobileno = model.mobileno;
                vendorModel.emailid = model.emailid;
                vendorModel.emailalert = model.emailalert;
                vendorModel.PAN = model.PAN;
                vendorModel.GSTIN = model.GSTIN;
                vendorModel.referencename = model.referencename;
                vendorModel.referphoneno = model.referphoneno;
                vendorModel.refermobileno = model.refermobileno;
                vendorModel.creditdays=model.creditdays;
                vendorModel.creditamount = model.creditamount;
                vendorModel.bankname = model.bankname;
                vendorModel.bankbranch = model.bankbranch;
                vendorModel.IFSC = model.IFSC;
                vendorModel.accountno = model.accountno;
                vendorModel.chequename = model.chequename;
                vendorModel.fileupload = model.fileupload;
                vendorModel.isActive = true;
                tRSEntities4.VendorMasters.Add(vendorModel);
                tRSEntities4.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public VendorModel GetVendorModel(int id)
        {
            try
            {
                var data = tRSEntities4.VendorMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                VendorModel model = new VendorModel();
                if (data!=null)
                {
                    model.id = data.id;
                    model.name = data.name;
                    model.vendorType = data.vendorType;
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
                    model.PAN = data.PAN;
                    model.GSTIN = data.GSTIN;
                    model.referencename = data.referencename;
                    model.referphoneno = data.referphoneno;
                    model.refermobileno = data.refermobileno;
                    model.creditdays = data.creditdays;
                    model.creditamount = data.creditamount;
                    model.bankname = data.bankname;
                    model.bankbranch = data.bankbranch;
                    model.IFSC = data.IFSC;
                    model.accountno = data.accountno;
                    model.chequename = data.chequename;
                    model.fileupload = data.fileupload;
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
        public bool UpdateVendor(VendorModel model)
        {
            try
            {
                var data = tRSEntities4.VendorMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.name = model.name;
                    data.vendorType = model.vendorType;
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
                    data.PAN = model.PAN;
                    data.GSTIN = model.GSTIN;
                    data.referencename = model.referencename;
                    data.referphoneno = model.referphoneno;
                    data.refermobileno = model.refermobileno;
                    data.creditdays = model.creditdays;
                    data.creditamount = model.creditamount;
                    data.bankname = model.bankname;
                    data.bankbranch = model.bankbranch;
                    data.IFSC = model.IFSC;
                    data.accountno = model.accountno;
                    data.chequename = model.chequename;
                    data.fileupload = model.fileupload;
                    tRSEntities4.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool DeleteVendor(int id)
        {
            try
            {
                var data = tRSEntities4.VendorMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    tRSEntities4.SaveChanges();
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
