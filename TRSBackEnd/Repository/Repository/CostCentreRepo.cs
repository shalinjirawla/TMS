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
    public class CostCentreRepo:ICostCentreRepo
    {
        private readonly TRSEntities4 tRSEntities4;
        public CostCentreRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }

        public List<CostCentreModel> GetCostCentreModels()
        {
            try
            {
                List<CostCentreModel> centreModels = new List<CostCentreModel>();
                var data = tRSEntities4.CostCentres.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    CostCentreModel model = new CostCentreModel
                    {
                        id = item.id,
                        costcentrename = item.costcentrename,
                        remark = item.remark,
                        isActive = true,
                    };
                    centreModels.Add(model);
                }
                return centreModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool SaveCostCentre(CostCentreModel model)
        {
            try
            {
                if (model!=null)
                {
                    CostCentre costCentre = new CostCentre
                    {
                        costcentrename = model.costcentrename,
                        remark = model.remark,
                        isActive = true,
                    };
                    tRSEntities4.CostCentres.Add(costCentre);
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

        public CostCentreModel GetCostCentreModel(int id)
        {
            try
            {
                var data = tRSEntities4.CostCentres.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    CostCentreModel centreModel = new CostCentreModel();
                    centreModel.costcentrename = data.costcentrename;
                    centreModel.remark = data.remark;
                    return centreModel;
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

        public bool UpdateCostCentre(CostCentreModel model)
        {
            try
            {
                var data = tRSEntities4.CostCentres.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.costcentrename = model.costcentrename;
                    data.remark = model.remark;
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

        public bool DeleteCOstCentre(int id)
        {
            try
            {
                var data = tRSEntities4.CostCentres.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
