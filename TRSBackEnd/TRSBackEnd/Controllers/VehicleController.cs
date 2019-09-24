using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Model;
using Repository.Interface;

namespace TRSBackEnd.Controllers
{
    public class VehicleController : ApiController
    {
        private readonly IVehicleMasterRepo masterRepo;
        public VehicleController(IVehicleMasterRepo vehicleMaster)
        {
            masterRepo = vehicleMaster;
        }
        public IHttpActionResult GetVehicleMasters()
        {
            var data = masterRepo.GetVehicleMasters();
            return Ok(data);
        }
        public IHttpActionResult SaveVehicleMaster(VehicleMasterModel model)
        {
            var data = masterRepo.SaveVehicleMaster(model);
            return Ok(data);
        }
        public IHttpActionResult UpdateVehicle(VehicleMasterModel model)
        {
            var data = masterRepo.UpdateVehicle(model);
            return Ok(data);
        }
        public IHttpActionResult GetVehicleModel(int id)
        {
            var data = masterRepo.GetVehicleModel(id);
            return Ok(data);
        }
        public IHttpActionResult DeleteVehicle(int id)
        {
            var data = masterRepo.DeleteVehicle(id);
            return Ok(data);
        }
    }
}
