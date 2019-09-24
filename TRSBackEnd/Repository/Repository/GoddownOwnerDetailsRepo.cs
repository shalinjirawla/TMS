using Repository.DB;
using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repository
{
    public class GoddownOwnerDetailsRepo : IGoddownOwnerDetailsRepo
    {
        public readonly TRSEntities4 _tRSEntities;
        public GoddownOwnerDetailsRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public bool SaveGoddownOwnerDetails(GoddownOwnerDetailsModel model)
        {
            try
            {
                if (model != null)
                {
                    GodownOwnerDetailsMaster gdm = new GodownOwnerDetailsMaster();
                    gdm.goddownOwnerCode = model.goddownOwnerCode;
                    gdm.branch = model.branch;
                    gdm.goddown = model.goddown;
                    gdm.ownerName = model.ownerName;
                    gdm.address = model.address;
                    gdm.city = model.city;
                    gdm.pinCode = model.pinCode;
                    gdm.state = model.state;
                    gdm.stdCode = model.stdCode;
                    gdm.phoneNo = model.phoneNo;
                    gdm.mobileNo = model.mobileNo;
                    gdm.emailId = model.emailId;
                    gdm.sqft = model.sqft;
                    gdm.ratePerSqft = model.ratePerSqft;
					gdm.rentAmount = model.rentAmount;
                    gdm.gst = model.gst;
                    gdm.totalRent = model.totalRent;
                    gdm.tds = model.tds;
                    gdm.netRent = model.netRent;
                    gdm.pan = model.pan;
                    gdm.gstin = model.gstin;
                    gdm.bank = model.bank;
                    gdm.ifsc = model.ifsc;
                    gdm.a_cno = model.a_cno;
                    gdm.chequeInTheNameOf = model.chequeInTheNameOf;
                    gdm.nextVersionDate = model.nextVersionDate;
                    gdm.holdPaymentInstruction = model.holdPaymentInstruction;
                    gdm.reamrk = model.reamrk;
                    gdm.isRented = model.isRented;
                    gdm.rentPaymentType = model.rentPaymentType;
                    gdm.securityDeposit = model.securityDeposit;
                    gdm.agreementStartDate = model.agreementStartDate;
                    gdm.agreementEndDate = model.agreementEndDate;
                    gdm.noticePeriodInDays = model.noticePeriodInDays;
                    gdm.isActive = true;
                    _tRSEntities.GodownOwnerDetailsMasters.Add(gdm);
                    _tRSEntities.SaveChanges();
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
        public List<GoddownOwnerDetailsModel> GetGoddownOwnerDetails()
        {
            try
            {
                List<GoddownOwnerDetailsModel> goddownOwnerDetailsModels = new List<GoddownOwnerDetailsModel>();
                var data = _tRSEntities.GodownOwnerDetailsMasters.Where(x => x.isActive == true).ToList();
				if (data != null)
				{
					foreach (var item in data)
					{
						GoddownOwnerDetailsModel model = new GoddownOwnerDetailsModel();
						model.id = item.id;
						model.goddownOwnerCode = item.goddownOwnerCode;
						model.branch = item.branch;
						model.goddown = item.goddown;
						model.ownerName = item.ownerName;
						model.address = item.address;
						model.city = item.city;
						model.pinCode = item.pinCode;
						model.state = item.state;
						model.stdCode = item.stdCode;
						model.phoneNo = item.phoneNo;
						model.mobileNo = item.mobileNo;
						model.emailId = item.emailId;
						model.sqft = item.sqft;
						model.ratePerSqft = item.sqft;
						model.rentAmount = item.rentAmount;
						model.gst = item.gst;
						model.totalRent = item.totalRent;
						model.tds = item.tds;
						model.netRent = item.netRent;
						model.pan = item.pan;
						model.gstin = item.gstin;
						model.bank = item.bank;
						model.ifsc = item.ifsc;
						model.a_cno = item.a_cno;
						model.chequeInTheNameOf = item.chequeInTheNameOf;
						model.nextVersionDate = item.nextVersionDate;
						model.holdPaymentInstruction = item.holdPaymentInstruction;
						model.reamrk = item.reamrk;
						model.isRented = item.isRented;
						model.rentPaymentType = item.rentPaymentType;
						model.securityDeposit = item.securityDeposit;
						model.agreementStartDate = item.agreementStartDate;
						model.agreementEndDate = item.agreementEndDate;

						goddownOwnerDetailsModels.Add(model);

					}
				}
                return goddownOwnerDetailsModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public bool UpdateGoddownOwnerDetails(GoddownOwnerDetailsModel model)
        {
            try
            {
				
                var check = _tRSEntities.GodownOwnerDetailsMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
					
                    check.goddownOwnerCode = model.goddownOwnerCode;
                    check.branch = model.branch;
                    check.goddown = model.goddown;
                    check.ownerName = model.ownerName;
                    check.address = model.address;
                    check.city = model.city;
                    check.pinCode = model.pinCode;
                    check.state = model.state;
                    check.stdCode = model.stdCode;
                    check.phoneNo = model.phoneNo;
                    check.mobileNo = model.mobileNo;
                    check.emailId = model.emailId;
                    check.sqft = model.sqft;
                    check.ratePerSqft = model.ratePerSqft;
					check.rentAmount = model.rentAmount;
                    check.gst = model.gst;
                    check.totalRent = model.totalRent;
                    check.tds = model.tds;
                    check.netRent = model.netRent;
                    check.pan = model.pan;
                    check.gstin = model.gstin;
                    check.bank = model.bank;
                    check.ifsc = model.ifsc;
                    check.a_cno = model.a_cno;
                    check.chequeInTheNameOf = model.chequeInTheNameOf;
                    check.nextVersionDate = model.nextVersionDate;
                    check.holdPaymentInstruction = model.holdPaymentInstruction;
                    check.reamrk = model.reamrk;
                    check.isRented = model.isRented;
                    check.rentPaymentType = model.rentPaymentType;
                    check.securityDeposit = model.securityDeposit;
                    check.agreementStartDate = model.agreementStartDate;
                    check.agreementEndDate = model.agreementEndDate;
                    check.noticePeriodInDays = model.noticePeriodInDays;
                    _tRSEntities.SaveChanges();

                }
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
           
        }
        public bool DeleteGoddownOwnerDetails(int id)
        {
            try
            {
			 
                var check = _tRSEntities.GodownOwnerDetailsMasters.Where(x => x.id == id).FirstOrDefault();
                if (check != null)
                {
                    check.isActive = false;
                    _tRSEntities.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public GoddownOwnerDetailsModel GetGoddownOwnerDetail(int id)
        {
            GoddownOwnerDetailsModel gdm = new GoddownOwnerDetailsModel();
            try
            {
                var check = _tRSEntities.GodownOwnerDetailsMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
					gdm.id = check.id;
                    gdm.goddownOwnerCode = check.goddownOwnerCode;
                    gdm.branch = check.branch;
                    gdm.goddown = check.goddown;
                    gdm.ownerName = check.ownerName;
                    gdm.address = check.address;
                    var cityName = _tRSEntities.CityMasters.Where(x => x.id == check.city).FirstOrDefault();
                    if (cityName != null)
                    {
                        gdm.city = cityName.id;
                    }

                    gdm.pinCode = check.pinCode;
                    var state = _tRSEntities.StateMasters.Where(x => x.id == check.state).FirstOrDefault();
                    if (state != null)
                    {
                        gdm.state = state.id;
                    }

                    gdm.stdCode = check.stdCode;
                    gdm.phoneNo = check.phoneNo;
                    gdm.mobileNo = check.mobileNo;
                    gdm.emailId = check.emailId;
                    gdm.sqft = check.sqft;
                    gdm.ratePerSqft = check.ratePerSqft;
					gdm.rentAmount = check.rentAmount;
                    gdm.gst = check.gst;
                    gdm.totalRent = check.totalRent;
                    gdm.tds = check.tds;
                    gdm.netRent = check.netRent;
                    gdm.pan = check.pan;
                    gdm.gstin = check.gstin;
                    gdm.bank = check.bank;
                    gdm.ifsc = check.ifsc;
                    gdm.a_cno = check.a_cno;
                    gdm.chequeInTheNameOf = check.chequeInTheNameOf;
                    gdm.nextVersionDate = check.nextVersionDate;
                    gdm.holdPaymentInstruction = check.holdPaymentInstruction;
                    gdm.reamrk = check.reamrk;
                    gdm.isRented = check.isRented;
                    gdm.rentPaymentType = check.rentPaymentType;
                    gdm.securityDeposit = check.securityDeposit;
                    gdm.agreementStartDate = check.agreementStartDate;
                    gdm.agreementEndDate = check.agreementEndDate;
                    gdm.noticePeriodInDays = check.noticePeriodInDays;
                    gdm.isActive = check.isActive;
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
            return gdm;
        }
    }

}
