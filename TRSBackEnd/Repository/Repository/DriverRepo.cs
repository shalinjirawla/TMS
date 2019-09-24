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
    public class DriverRepo: IDriverRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public DriverRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<DriverModel> GetDriverModels()
        {
            try
            {
                var data = tRSEntities4.DriverMasters.Where(x => x.isActive == true).ToList();
                List<DriverModel> models = new List<DriverModel>();
                foreach (var item in data)
                {
                    DriverModel driver = new DriverModel
                    {
                        id = item.id,
                        name = item.name,
                        drivercategory = item.drivercategory,
                        isreliable = item.isreliable,
                        DOB = item.DOB,
                        Religion = item.Religion,
                        qualification = item.qualification,
                        maritalstatus = item.maritalstatus,
                        drivinglicencecategory = item.drivinglicencecategory,
                        drivinglicenceNo = item.drivinglicenceNo,
                        drivLiceIssueAuthoLoca = item.drivLiceIssueAuthoLoca,
                        drivLiceExDate = item.drivLiceExDate,
                        bloodgroup = item.bloodgroup,
                        Address = item.Address,
                        state = item.state,
                        city = item.city,
                        STDcode = item.STDcode,
                        phoneno = item.phoneno,
                        mobileno = item.mobileno,
                        referencename = item.referencename,
                        referenceaddress = item.referenceaddress,
                        referencecity = item.referencecity,
                        referencepincode = item.referencepincode,
                        referencephoneno = item.referencephoneno,
                        referencemobileno=item.referencemobileno,
                        policyno = item.policyno,
                        insurancecompany = item.insurancecompany,
                        insurancevalue = item.insurancevalue,
                        nomination = item.nomination,
                        insuranceexpirydate = item.insuranceexpirydate,
                        fileupload = item.fileupload,
                        isActive = (bool)item.isActive,
                    };
                    models.Add(driver);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveDriver(DriverModel model)
        {
            try
            {
                if (model != null)
                {
                    DriverMaster driver = new DriverMaster();
                    driver.name = model.name;
                    driver.drivercategory = model.drivercategory;
                    driver.isreliable = model.isreliable;
                    driver.DOB = model.DOB;
                    driver.Religion = model.Religion;
                    driver.qualification = model.qualification;
                    driver.maritalstatus = model.maritalstatus;
                    driver.drivinglicencecategory = model.drivinglicencecategory;
                    driver.drivinglicenceNo = model.drivinglicenceNo;
                    driver.drivLiceIssueAuthoLoca = model.drivLiceIssueAuthoLoca;
                    driver.drivLiceExDate = model.drivLiceExDate;
                    driver.bloodgroup = model.bloodgroup;
                    driver.Address = model.Address;
                    driver.state = model.state;
                    driver.city = model.city;
                    driver.STDcode = model.STDcode;
                    driver.phoneno = model.phoneno;
                    driver.mobileno = model.mobileno;
                    driver.referencename = model.referencename;
                    driver.referenceaddress = model.referenceaddress;
                    driver.referencecity = model.referencecity;
                    driver.referencepincode = model.referencepincode;
                    driver.referencemobileno = model.referencemobileno;
                    driver.referencephoneno = model.referencephoneno;
                    driver.policyno = model.policyno;
                    driver.insurancecompany = model.insurancecompany;
                    driver.insurancevalue = model.insurancevalue;
                    driver.nomination = model.nomination;
                    driver.insuranceexpirydate = model.insuranceexpirydate;
                    driver.fileupload = model.fileupload;
                    driver.isActive = true;
                    tRSEntities4.DriverMasters.Add(driver);
                    tRSEntities4.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception  e)
            {

                throw e;
            }
        }

        public DriverModel GetDriverModel(int id)
        {
            try
            {
                var data = tRSEntities4.DriverMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    DriverModel model = new DriverModel();
                    model.id = data.id;
                    model.name = data.name;
                    model.drivercategory = data.drivercategory;
                    model.isreliable = data.isreliable;
                    model.DOB = data.DOB;
                    model.Religion = data.Religion;
                    model.qualification = data.qualification;
                    model.maritalstatus = data.maritalstatus;
                    model.drivinglicencecategory = data.drivinglicencecategory;
                    model.drivinglicenceNo = data.drivinglicenceNo;
                    model.drivLiceIssueAuthoLoca = data.drivLiceIssueAuthoLoca;
                    model.drivLiceExDate = data.drivLiceExDate;
                    model.bloodgroup = data.bloodgroup;
                    model.Address = data.Address;
                    model.state = data.state;
                    model.city = data.city;
                    model.STDcode = data.STDcode;
                    model.phoneno = data.phoneno;
                    model.mobileno = data.mobileno;
                    model.referencename = data.referencename;
                    model.referenceaddress = data.referenceaddress;
                    model.referencecity = data.referencecity;
                    model.referencephoneno = data.referencephoneno;
                    model.referencepincode = data.referencepincode;
                    model.referencemobileno = data.referencemobileno;
                    model.policyno = data.policyno;
                    model.insurancecompany = data.insurancecompany;
                    model.insurancevalue = data.insurancevalue;
                    model.nomination = data.nomination;
                    model.insuranceexpirydate = data.insuranceexpirydate;
                    model.fileupload = data.fileupload;
                    return model;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdateDriver(DriverModel model)
        {
            try
            {
                var data = tRSEntities4.DriverMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.name = model.name;
                    data.drivercategory = model.drivercategory;
                    data.isreliable = model.isreliable;
                    data.DOB = model.DOB;
                    data.Religion = model.Religion;
                    data.qualification = model.qualification;
                    data.maritalstatus = model.maritalstatus;
                    data.drivinglicencecategory = model.drivinglicencecategory;
                    data.drivinglicenceNo = model.drivinglicenceNo;
                    data.drivLiceIssueAuthoLoca = model.drivLiceIssueAuthoLoca;
                    data.drivLiceExDate = model.drivLiceExDate;
                    data.bloodgroup = model.bloodgroup;
                    data.Address = model.Address;
                    data.state = model.state;
                    data.city = model.city;
                    data.STDcode = model.STDcode;
                    data.phoneno = model.phoneno;
                    data.mobileno = model.mobileno;
                    data.referencename = model.referencename;
                    data.referenceaddress = model.referenceaddress;
                    data.referencecity = model.referencecity;
                    data.referencepincode = model.referencepincode;
                    data.referencemobileno = model.referencemobileno;
                    data.policyno = model.policyno;
                    data.insurancecompany = model.insurancecompany;
                    data.insurancevalue = model.insurancevalue;
                    data.nomination = model.nomination;
                    data.insuranceexpirydate = model.insuranceexpirydate;
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

        //public bool DeletDriver(int id)
        //{
        //    try
        //    {
        //        var data = tRSEntities4.DriverMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
        //        if (data!=null)
        //        {
        //            data.isActive = false;
        //            tRSEntities4.SaveChanges();
        //            return true;
        //        }
        //        return false;
        //    }
        //    catch (Exception e)
        //    {

        //        throw e;
        //    }
        //}
        public bool DeleteDriver(int id)
        {
            try
            {
                var Data = tRSEntities4.DriverMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (Data != null)
                {
                    Data.isActive = false;
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
