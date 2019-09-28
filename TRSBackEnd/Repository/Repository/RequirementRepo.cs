using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Interface;
using Repository.DB;
using Repository.Model;

namespace Repository.Repository
{
    public class RequirementRepo:IRequirementRepo
    {
        private readonly TRSEntities4 tRSEntities;
        public RequirementRepo()
        {
            tRSEntities = new TRSEntities4();
        }

        public List<RequirementModel> GetRequirementModels()
        {
            try
            {
                var data = tRSEntities.Requirements.Where(x => x.isActive == true).ToList();
                //var data1 = tRSEntities.Payments.Where(x => x.IsActive == true).ToList();

               // List<PaymentModel> paymentModels = new List<PaymentModel>();
                List<RequirementModel> requirementModels = new List<RequirementModel>();

                foreach (var item in data)
                {
                    RequirementModel model = new RequirementModel
                    {
                        id = item.id,
                        requirementNo = item.requirementNo,
                        requirementDate = item.requirementDate,
                        requirementType = item.requirementType,
                        DRLedgerNameTo = item.DRLedgerNameTo,
                        DRAmount = item.DRAmount,
                        DRLedgerNameFrom = item.DRLedgerNameFrom,
                        DRAmount1 = item.DRAmount1,
                        remark = item.remark,
                        challanNo = item.challanNo,
                        referenceNo = item.referenceNo,
                        RENT = item.RENT,
                        SALARY = item.SALARY,
                        ADMIN = item.ADMIN,
                        fileupload = item.fileupload,
                        IsApprove = item.IsApprove,
                        rejectremark = item.rejectremark,
                        //requirementNo1 = item.requirementNo1,
                        //requirementDate1 = item.requirementDate1,
                        //requirementType1 = item.requirementType1,
                        //DRLedgerNameTo1 = item.DRLedgerNameTo1,
                        //DRLedgerNameFrom1 = item.DRLedgerNameTo1,
                        //DRAmount2 = item.DRAmount2,
                        //remark1 = item.remark1,
                        //referenceNo = item.referenceNo,
                        //challanNo1 = item.challanNo1,
                        //RENT1 = item.RENT1,
                        //SALARY1 = item.SALARY1,
                        //ADMIN1 = item.ADMIN1,
                        //fileupload1 = item.fileupload1,
                        isActive = true,
                    };
                    requirementModels.Add(model);
                }
                //foreach (var item in data1)
                //{
                //    PaymentModel models = new PaymentModel
                //    {
                //        id = item.id,
                //        voucherNo = item.voucherNo,
                //        voucherDate = item.voucherDate,
                //        requirementType = item.requirementType,
                //        DRLedger = item.DRLedger,
                //        DRAmount = item.DRAmount,
                //        Remark = item.Remark,
                //        BillByBill = item.BillByBill,
                //        referenceNo = item.referenceNo,
                //        challanNo = item.challanNo,
                //        Rent = item.Rent,
                //        Salary = item.Salary,
                //        Admin = item.Admin,
                //        FileUpload = item.FileUpload,
                //        IsActive = true,
                //    };
                //    paymentModels.Add(models);
                //}
                return requirementModels;
               // return paymentModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public int SaveRequirement(RequirementModel model)
        {
            try
            {
                if (model!=null)
                {
                    Requirement requirement = new Requirement
                    {
                        requirementNo = model.requirementNo,
                        requirementDate = model.requirementDate,
                        requirementType = model.requirementType,
                        DRLedgerNameTo = model.DRLedgerNameTo,
                        DRAmount = model.DRAmount,
                        DRLedgerNameFrom = model.DRLedgerNameFrom,
                        DRAmount1 = model.DRAmount1,
                        referenceNo=model.referenceNo,
                        remark = model.remark,
                        challanNo = model.challanNo,
                        RENT = model.RENT,
                        SALARY = model.SALARY,
                        ADMIN = model.ADMIN,
                        fileupload = model.fileupload,
                        IsApprove=model.IsApprove,
                        rejectremark=model.rejectremark,
                        //requirementNo1 = model.requirementNo1,
                        //requirementDate1=model.requirementDate1,
                        //requirementType1 = model.requirementType1,
                        //DRLedgerNameTo1 = model.DRLedgerNameTo1,
                        //DRLedgerNameFrom1 = model.DRLedgerNameFrom1,
                        //DRAmount2 = model.DRAmount2,
                        //remark1 = model.remark1,
                        //referenceNo = model.referenceNo,
                        //challanNo1 = model.challanNo1,
                        //RENT1 = model.RENT1,
                        //SALARY1 = model.SALARY1,
                        //ADMIN1 = model.ADMIN1,
                        //fileupload1 = model.fileupload1,
                        isActive = true,
                    };
                    tRSEntities.Requirements.Add(requirement);
                    tRSEntities.SaveChanges();

                    model.id = requirement.id;
                    return model.id;
                }
                //else
                //{
                //    return false;
                //}
            }
            catch (Exception e)
            {

                throw e;
            }
            return model.id;
        }

        public RequirementModel GetRequirement(int id)
        {
            try
            {
                var data = tRSEntities.Requirements.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    RequirementModel model = new RequirementModel();
                    model.id = data.id;
                    model.requirementNo = data.requirementNo;
                    model.requirementDate = data.requirementDate;
                    model.requirementType = data.requirementType;
                    model.DRLedgerNameTo = data.DRLedgerNameTo;
                    model.DRAmount = data.DRAmount;
                    model.DRLedgerNameFrom = data.DRLedgerNameFrom;
                    model.DRAmount1 = data.DRAmount1;
                    model.remark = data.remark;
                    model.challanNo = data.challanNo;
                    model.referenceNo = data.referenceNo;
                    model.RENT = data.RENT;
                    model.SALARY = data.SALARY;
                    model.ADMIN = data.ADMIN;
                    model.fileupload = data.fileupload;
                    model.IsApprove = data.IsApprove;
                    model.rejectremark = data.rejectremark;
                    //model.requirementNo1 = data.requirementNo1;
                    //model.requirementDate1 = data.requirementDate1;
                    //model.requirementType1 = data.requirementType1;
                    //model.DRLedgerNameTo1 = data.DRLedgerNameTo1;
                    //model.DRLedgerNameFrom1 = data.DRLedgerNameFrom1;
                    //model.DRAmount2 = data.DRAmount2;
                    //model.remark1 = data.remark1;
                    //model.referenceNo = data.referenceNo;
                    //model.challanNo1 = data.challanNo1;
                    //model.RENT1 = data.RENT1;
                    //model.SALARY1 = data.SALARY1;
                    //model.ADMIN1 = data.ADMIN1;
                    //model.fileupload1 = data.fileupload1;
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

        public bool UpdateRequirement(RequirementModel model)
        {
            try
            {
                var data = tRSEntities.Requirements.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.referenceNo = model.requirementNo;
                    data.requirementDate = model.requirementDate;
                    data.requirementType = model.requirementType;
                    data.DRLedgerNameTo = model.DRLedgerNameTo;
                    data.DRAmount = model.DRAmount;
                    data.DRLedgerNameFrom = model.DRLedgerNameFrom;
                    data.DRAmount1 = model.DRAmount1;
                    data.remark = model.remark;
                    data.challanNo = model.challanNo;
                    data.referenceNo = model.referenceNo;
                    data.RENT = model.RENT;
                    data.SALARY = model.SALARY;
                    data.ADMIN = model.ADMIN;
                    data.fileupload = model.fileupload;
                    data.IsApprove = model.IsApprove;
                    //data.requirementNo1 = model.requirementNo1;
                    //data.requirementDate1 = model.requirementDate1;
                    //data.requirementType1 = model.requirementType1;
                    //data.DRLedgerNameTo1 = model.DRLedgerNameTo1;
                    //data.DRLedgerNameFrom1 = model.DRLedgerNameFrom1;
                    //data.DRAmount2 = model.DRAmount2;
                    //data.remark1 = model.remark1;
                    //data.referenceNo = model.referenceNo;
                    //data.challanNo1 = model.challanNo1;
                    //data.RENT1 = model.RENT1;
                    //data.SALARY1 = model.SALARY1;
                    //data.ADMIN1 = model.ADMIN1;
                    //data.fileupload1 = model.fileupload1;
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

        public bool DeleteRequirement(int id)
        {
            try
            {
                var data = tRSEntities.Requirements.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
            catch (Exception)
            {

                throw;
            }
        }

        public RequirementModel GetResponceAccount(int id)
        {
            try
            {
                var data = tRSEntities.Requirements.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                RequirementModel model = new RequirementModel();
                model.id = data.id;
                model.requirementNo = data.requirementNo;
                model.requirementDate = data.requirementDate;
                model.requirementType = data.requirementType;
                model.DRLedgerNameTo = data.DRLedgerNameTo;
                model.DRAmount = data.DRAmount;
                model.DRLedgerNameFrom = data.DRLedgerNameFrom;
                model.DRAmount1 = data.DRAmount1;
                model.remark = data.remark;
                model.challanNo = data.challanNo;
                model.referenceNo = data.referenceNo;
                model.RENT = data.RENT;
                model.SALARY = data.SALARY;
                model.ADMIN = data.ADMIN;
                model.fileupload = data.fileupload;
                model.IsApprove = data.IsApprove;
                model.rejectremark = data.rejectremark;
                return model;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
