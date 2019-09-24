using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.DB;
using Repository.Model;
using Repository.Interface;

namespace TRSBackEnd.Controllers
{
    public class CrossingController : ApiController
    {
        private ICrossingRepo crossingRepo;
        public  CrossingController (ICrossingRepo _crossingRepo)
        {
            crossingRepo = _crossingRepo;
        }
        public IHttpActionResult GetCrossings()
        {
            var data = crossingRepo.GetCrossings();
            return Ok(data);
        }
        public  IHttpActionResult GetCrossing(int id)
        {
            var data = crossingRepo.GetCrossing(id);
            return Ok(data);
        }
        public  IHttpActionResult SaveCrossing(CrossingModel model)
        {
            var data = crossingRepo.SaveCrossing(model);
            return Ok(data);
        }
        public IHttpActionResult UpdateCrossing(CrossingModel model)
        {
            var data = crossingRepo.UpdateCrossing(model);
            return Ok(data);
        }
        public IHttpActionResult DeleteCrossing(int id)
        {
            var data = crossingRepo.DeleteCrossing(id);
            return Ok(data);
        }
    }
}
