using Repository.Model;
using System.Collections.Generic;


namespace Repository.Interface
{
    public interface ICityRepo
    {
        bool SaveData(CityModel model);
        List<CityModel> GetCities();
        bool UpdateData(CityModel model);
        bool DeleteData(int id);
        CityModel GetCity(int id);
        List<CityModel> GetStateWiseCitylist(int id);
    }
}
