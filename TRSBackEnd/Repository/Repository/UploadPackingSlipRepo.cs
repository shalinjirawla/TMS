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
    public class UploadPackingSlipRepo:IUploadPackingSlipRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public UploadPackingSlipRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<UploadPackingSlipModel> GetUploadPackingSlipModels()
        {
            try
            {
                var data = tRSEntities4.UploadPackingSlips.Where(x => x.isActive == true).ToList();
                List<UploadPackingSlipModel> models = new List<UploadPackingSlipModel>();
                foreach (var item in data)
                {
                    UploadPackingSlipModel slipModel = new UploadPackingSlipModel
                    {
                        id = item.id,
                        cnNo = item.cnNo,
                        rollNo = item.rollNo,
                        srtoNo = item.srtoNo,
                        lotNo = item.lotNo,
                        meter = item.meter,
                        weightInKg = item.weightInKg,
                        isActive = true,
                    };
                    models.Add(slipModel);
                }
                return models;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveUploadPackingSlip(UploadPackingSlipModel model)
        {
            try
            {
                if (model!=null)
                {
                    UploadPackingSlip uploadPacking = new UploadPackingSlip
                    {
                        cnNo = model.cnNo,
                        rollNo = model.rollNo,
                        srtoNo = model.srtoNo,
                        lotNo = model.lotNo,
                        meter = model.meter,
                        weightInKg = model.weightInKg,
                        isActive = true,
                    };
                    tRSEntities4.UploadPackingSlips.Add(uploadPacking);
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

        public UploadPackingSlipModel GetUploadPackingSlipModel(int id)
        {
            try
            {
                var data = tRSEntities4.UploadPackingSlips.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    UploadPackingSlipModel model = new UploadPackingSlipModel();
                    model.id = data.id;
                    model.cnNo = data.cnNo;
                    model.rollNo = data.rollNo;
                    model.srtoNo = data.srtoNo;
                    model.lotNo = data.lotNo;
                    model.meter = data.meter;
                    model.weightInKg=data.weightInKg;
                    return model;
                }
                return null;
            }
            catch (Exception e)
            {

                throw  e;
            }
        }

        public bool  UpdateUploadPackingSlip(UploadPackingSlipModel model)
        {
            try
            {
                var data = tRSEntities4.UploadPackingSlips.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.cnNo = model.cnNo;
                    data.rollNo = model.rollNo;
                    data.srtoNo = model.srtoNo;
                    data.lotNo = model.lotNo;
                    data.meter = model.meter;
                    data.weightInKg = model.weightInKg;
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

        public  bool DeleteUploadPackingSlip(int id)
        {
            try
            {
                var data = tRSEntities4.UploadPackingSlips.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.isActive = false;
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
    }
}
