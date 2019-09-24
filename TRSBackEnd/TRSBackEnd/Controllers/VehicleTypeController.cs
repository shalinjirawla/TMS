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
    public class VehicleTypeController : ApiController
    {
        private readonly IVehicleTypeRepo vehicleTypeRepo;
        public VehicleTypeController(IVehicleTypeRepo modelRepo)
        {
            vehicleTypeRepo = modelRepo;
        }
        public IHttpActionResult GetVehicleTypeModels()
        {
            var data = vehicleTypeRepo.GetVehicleTypeModels();
            return Ok(data);
        }
        public IHttpActionResult SaveVehicleType(VehicleTypeModel model)
        {
            var data = vehicleTypeRepo.SaveVehicleType(model);
            return Ok(data);
        }
        public IHttpActionResult GetVehicleType(int id)
        {
            var data = vehicleTypeRepo.GetVehicleType(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateVehicleType(VehicleTypeModel model)
        {
            var data = vehicleTypeRepo.UpdateVehicleType(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteVehicleType(int id)
        {
            var data = vehicleTypeRepo.DeleteVehicleType(id);
            return Ok(data);
        }
    }
}
