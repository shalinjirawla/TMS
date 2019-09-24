using System.Web.Http;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class CityController : ApiController
    {
        private readonly ICityRepo cityRepo;
        public CityController(ICityRepo _cityRepo)
        {
            cityRepo = _cityRepo;
        }
        public IHttpActionResult GetCities()
        {
            var data = cityRepo.GetCities();
            return Ok(data);
        }
        public IHttpActionResult DeleteCity(int id)
        {
            var data = cityRepo.DeleteData(id);
            return Ok(data);
        }
        public IHttpActionResult SaveCity(CityModel city)
        {
            var data = cityRepo.SaveData(city);
            return Ok(data);
        }
        public IHttpActionResult UpdateCity(CityModel city)
        {
            var data = cityRepo.UpdateData(city);
            return Ok(data);
        }
        public IHttpActionResult GetCity(int id)
        {
            var Data = cityRepo.GetCity(id);
            return Ok(Data);
        }
        public IHttpActionResult GetStateWiseCity(int id)
        {
            var data = cityRepo.GetStateWiseCitylist(id);
            return Ok(data);
        }
    }
}
