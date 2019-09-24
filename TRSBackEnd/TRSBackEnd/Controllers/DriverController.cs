using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Model;
using Repository.Interface;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class DriverController : ApiController
    {
        private readonly IDriverRepo driverRepo;
        public DriverController(IDriverRepo driver)
        {
            driverRepo = driver;
        }
        public IHttpActionResult GetDriverModels()
        {
            var data = driverRepo.GetDriverModels();
            return Ok(data);
        }
        public IHttpActionResult SaveDriver(DriverModel model)
        {
            var data = driverRepo.SaveDriver(model);
            return Ok(data);
        }
        public IHttpActionResult GetDriverModel(int id)
        {
            var data = driverRepo.GetDriverModel(id);
            return Ok(data);
        }
        public  IHttpActionResult UpdateDriver(DriverModel model)
        {
            var data = driverRepo.UpdateDriver(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteDriver(int id)
        {
            var data = driverRepo.DeleteDriver(id);
            return Ok(data);
        }
    }
}
