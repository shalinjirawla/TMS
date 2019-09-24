using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using Repository.DB;

namespace Repository.Repository
{
    public class RegularClientRepo : IRegularClientRepo
    {
        private readonly TRSEntities4 _trs;

        public RegularClientRepo()
        {
            _trs = new TRSEntities4();
        }
        public bool DeleteRegularClient(int id)
        {
            try
            {
                var Check = _trs.RegularClientMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if(Check != null)
                {
                    Check.isActive = false;
                    _trs.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public RegularClientModel GetRegularClient(int id)
        {
            try
            {

                var Check = _trs.RegularClientMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (Check != null)
                {
                    RegularClientModel regular = new RegularClientModel
                    {
                        id = Check.id,
                        accountNo = Check.accountNo,
                        address = Check.address,
                        amount = Check.amount,
                        bankId = Check.bankId,
                        bookingType = Check.bookingType,
                        branchId = Check.branchId,
                        chequeInTheNameOf = Check.chequeInTheNameOf,
                        cityId = Check.cityId,
                        clientCode = Check.clientCode,
                        clientGroupId = Check.clientGroupId,
                        clientName = Check.clientName,
                        companyNo = Check.companyNo,
                        creditGraceDays = Check.creditGraceDays,
                        days = Check.days,
                        deliveryAgainstAsCne = Check.deliveryAgainstAsCne,
                        deliveryAgainstAsCnr = Check.deliveryAgainstAsCnr,
                        deliveryType = Check.deliveryType,
                        emailAlert =Check.emailAlert,
                        gstIN = Check.gstIN,
                        insuranceAmount = Check.insuranceAmount,
                        interest = Check.interest,
                        isActive = Check.isActive,
                        isGodownInsured = Check.isGodownInsured,
                        isMarineInsured = Check.isMarineInsured,
                        ledgerName = Check.ledgerName,
                        mobileNo = Check.mobileNo,
                        multipleBillingBranches = Check.multipleBillingBranches,
                        pan = Check.pan,
                        paymentMode = Check.paymentMode,
                        phoneNo = Check.phoneNo,
                        pinCode =Check.pinCode,
                        policyNo = Check.policyNo,
                        remark = Check.remark,
                        smsAlert = Check.smsAlert,
                        StateId = Check.StateId,
                        validFromDate = Check.validFromDate,
                        validToDate = Check.validToDate,
                        ifsc = Check.ifsc 
                    };
                    return regular;
                }
                return null;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<RegularClientModel> GetRegularClients()
        {
            try
            {
                List<RegularClientModel> models = new List<RegularClientModel>();
                var Data = _trs.RegularClientMasters.Where(x => x.isActive
                 == true).ToList();
                foreach (var item in Data)
                {
                    RegularClientModel regular = new RegularClientModel
                    {
                        id = item.id,
                        accountNo = item.accountNo,
                        address = item.address,
                        amount = item.amount,
                        bankId = item.bankId,
                        bookingType = item.bookingType,
                        branchId = item.branchId,
                        chequeInTheNameOf = item.chequeInTheNameOf,
                        cityId = item.cityId,
                        clientCode = item.clientCode,
                        clientGroupId = item.clientGroupId,
                        clientName = item.clientName,
                        companyNo = item.companyNo,
                        creditGraceDays = item.creditGraceDays,
                        days = item.days,
                        deliveryAgainstAsCne = item.deliveryAgainstAsCne,
                        deliveryAgainstAsCnr = item.deliveryAgainstAsCnr,
                        deliveryType = item.deliveryType,
                        emailAlert = item.emailAlert,
                        gstIN = item.gstIN,
                        insuranceAmount = item.insuranceAmount,
                        interest = item.interest,
                        isActive = item.isActive,
                        isGodownInsured = item.isGodownInsured,
                        isMarineInsured = item.isMarineInsured,
                        ledgerName = item.ledgerName,
                        mobileNo = item.mobileNo,
                        multipleBillingBranches = item.multipleBillingBranches,
                        pan = item.pan,
                        paymentMode = item.paymentMode,
                        phoneNo = item.phoneNo,
                        pinCode = item.pinCode,
                        policyNo = item.policyNo,
                        remark = item.remark,
                        smsAlert = item.smsAlert,
                        StateId = item.StateId,
                        validFromDate = item.validFromDate,
                        validToDate = item.validToDate
                    };
                    models.Add(regular);
                }
                return models;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool SaveRegularClient(RegularClientModel model)
        {
            try
            {
				if (model != null)
				{
					RegularClientMaster regular = new RegularClientMaster
					{
						accountNo = model.accountNo,
						address = model.address,
						amount = model.amount,
						bankId = model.bankId,
						bookingType = model.bookingType,
						branchId = model.branchId,
						chequeInTheNameOf = model.chequeInTheNameOf,
						cityId = model.cityId,
						clientCode = model.clientCode,
						clientGroupId = model.clientGroupId,
						clientName = model.clientName,
						companyNo = model.companyNo,
						creditGraceDays = model.creditGraceDays,
						days = model.days,
						deliveryAgainstAsCne = model.deliveryAgainstAsCne,
						deliveryAgainstAsCnr = model.deliveryAgainstAsCnr,
						deliveryType = model.deliveryType,
						emailAlert = model.emailAlert,
						gstIN = model.gstIN,
						insuranceAmount = model.insuranceAmount,
						interest = model.interest,
						isActive = true,
						isGodownInsured = model.isGodownInsured,
						isMarineInsured = model.isMarineInsured,
						ledgerName = model.ledgerName,
						mobileNo = model.mobileNo,
						multipleBillingBranches = model.multipleBillingBranches,
						pan = model.pan,
						paymentMode = model.paymentMode,
						phoneNo = model.phoneNo,
						pinCode = model.pinCode,
						policyNo = model.policyNo,
						remark = model.remark,
						smsAlert = model.smsAlert,
						StateId = model.StateId,
						validFromDate = model.validFromDate,
						validToDate = model.validToDate,
                        ifsc=model.ifsc,
					};

					_trs.RegularClientMasters.Add(regular);
					_trs.SaveChanges();
                    //int result = SaveClientContactNumbers(model.);
                    return true;
                   

                }
				else { return false; }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public bool UpdateRegularClient(RegularClientModel model)
        {
            try
            {
				if (model != null)
				{
					var Check = _trs.RegularClientMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
					if (Check != null)
					{
						Check.accountNo = model.accountNo;
						Check.address = model.address;
						Check.amount = model.amount;
						Check.bankId = model.bankId;
						Check.bookingType = model.bookingType;
						Check.branchId = model.branchId;
						Check.chequeInTheNameOf = model.chequeInTheNameOf;
						Check.cityId = model.cityId;
						Check.clientCode = model.clientCode;
						Check.clientGroupId = model.clientGroupId;
						Check.clientName = model.clientName;
						Check.companyNo = model.companyNo;
						Check.creditGraceDays = model.creditGraceDays;
						Check.days = model.days;
						Check.deliveryAgainstAsCne = model.deliveryAgainstAsCne;
						Check.deliveryAgainstAsCnr = model.deliveryAgainstAsCnr;
						Check.deliveryType = model.deliveryType;
						Check.emailAlert = model.emailAlert;
						Check.gstIN = model.gstIN;
						Check.insuranceAmount = model.insuranceAmount;
						Check.interest = model.interest;
						Check.isActive = true;
						Check.isGodownInsured = model.isGodownInsured;
						Check.isMarineInsured = model.isMarineInsured;
						Check.ledgerName = model.ledgerName;
						Check.mobileNo = model.mobileNo;
						Check.multipleBillingBranches = model.multipleBillingBranches;
						Check.pan = model.pan;
						Check.paymentMode = model.paymentMode;
						Check.phoneNo = model.phoneNo;
						Check.pinCode = model.pinCode;
						Check.policyNo = model.policyNo;
						Check.remark = model.remark;
						Check.smsAlert = model.smsAlert;
						Check.StateId = model.StateId;
						Check.validFromDate = model.validFromDate;
						Check.validToDate = model.validToDate;
                        Check.ifsc = model.ifsc;
						_trs.SaveChanges();
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


		public string Getclientcode(string name)
		{
			try
			{
                string clientcode = "";
               var Clientcode = _trs.RegularClientMasters.OrderByDescending(x => x.id).Select(x=>x.clientCode).FirstOrDefault();
                if (Clientcode != null)
                {
                    clientcode= Clientcode;
                }
                else {
                    clientcode = name+"00";
                }
				return clientcode;
			}
			catch (Exception e)
			{
				throw e;
			}
		}
        public void SaveClientContactNumbers(RegularClient_Contact_info regularClient_Contact_Info)
        {

        }
    }

}
