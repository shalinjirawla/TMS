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
    public class PackingTypeController : ApiController
    {
        public readonly IPackingTypeRepo packingType;
        public PackingTypeController(IPackingTypeRepo typeRepo)
        {
            packingType = typeRepo;
        }
        public IHttpActionResult GetPackingTypes()
        {
            var data = packingType.GetPackingTypes();
            return Ok(data);
        }
        public IHttpActionResult SavePackingType(PackingTypeModel model)
        {
            var data = packingType.SavePackingType(model);
            return Ok(data);
        }
        public IHttpActionResult GetPackingType(int id)
        {
            var data = packingType.GetPackingType(id);
            return Ok(data);
        }
        public IHttpActionResult UpdatePackingType(PackingTypeModel model)
        {
            var data = packingType.UpdatePackingType(model);
            return Ok(data);
        }
        public IHttpActionResult DeletepackingType(int id)
        {
            var data = packingType.DeletepackingType(id);
            return Ok(data);
        }
    }
}
