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
    public class VehicleModelController : ApiController
    {
        private readonly IVehicleModelRepo vehicleTypeRepo;
        public VehicleModelController(IVehicleModelRepo vehicleType)
        {
            vehicleTypeRepo = vehicleType;
        }
        public IHttpActionResult GetVehicleModels()
        {
            var data = vehicleTypeRepo.GetVehicleModels();
            return Ok(data);
        }
        public IHttpActionResult SaveVehicleModel(VehicleModel model)
        {
            var data = vehicleTypeRepo.SaveVehicleModel(model);
            return Ok(data);
        }
        public IHttpActionResult GetVehicleModel(int id)
        {
            var data = vehicleTypeRepo.GetVehicleModel(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateVehicleModel(VehicleModel model)
        {
            var data = vehicleTypeRepo.UpdateVehicleModel(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteVehicleModel(int id)
        {
            var data = vehicleTypeRepo.DeleteVehicleModel(id);
            return Ok(data);
        }
    }
}
