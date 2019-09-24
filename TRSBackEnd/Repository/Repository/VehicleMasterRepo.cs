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
    public class VehicleMasterRepo:IVehicleMasterRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public VehicleMasterRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<VehicleMasterModel> GetVehicleMasters()
        {
            try
            {
                var data = tRSEntities4.VehicleMasters.Where(x => x.isActive == true).ToList();
                List<VehicleMasterModel> masterModels = new List<VehicleMasterModel>();
                foreach (var item in data)
                {
                    VehicleMasterModel model = new VehicleMasterModel
                    {
                        id = item.id,
                        vehiclecategory = item.vehiclecategory,
                        vehicleNo = item.vehicleNo,
                        vehicleType = item.vehicleType,
                        manufacturer = item.manufacturer,
                        vehiclemodel = item.vehiclemodel,
                        yearofmanufacturing = item.yearofmanufacturing,
                        GPSID = item.GPSID,
                        drivername=item.drivername,
                        ownerdetails = item.ownerdetails,
                        chassisNo = item.chassisNo,
                        engineNo = item.engineNo,
                        trollychassisNo = item.trollychassisNo,
                        fueltankCapacity = item.fueltankCapacity,
                        vehicleweightinMT = item.vehicleweightinMT,
                        unladenweightinMT = item.unladenweightinMT,
                        vehicleCapacity = item.vehicleCapacity,
                        wheelbaseinMM = item.wheelbaseinMM,
                        lengthinFt = item.lengthinFt,
                        widthinft = item.widthinft,
                        heightinft = item.heightinft,
                        powerinCC = item.powerinCC,
                        paintCode = item.paintCode,
                        paintColour = item.paintColour,
                        ignitionkey = item.ignitionkey,
                        doorkeycode = item.doorkeycode,
                        bankfanainstuName = item.bankfanainstuName,
                        loanaccountNo = item.loanaccountNo,
                        fileUpload = item.fileUpload,
                        wheelsize = item.wheelsize,
                        tyresize = item.tyresize,
                        psi = item.psi,
                        registrationDate = item.registrationDate,
                        fitnessDate = item.fitnessDate,
                        permitfromdate = item.permitfromdate,
                        insurancefromdate = item.insurancefromdate,
                        //fileuploadimage = item.fileuploadimage,
                        isActive = (bool)item.isActive,
                        manufacturername = tRSEntities4.VendorMasters.Where(x => x.id == item.manufacturer).Select(x => x.name).FirstOrDefault(),
                        vehiclemodelname=tRSEntities4.VehicleModelMasters.Where(x=>x.id==item.vehiclemodel).Select(x=>x.modelname).FirstOrDefault(),
                    };
                    masterModels.Add(model);
                }
                return masterModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool SaveVehicleMaster(VehicleMasterModel model)
        {
            try
            {
                VehicleMaster master = new VehicleMaster();
                master.vehiclecategory = model.vehiclecategory;
                master.vehicleNo = model.vehicleNo;
                master.vehicleType = model.vehicleType;
                master.manufacturer = model.manufacturer;
                master.vehiclemodel = model.vehiclemodel;
                master.yearofmanufacturing = model.yearofmanufacturing;
                master.GPSID = model.GPSID;
                master.drivername = model.drivername;
                master.ownerdetails = model.ownerdetails;
                master.chassisNo = model.chassisNo;
                master.engineNo = model.engineNo;
                master.trollychassisNo = model.trollychassisNo;
                master.fueltankCapacity = model.fueltankCapacity;
                master.vehicleweightinMT = model.vehicleweightinMT;
                master.unladenweightinMT = model.unladenweightinMT;
                master.vehicleCapacity = model.vehicleCapacity;
                master.wheelbaseinMM = model.wheelbaseinMM;
                master.lengthinFt = model.lengthinFt;
                master.widthinft = model.widthinft;
                master.heightinft = model.heightinft;
                master.powerinCC = model.powerinCC;
                master.paintCode = model.paintCode;
                master.paintColour = model.paintColour;
                master.ignitionkey = model.ignitionkey;
                master.doorkeycode = model.doorkeycode;
                master.bankfanainstuName = model.bankfanainstuName;
                master.loanaccountNo = model.loanaccountNo;
                master.fileUpload = model.fileUpload;
                master.wheelsize = model.wheelsize;
                master.tyresize = model.tyresize;
                master.psi = model.psi;
                master.registrationDate = model.registrationDate;
                master.fitnessDate = model.fitnessDate;
                master.permitfromdate = model.permitfromdate;
                master.insurancefromdate = model.insurancefromdate;
                //master.fileuploadimage = model.fileuploadimage;
                master.isActive = true;
                tRSEntities4.VehicleMasters.Add(master);
                tRSEntities4.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool UpdateVehicle(VehicleMasterModel model)
        {
            try
            {
                var data = tRSEntities4.VehicleMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.vehiclecategory = model.vehiclecategory;
                    data.vehicleNo = model.vehicleNo;
                    data.vehicleType = model.vehicleType;
                    data.manufacturer = model.manufacturer;
                    data.yearofmanufacturing = model.yearofmanufacturing;
                    data.GPSID = model.GPSID;
                    data.drivername = model.drivername;
                    data.ownerdetails = model.ownerdetails;
                    data.chassisNo = model.chassisNo;
                    data.engineNo = model.engineNo;
                    data.trollychassisNo = model.trollychassisNo;
                    data.fueltankCapacity = model.fueltankCapacity;
                    data.vehicleweightinMT = model.vehicleweightinMT;
                    data.unladenweightinMT = model.unladenweightinMT;
                    data.vehicleCapacity = model.vehicleCapacity;
                    data.wheelbaseinMM = model.wheelbaseinMM;
                    data.lengthinFt = model.lengthinFt;
                    data.widthinft = model.widthinft;
                    data.heightinft = model.heightinft;
                    data.powerinCC = model.powerinCC;
                    data.paintCode = model.paintCode;
                    data.paintColour = model.paintColour;
                    data.ignitionkey = model.ignitionkey;
                    data.doorkeycode = model.doorkeycode;
                    data.bankfanainstuName = model.bankfanainstuName;
                    data.loanaccountNo = model.loanaccountNo;
                    data.fileUpload = model.fileUpload;
                    data.wheelsize = model.wheelsize;
                    data.tyresize = model.tyresize;
                    data.psi = model.psi;
                    data.registrationDate = model.registrationDate;
                    data.fitnessDate = model.fitnessDate;
                    data.permitfromdate = model.permitfromdate;
                    data.insurancefromdate = model.insurancefromdate;
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

        public VehicleMasterModel GetVehicleModel(int id)
        {
            try
            {
                var data = tRSEntities4.VehicleMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    VehicleMasterModel model = new VehicleMasterModel();
                    model.id = data.id;
                    model.vehiclecategory = data.vehiclecategory;
                    model.vehicleNo = data.vehicleNo;
                    model.vehicleType = data.vehicleType;
                    model.manufacturer = data.manufacturer;
                    model.vehiclemodel = data.vehiclemodel;
                    model.yearofmanufacturing = data.yearofmanufacturing;
                    model.GPSID = data.GPSID;
                    model.drivername = data.drivername;
                    model.ownerdetails = data.ownerdetails;
                    model.chassisNo = data.chassisNo;
                    model.engineNo = data.engineNo;
                    model.trollychassisNo = data.trollychassisNo;
                    model.fueltankCapacity = data.fueltankCapacity;
                    model.vehicleweightinMT = data.vehicleweightinMT;
                    model.unladenweightinMT = data.unladenweightinMT;
                    model.vehicleCapacity = data.vehicleCapacity;
                    model.wheelbaseinMM = data.wheelbaseinMM;
                    model.lengthinFt = data.lengthinFt;
                    model.widthinft = data.widthinft;
                    model.heightinft = data.heightinft;
                    model.powerinCC = data.powerinCC;
                    model.paintCode = data.paintCode;
                    model.paintColour = data.paintColour;
                    model.ignitionkey = data.ignitionkey;
                    model.doorkeycode = data.doorkeycode;
                    model.bankfanainstuName = data.bankfanainstuName;
                    model.loanaccountNo = data.loanaccountNo;
                    model.fileUpload = data.fileUpload;
                    model.wheelsize = data.wheelsize;
                    model.tyresize = data.tyresize;
                    model.psi = data.psi;
                    model.registrationDate = data.registrationDate;
                    model.fitnessDate = data.fitnessDate;
                    model.permitfromdate = data.permitfromdate;
                    model.insurancefromdate = data.insurancefromdate;
                    return model;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool DeleteVehicle(int id)
        {
            try
            {
                var data = tRSEntities4.VehicleMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
                    tRSEntities4.SaveChanges();
                }
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
    }
}
