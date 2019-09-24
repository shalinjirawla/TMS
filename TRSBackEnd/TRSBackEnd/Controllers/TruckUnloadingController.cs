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
    public class TruckUnloadingController : ApiController
    {
        private readonly ITruckUnloadingRepo truckUnloading;
        public TruckUnloadingController(ITruckUnloadingRepo unloadingRepo)
        {
            truckUnloading = unloadingRepo;
        }

        public IHttpActionResult GetTruckUnloadingModels()
        {
            var data = truckUnloading.GetTruckUnloadingModels();
            return Ok(data);
        }

        public IHttpActionResult SaveTruckUnloading(TruckUnloadingModel model)
        {
            var data = truckUnloading.SaveTruckUnloading(model);
            return Ok(data);
        }

        public IHttpActionResult GetTruckUnloadingModel(int id)
        {
            var data = truckUnloading.GetTruckUnloadingModel(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateTruckUnloading(TruckUnloadingModel model)
        {
            var data = truckUnloading.UpdateTruckUnloading(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteTruckUnloading(int id)
        {
            var data = truckUnloading.DeleteTruckUnloading(id);
            return Ok(data);
        }
    }
}
