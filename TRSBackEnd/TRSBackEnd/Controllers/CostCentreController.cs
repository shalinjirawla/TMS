using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.DB;
using Repository.Interface;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class CostCentreController : ApiController
    {
        private readonly ICostCentreRepo costCentreRepo;
        public CostCentreController(ICostCentreRepo costCentre)
        {
            costCentreRepo = costCentre;
        }

        public IHttpActionResult GetCostCentreModels()
        {
            var data = costCentreRepo.GetCostCentreModels();
            return Ok(data);
        }

        public IHttpActionResult SaveCostCentre(CostCentreModel model)
        {
            var data = costCentreRepo.SaveCostCentre(model);
            return Ok(data);
        }

        public IHttpActionResult GetCostCentreModel(int id)
        {
            var data = costCentreRepo.GetCostCentreModel(id);
            return Ok(data);
        }

        public IHttpActionResult DeleteCOstCentre(int id)
        {
            var data = costCentreRepo.DeleteCOstCentre(id);
            return Ok(data);
        }
    }
}
