using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repository.Interface;
using Repository.DB;
using Repository.Model;

namespace TRSBackEnd.Controllers
{
    public class RequirementController : ApiController
    {
        private readonly IRequirementRepo requirement;
        public RequirementController(IRequirementRepo repo)
        {
            requirement = repo;
        }

        public IHttpActionResult GetRequirementModels()
        {
            var data = requirement.GetRequirementModels();
            return Ok(data);
        }

        public IHttpActionResult SaveRequirement(RequirementModel model)
        {
            var data = requirement.SaveRequirement(model);
            return Ok(data);
        }

        public IHttpActionResult GetRequirement(int id)
        {
            var data = requirement.GetRequirement(id);
            return Ok(data);
        }

        public IHttpActionResult UpdateRequirement(RequirementModel model)
        {
            var data = requirement.UpdateRequirement(model);
            return Ok(data);
        }

        public IHttpActionResult DeleteRequirement(int id)
        {
            var data = requirement.DeleteRequirement(id);
            return Ok(data);
        }
    }
}
