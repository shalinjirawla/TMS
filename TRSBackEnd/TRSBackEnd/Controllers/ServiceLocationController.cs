using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.Model;
using Repository.DB;

namespace TRSBackEnd.Controllers
{
    public class ServiceLocationController : ApiController
    {
        private IServiceLocationRepo serviceLocationRepo;
        public ServiceLocationController(IServiceLocationRepo _serviceLocationRepo)
        {
            serviceLocationRepo = _serviceLocationRepo;
        }
        public IHttpActionResult SaveServiceLocation(ServiceLocationModel model)
        {
            var data = serviceLocationRepo.SaveServiceLocation(model);
            return Ok(data);
        }
        public  IHttpActionResult GetServiceLocations()
        {
            var data = serviceLocationRepo.GetServiceLocations();
            return Ok(data);
        }
        public  IHttpActionResult GetServiceLocation(int id)
        {
            var data = serviceLocationRepo.GetServiceLocation(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateServiceLocation(ServiceLocationModel model)
        {
            var data = serviceLocationRepo.UpdateServiceLocation(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteServiceLocation(int id)
        {
            var data = serviceLocationRepo.DeleteServiceLocation(id);
            return Ok(data);
        }
    }
}
