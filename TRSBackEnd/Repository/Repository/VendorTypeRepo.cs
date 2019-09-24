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
    public class VendorTypeRepo:IVendorTypeRepo
    {
        public readonly TRSEntities4 tRSEntities4;
        public VendorTypeRepo()
        {
            tRSEntities4 = new TRSEntities4();
        }
        public List<VendorTypeModel> GetVendorTypes()
        {
            try
            {
                List<VendorTypeModel> typeModels = new List<VendorTypeModel>();
                var data = tRSEntities4.VendorTypeMasters.Where(x => x.isActive == true).ToList();
                foreach (var item in data)
                {
                    VendorTypeModel model = new VendorTypeModel
                    {
                        id = item.id,
                        Name = item.Name,
                        isActive = item.isActive,
                    };
                    typeModels.Add(model);
                }
                return typeModels;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public  bool SaveVendorType(VendorTypeModel model)
        {
            try
            {
                VendorTypeMaster vendorType = new VendorTypeMaster()
                {
                    isActive = true,
                    Name = model.Name,
                };
                tRSEntities4.VendorTypeMasters.Add(vendorType);
                tRSEntities4.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public VendorTypeModel GetTypeModel(int id)
        {
            try
            {
                var data = tRSEntities4.VendorTypeMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                if (data != null)
                {
                    VendorTypeModel model = new VendorTypeModel();
                    model.id = data.id;
                    model.Name = data.Name;
                    model.isActive = data.isActive;
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
        public bool UpdateVendorType(VendorTypeModel model)
        {
            try
            {
                var data = tRSEntities4.VendorTypeMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (data!=null)
                {
                    data.Name = model.Name;
                    tRSEntities4.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw  e;
            }
        }
        public bool DeleteVendorType(int id)
        {
            try
            {
                var data = tRSEntities4.VendorTypeMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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
