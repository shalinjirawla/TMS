using Repository.Interface;
using Repository.Model;
using System;
using System.Collections.Generic;
using Repository.DB;
using System.Linq;

namespace Repository.Repository
{
    public class CityRepo : ICityRepo
    {
        private readonly TRSEntities4 _tRSEntities; 
        public CityRepo()
        {
            _tRSEntities = new TRSEntities4();
        }
        public bool DeleteData(int id)
        {
            try
            {
                var Check = _tRSEntities.CityMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if(Check != null)
                {
                    Check.IsActive = false;
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
        public List<CityModel> GetCities()
        {
            try
            {
                List<CityModel> cityModels = new List<CityModel>();
                var Data = _tRSEntities.CityMasters.Where(x => x.IsActive == true).ToList();
                foreach (var item in Data)
                {
                    CityModel city = new CityModel
                    {
                        id = item.id,
                        remark = item.remark,
                        stateId = item.stateId,
                        cityName = item.cityName,
                        cityCode = item.cityCode,
                        stdCode = item.stdCode,
                        IsActive = (bool)item.IsActive
                    };
                    cityModels.Add(city);
                }
                return cityModels;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public CityModel GetCity(int id)
        {
            try
            {
                var GetCity = _tRSEntities.CityMasters.Where(x => x.id == id && x.IsActive == true).FirstOrDefault();
                if(GetCity != null)
                {
                    CityModel Model = new CityModel();
                    Model.id = GetCity.id;
                    Model.IsActive = (bool)GetCity.IsActive;
                    Model.cityName = GetCity.cityName;
                    Model.cityCode = GetCity.cityCode;
                    Model.remark = GetCity.remark;
                    Model.stateId = GetCity.stateId;
                    Model.stdCode = GetCity.stdCode;
                    return Model;
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
        public bool SaveData(CityModel model)
        {
            try
            {
                CityMaster city = new CityMaster();
                city.stateId = model.stateId;
                city.cityName = model.cityName;
                city.cityCode = model.cityCode;
                city.remark = model.remark;
                city.stdCode = model.stdCode;
                city.IsActive = true;
                _tRSEntities.CityMasters.Add(city);
                _tRSEntities.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public bool UpdateData(CityModel model)
        {
            try
            {
                var Check = _tRSEntities.CityMasters.Where(x => x.id == model.id && x.IsActive == true).FirstOrDefault();
                if(Check != null)
                {
                    Check.stateId = model.stateId;
                    Check.cityName = model.cityName;
                    Check.cityCode = model.cityCode;
                    Check.remark = model.remark;
                    Check.stdCode = model.stdCode;
                    Check.IsActive = true;
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
        public List<CityModel> GetStateWiseCitylist(int id)
        {
            try
            {
               List<CityModel> cityModels = new List<CityModel>();
                var GetCity = _tRSEntities.CityMasters.Where(x => x.stateId == id && x.IsActive == true).ToList();
                foreach (var item in GetCity)
                {
                    CityModel city = new CityModel
                    {
                        id = item.id,
                        remark = item.remark,
                        stateId = item.stateId,
                        cityName = item.cityName,
                        cityCode = item.cityCode,
                        stdCode = item.stdCode,
                        IsActive = (bool)item.IsActive
                    };
                    cityModels.Add(city);
                }
                return cityModels;
            }
            catch (Exception e)

            {
                throw e;
            }
        }
    }
}
