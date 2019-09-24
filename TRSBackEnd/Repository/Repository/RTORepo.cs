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
   public class RTORepo:IRTORepo
    {
        private readonly TRSEntities4 _tRSEntities;
        public RTORepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public bool SaveRTO(RTOModel model)
        {
            try
            {
                RTOMaster master = new RTOMaster();
                master.rtoCode = model.rtoCode;
                master.name = model.name;
                master.address = model.address;
                master.city = model.city;
                master.pinCode = model.pinCode;
                master.state = model.state;
                master.stdCode = model.stdCode;
                master.phoneNo = model.phoneNo;
                master.emailId = model.emailId;
                master.website = model.website;
                master.remark = model.remark;
                master.mobileNo = model.mobileNo;
                master.isActive = true;
                _tRSEntities.RTOMasters.Add(master);
                _tRSEntities.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                throw e;
            
            }
           
        }
        public List<RTOModel> GetRTOs()
        {
            var data = _tRSEntities.RTOMasters.Where(x => x.isActive == true).ToList();
            List<RTOModel> rTOModels = new List<RTOModel>();
            foreach (var item in data)
            {
                RTOModel model = new RTOModel();
                model.rtoCode = item.rtoCode;
                model.id = item.id;
                model.name = item.name;
                model.address = item.address;
                model.city = item.city;
                model.pinCode = item.pinCode;
                model.state = item.state;
                model.stdCode = item.stdCode;
                model.phoneNo = item.phoneNo;
                model.emailId = item.emailId;
                model.website = item.website;
                model.remark = item.remark;
                model.mobileNo = item.mobileNo;
                rTOModels.Add(model);
            }
            return rTOModels;
        }

        public bool UpdateRTO(RTOModel model)
        {
            try
            {
                var check = _tRSEntities.RTOMasters.Where(x => x.id == model.id && x.isActive == true).FirstOrDefault();
                if (check != null)
                {
                    check.name = model.name;
                    check.rtoCode = model.rtoCode;
                    check.address = model.address;
                    check.city = model.city;
                    check.pinCode = model.pinCode;
                    check.state = model.state;
                    check.stdCode = model.stdCode;
                    check.phoneNo = model.phoneNo;
                    check.emailId = model.emailId;
                    check.website = model.website;
                    check.remark = model.remark;
                    check.mobileNo = model.mobileNo;
                    check.isActive = true;
                    _tRSEntities.SaveChanges();
                   
                }
                return true;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public bool DeleteRTO(int id)
        {
            try
            {
                var check = _tRSEntities.RTOMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
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

        public RTOModel GetRTO(int id)
        {
            try
            {
                var check = _tRSEntities.RTOMasters.Where(x => x.id == id && x.isActive == true).FirstOrDefault();
                RTOModel md = new RTOModel();
                md.rtoCode = check.rtoCode;
                md.name = check.name;
                md.address = check.address;
              
                var cityName = _tRSEntities.CityMasters.Where(x => x.id == check.city).FirstOrDefault();
                if (cityName != null)
                {
                    md.cityName = cityName.cityName;
                }
                md.pinCode = check.pinCode;

                md.state = check.state;
                var state = _tRSEntities.StateMasters.Where(x => x.id == md.state).FirstOrDefault();
                if (state != null)
                {
                    md.stateName = state.StateName;
                }
                md.id = check.id;
                md.stdCode = check.stdCode;
                md.phoneNo = check.phoneNo;
                md.emailId = check.emailId;
                md.website = check.website;
                md.mobileNo = check.mobileNo;
                md.remark = check.remark;
                md.isActive = true;
                return md;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
    }
}
