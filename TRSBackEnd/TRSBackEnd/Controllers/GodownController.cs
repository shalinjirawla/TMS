using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class GodownController : ApiController
    {
        private readonly IGodownRepo godownRepo;
        public GodownController(IGodownRepo _godownRepo)
        {
            godownRepo = _godownRepo;
        }
        public IHttpActionResult GetGodowns()
        {
            var Data = godownRepo.GetGodowns();
            return Ok(Data);
        }
        public IHttpActionResult SaveGodown(GodownModel model)
        {
            var Data = godownRepo.SaveGodown(model);
            return Ok(Data);
        }
        public IHttpActionResult DeleteGodown(int id)
        {
            var Data = godownRepo.DeleteData(id);
            return Ok(Data);
        }
        public IHttpActionResult UpdateGodown(GodownModel model)
        {
            var Data = godownRepo.UpdateData(model);
            return Ok(Data);
        }
        public IHttpActionResult GetGodown(int id)
        {
            var Data = godownRepo.GetGodown(id);
            return Ok(Data);
        }
    }
}
