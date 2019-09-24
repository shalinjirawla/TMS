using Repository.Interface;
using Repository.Model;
using Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TRSBackEnd.Controllers
{
    public class AreaController : ApiController
    {
        private readonly IAreaRepo areaRepo;
        public AreaController(IAreaRepo _areaRepo)
        {
            areaRepo = _areaRepo;
        }
        public IHttpActionResult GetAreas()
        {
            var data = areaRepo.GetAreas();
            return Ok(data);
        }
        public IHttpActionResult SaveArea(AreaModel areaModel)
        {
            var data = areaRepo.SaveArea(areaModel);
            return Ok(data);
        }
        public IHttpActionResult GetArea(int id)
        {
            var data = areaRepo.GetArea(id);
            return Ok(data);
        }
        public IHttpActionResult DeleteArea(int id)
        {
            var data = areaRepo.DeleteArea(id);
            return Ok(data);
        }
        public IHttpActionResult UpdateArea(AreaModel areaModel)
        {
            var data = areaRepo.UpdateArea(areaModel);
            return Ok(data);

        }
    }
   
}
